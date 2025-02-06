import React from 'react'
import MyNavBar from '../Navigation/MyNavBar';
import buda_pic from '../../me_in_buda.png';
import "./about.css";

function About() {
    return (
        <div className="about-me-wrapper">
            <MyNavBar />
            <div className="container">
                <div className="title">
                    <h1>About Me</h1>
                </div>    
                <div className="content-section">
                    
                    <div className="about-me-text">
                        <p>
                            Hello! My name is JJ Schmitt and I am a December 2024 Graduate of UW-Madison.
                            I enjoy playing golf, cooking, lifting weights, hanging out with friends and
                            family, watching and playing soccer, watching Chicago / UW-Madison sports, 
                            and programming. My first time programming was in 5th grade, when a traveling coding class
                            came to my elementary school and taught us drag and drop coding. I was lucky
                            enough to attend a middle school and high school that offered a plethora of 
                            programming courses, and I've been coding ever since.
                        </p>
                    </div>
                    <div className="image-section">
                        <img src={buda_pic} alt="A picture of me in Budapest"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;