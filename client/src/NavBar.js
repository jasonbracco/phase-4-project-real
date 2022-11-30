import React from "react";
import { NavLink } from "react-router-dom";

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
          <NavLink
              to="/cities"
              style={linkStyles}
              background= "darkblue"
          >
          Cities
          </NavLink>
          <NavLink
              to="/profile"
              style={linkStyles}
              background= "darkblue"
          >
          Profile
          </NavLink>
          <NavLink
              to="/allreviews"
              style={linkStyles}
              background= "darkblue"
          >
          Reviews
          </NavLink>
          <NavLink
              to="/createnew"
              style={linkStyles}
              background= "darkblue"
          >
          Create
          </NavLink>
          <NavLink
              onClick={handleLogoutClick}
              style={linkStyles}
              background= "darkblue"
          >
          Logout
          </NavLink>
      </div>
      );
    }

    export default NavBar