import React from "react";
import { Link } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "150px",
    padding: "15px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
    textAlign: "center"
  };
  
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
          <Link to="/" style={linkStyles} background= "darkblue">Home</Link>
          <Link to="/cities" style={linkStyles} background= "darkblue">Places to Eat</Link>
          <Link to="/profile" style={linkStyles} background= "darkblue" >Profile</Link>
          <Link to="/createnew" style={linkStyles} background= "darkblue">Create</Link>
          <Link onClick={handleLogoutClick} style={linkStyles} background= "darkblue">Logout</Link>
      </div>
      );
    }

    export default NavBar