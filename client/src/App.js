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

  //auto login if user matches
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

  useEffect(() => {
    fetch("/cities")
    .then((response) => {
      if (response.ok){
        response.json().then(city => {
          setCities(city)
          const array1 = city.map((singleCity) => {
            return singleCity.restaurants
          })
          const someRestaurants = array1.flat()
          setRestaurants(someRestaurants)
          const array2 = someRestaurants.map((singleRestaurant)=> {
            return singleRestaurant.reviews
          })
          const someReviews=array2.flat()
          setReviews(someReviews)
        })
      }
    })
  }, [user, userReviews])

  if(!user) return <LoginPage setUser={setUser}/> 

  function handleAddCity(newCity){
    setCities([...cities, newCity])
  }

  function handleAddRestaurant(newRestaurant){
    setRestaurants([...restaurants, newRestaurant])
  }

  function handleAddReview(newReview){
    setReviews([...reviews, newReview])
  }

  function handleUpdateReviews(updatedReview) {
    const updatedReviews = reviews.map((review) => {
      if (review.id === updatedReview.id) {
        return updatedReview;
      } else {
        return review;
      }
    });
    setReviews(updatedReviews)
    setUserReviews(updatedReviews);
  }

  return (
    <div>
      <NavBar setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cities/*" element={<Cities cities={cities} restaurants={restaurants} reviews={reviews}/>}>
            <Route path=":id/*" element={<City cities={cities} restaurants={restaurants} reviews={reviews}/>}/>
        </Route>
        <Route path ="/profile" element={<UserProfile user={user} userReviews={userReviews} userReviewUpdate={handleUpdateReviews}/>} />
        <Route path="/createnew" element={<CreateNew user={user} cities={cities} onAddCity={handleAddCity} onAddReview={handleAddReview} onAddRestaurant={handleAddRestaurant} restaurants={restaurants} />} />
      </Routes>
    </div> 
  )
}

export default App;
