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

  //auto login if user matches
  useEffect(() => {
    fetch ("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

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
            <Cities cities={cities}/>
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
            <CreateNew user={user} cities={cities} restaurants={restaurants}/>
          }
        />
      </Routes>
    </div> 
  );
}

export default App;
