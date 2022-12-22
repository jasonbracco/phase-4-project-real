import React from "react";
import { Link } from "react-router-dom";
  
  function NavBar({setUser, setCitySelected}) {

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
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/cities" className="nav-link" onClick={() => setCitySelected(true)}>Places to Eat</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
          <Link to="/createnew" className="nav-link">Create</Link>
          <Link onClick={handleLogoutClick} className="nav-link">Logout</Link>
      </div>
      );
    }

    export default NavBar