import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
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
    fetch("/allreviews")
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

  if (!user) return <LoginPage setUser={setUser}/> 

  console.log(restaurants)
  return (
    <div>
      <NavBar setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cities/*" element={<Cities cities={cities} />}>
            <Route path=":id/*" element={<City cities={cities}/>} />
        </Route>
        <Route path ="/profile" element={<UserProfile user={user} reviews={reviews} />} />
        <Route path="/createnew" element={<CreateNew user={user} cities={cities} onAddCity={handleAddCity} onAddReview={handleAddReview} onAddRestaurant={handleAddRestaurant} restaurants={restaurants} />} />
      </Routes>
    </div> 
  )
}

export default App;
