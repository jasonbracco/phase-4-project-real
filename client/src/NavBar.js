import React from "react";
import { Link } from "react-router-dom";
  
  function NavBar({setUser}) {

    function handleLogoutClick(){
      fetch("/logout", {
        method: "DELETE"})
        .then((response) => {
          if (response.ok){
            setUser(null)
          }
      })
    }

    return ( 
      <div>
          <Link to="/" className="nav-link" background= "darkblue">Home</Link>
          <Link to="/cities" className="nav-link" background= "darkblue">Places to Eat</Link>
          <Link to="/profile" className="nav-link" background= "darkblue" >Profile</Link>
          <Link to="/createnew" className="nav-link" background= "darkblue">Create</Link>
          <Link onClick={handleLogoutClick} className="nav-link" background= "darkblue">Logout</Link>
      </div>
      );
    }

    export default NavBar