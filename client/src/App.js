import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage"
import LoginPage from "./LoginPage"
import NavBar from "./NavBar"
import Cities from "./Cities"
import UserProfile from "./UserProfile"

function App() {

  const [user, setUser] = useState(null)

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
            <Cities />
          }
        />
        <Route
          path="/profile"
          element={
            <UserProfile user={user} />
          }
        />
      </Routes>
    </div> 
  );
}

export default App;
