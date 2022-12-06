import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage"
import LoginPage from "./Pages/LoginPage"
import NavBar from "./NavBar"
import Cities from "./Pages/Cities"
import UserProfile from "./Pages/UserProfile"
import CreateNew from "./Pages/CreateNew"

function App() {

  const [user, setUser] = useState(null)
  const [cities, setCities] = useState([])
  const [reviews, setReviews] = useState([])

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
  console.log(cities)
  console.log(cities.restaurants)

  useEffect(() => {
    fetch("/allreviews")
    .then(response => response.json())
    .then(review => setReviews(review))
  }, [])

  function handleAddCity(newCity){
    setCities([...cities, newCity])
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
          path="/restaurantpage"
          element={
            <Cities cities={cities} reviews={reviews} />
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
            <CreateNew user={user} cities={cities} onAddCity={handleAddCity} onAddReview={handleAddReview}/>
          }
        />
      </Routes>
    </div> 
  );
}

export default App;
