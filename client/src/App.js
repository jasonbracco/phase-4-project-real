import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage"
import LoginPage from "./Pages/LoginPage"
import NavBar from "./NavBar"
import Cities from "./Pages/Cities"
import UserProfile from "./Pages/UserProfile"
import CreateNew from "./Pages/CreateNew"
import City from './City'

//NEED TO UPDATE REVIEWS AND RESTAURANTS STATE ONCE THEY ARE ADDED IN CREATE COMPONENT

function App() {

  const [user, setUser] = useState(null)
  const [cities, setCities] = useState([])
  const [reviews, setReviews] = useState([])
  const [restaurants, setRestaurants] = useState([])

  //auto login if user matches
  useEffect(() => {
    fetch ("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/allcities")
    .then(response => response.json())
    .then(city => {
      setCities(city)
    })
  }, [])

  useEffect(() => {
    fetch("/reviews")
    .then(response => response.json())
    .then(review => setReviews(review))
  }, [])

  useEffect(() => {
    fetch("/restaurants")
    .then(response => response.json())
    .then(restaurant => setRestaurants(restaurant))
  }, [])

  function handleAddRestaurant(newRestaurant){
    setRestaurants([...restaurants, newRestaurant])
  }

  function handleAddCity(newCity){
    setCities([...cities, newCity])
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
    setReviews(updatedReviews);
  }

  if (!user) return <LoginPage setUser={setUser}/> 

  return (
    <div>
      <NavBar setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cities/*" element={<Cities cities={cities} user={user}/>}>
            <Route path=":id/*" element={<City cities={cities} user={user}/>}/>
        </Route>
        <Route path ="/profile" element={<UserProfile user={user} userReviewUpdate={handleUpdateReviews}/>} />
        <Route path="/createnew" element={<CreateNew user={user} cities={cities} onAddCity={handleAddCity} onAddReview={handleAddReview} onAddRestaurant={handleAddRestaurant} restaurants={restaurants} />} />
      </Routes>
    </div> 
  )
}

export default App;
