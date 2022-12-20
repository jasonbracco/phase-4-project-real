import {useState, useEffect} from "react"
import { Route, Routes } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import LoginPage from "./Pages/LoginPage"
import NavBar from "./NavBar"
import Cities from "./Pages/Cities"
import UserProfile from "./Pages/UserProfile"
import CreateNew from "./Pages/CreateNew"
import City from './City'

function App() {

  const [user, setUser] = useState(null)
  const [cities, setCities] = useState([])
  const [reviews, setReviews] = useState([])
  const [restaurants, setRestaurants] = useState([])
  const [userReviews, setUserReviews] = useState([])
  const [citySelected, setCitySelected] = useState(true)

  useEffect(() => {
    fetch ("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user)
          setUserReviews(user.reviews)
        })
        }
    });
  }, []);
  //eliminate the setUserReviews state, just pass user as a prop and use user.reviews
 
  useEffect(() => {
    fetch("/cities")
    .then((response) => {
      if (response.ok){
        response.json().then(city => {
          setCities(city)
          const restaurantArray = city.map((singleCity) => {
            return singleCity.restaurants
          })
          const allRestaurants = restaurantArray.flat()
          setRestaurants(allRestaurants)
          const reviewArray = allRestaurants.map((singleRestaurant)=> {
            return singleRestaurant.reviews
          })
          const allReviews=reviewArray.flat()
          setReviews(allReviews)
        })
      }
    })
  }, [userReviews])

  if(!user) return <LoginPage setUser={setUser}/> 

  function handleAddCity(newCity){
    setCities([...cities, newCity])
  }

  function handleAddRestaurant(newRestaurant){
    setRestaurants([...restaurants, newRestaurant])
  }

  function handleAddReview(newReview){
    setReviews([...reviews, newReview])
    handleAddUserReview(reviews)
  }

  function handleAddUserReview(newUserReview){
    if (newUserReview.user_id === user.id){
      setUserReviews([...userReviews, newUserReview])
    }
  }

  function handleUpdateReviews(updatedReview) {
    const updatedReviews = reviews.map((review) => {
      if (review.id === updatedReview.id) {
        return updatedReview;
      } else {
        return review;
      }
    });
    const updatedUserReviews = userReviews.map((userReview) => {
      if (userReview.id === updatedReview.id) {
        return updatedReview;
      } else {
        return userReview;
      }
    });
    setReviews(updatedReviews)
    setUserReviews(updatedUserReviews)
  }

  return (
    <div>
      <NavBar setUser={setUser} citySelected={citySelected} setCitySelected={setCitySelected}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route exact path="/cities" element={<Cities cities={cities} citySelected={citySelected} setCitySelected={setCitySelected}/>}>
            <Route path=":id" element={<City cities={cities}/>}/>
        </Route>
        <Route path ="/profile" element={<UserProfile user={user} userReviews={userReviews} userReviewUpdate={handleUpdateReviews}/>} />
        <Route path="/createnew" element={<CreateNew user={user} cities={cities} onAddCity={handleAddCity} onAddReview={handleAddReview} onAddRestaurant={handleAddRestaurant} restaurants={restaurants} onAddUserReview={handleAddUserReview}/>} />
      </Routes>
    </div> 
  )
}

export default App;
