// import{Link} from "react-router-dom";
// import "./background.css";
// import "./Menu.css";
// import { useNavigate } from "react-router-dom";
// function Menu(){
//   const navigate=useNavigate();
//   function Navigation(){
//     navigate("/Login");
//   }
//     return(
//       <div>
//         <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//        {/* <Link to="/Login">
//        <button class="navbar-brand" href="#" className="btn1">Care and Cure Hospital</button>
//        </Link>  */}
      
//       <button class="navbar-brand" href="#" className="btn1" onClick={Navigation}>Care and Cure Hospital</button>


//        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
//          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
     
//        <Link to="/Req">
//        <li class="nav-item active">
//              <button class="nav-link" href="#" className="btn2">Request an Appointment</button>
//            </li>
//        </Link>
//            <Link to="/about">
//            <li class="nav-item active">
//              <button class="nav-link" href="#" className="btn2">About</button>
//            </li>
//            </Link>
//            <Link to="/contact">
//            <li class="nav-item active">
//              <button class="nav-link" href="#" className="btn2">Contact Us</button>
//            </li>
//            </Link>
//          </ul> </div>
//      </nav>
//      <div className="background">
    
// </div>

// </div>
// );
// }
// export default Menu;
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./background.css";
import "./Menu.css";

function Menu() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Care and Cure Hospital");

  const handleNavigation = (path) => {
    setButtonText("Navigating...");
    setIsLoading(true); // Show loading indicator while navigating.

    setTimeout(() => {
      navigate(path);
      setIsLoading(false); // Hide loading indicator after navigation.
      setButtonText("Care and Cure Hospital");
    }, 3000); // You can adjust the time (in milliseconds) for how long the "Navigating..." message is displayed.
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-brand btn1"
          onClick={() => handleNavigation("/Login")}
          disabled={isLoading}
        >
          {buttonText}
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <button
                className="nav-link btn2"
                onClick={() => handleNavigation("/Req")}
                disabled={isLoading}
              >
                Request an Appointment
              </button>
            </li>
            <li className="nav-item active">
              <button
                className="nav-link btn2"
                onClick={() => handleNavigation("/about")}
                disabled={isLoading}
              >
                About
              </button>
            </li>
            <li className="nav-item active">
              <button
                className="nav-link btn2"
                onClick={() => handleNavigation("/contact")}
                disabled={isLoading}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="background"></div>
    </div>
  );
}

export default Menu;
