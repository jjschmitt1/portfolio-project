import React from "react";
import { ReactTyped } from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
        <div className="main-info">
            <h1>Hello World, it's JJ Schmitt</h1>
            <ReactTyped 
                className="typed-text"
                strings={["CS Graduate", "Autodidact", "UW-Madison Graduate"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            <a href="#" className="btn-main-offer">Contact Me</a>
        </div>
    </div>
  )
}

export default Header
