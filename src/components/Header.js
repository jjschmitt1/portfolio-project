import React from "react";
import { ReactTyped } from "react-typed";
import { Helmet } from "react-helmet-async";

const Header = () => {
  return (
    <div className="header-wrapper">
        <Helmet>
            <title>JJ Schmitt | Home</title>
        </Helmet>
        <div className="main-info">
            <h1>Hello World, it's JJ Schmitt</h1>
            <ReactTyped 
                className="typed-text"
                strings={["CS Graduate", "Autodidact", "Cooking Enthusiast", "UW-Madison Graduate", "Weightlifter"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
        </div>
    </div>
  )
}

export default Header
