import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage"
import NavBar from "./NavBar"

function App() {

  const [user, setUser] = useState(null)

  //auto login if user matches
  useEffect(() => {
    fetch ("/api/login").then((response) => {
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
          path="/cities"
          // element={
          //   <Cities />
          // }
        />
      </Routes>
    </div> 
  );
}

export default App;
