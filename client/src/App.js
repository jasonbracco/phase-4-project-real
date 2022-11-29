import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage"
import LoginPage from "./LoginPage"
import NavBar from "./NavBar"
import Cities from "./Cities"
import UserProfile from "./UserProfile"
import CreateNew from "./CreateNew"

function App() {

  const [user, setUser] = useState(null)
  const [restaurants, setRestaurants] = useState([])
  const [cities, setCities] = useState([])
  const [reviews, setReviews] = useState([])
  console.log(reviews)

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
    .then(city => setCities(city))
  }, [])

  useEffect(() => {
    fetch("/allrestaurants")
    .then(response => response.json())
    .then(restaurant => setRestaurants(restaurant))
  }, [])

  useEffect(() => {
    fetch("/allreviews")
    .then(response => response.json())
    .then(review => setRestaurants(review))
  }, [])

  function handleAddCity(newCity){
    setCities([...cities, newCity])
  }

  function handleAddRestaurant(newRestaurant){
    setRestaurants([...restaurants, newRestaurant])
  }

  function handleAddReview(newReview){
    setReviews([...reviews, newReview])
  }

  if (!user) return <LoginPage setUser={setUser}/> 

  return (
    <div>
      <NavBar setUser={setUser}/>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage />
          }
        />
        <Route
          path="/cities"
          element={
            <Cities cities={cities} />
          }
        />
        <Route
          path="/profile"
          element={
            <UserProfile user={user} />
          }
        />
        <Route
          path="/createnew"
          element={
            <CreateNew user={user} cities={cities} restaurants={restaurants} onAddCity={handleAddCity} onAddRestaurant={handleAddRestaurant} onAddReview={handleAddReview}/>
          }
        />
      </Routes>
    </div> 
  );
}

export default App;
