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
      return ( 
        <div>
            <NavLink
                to="/cities"
                style={linkStyles}
                background= "darkblue"
            >
                Cities
            </NavLink>
        </div>
      );
    }

    export default NavBar