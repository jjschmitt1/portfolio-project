import React from 'react';
import MyNavBar from '../Navigation/MyNavBar';
import buda_pic from '../../me_in_buda.png';
import "./about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

function About() {
    return (
        <div className="about-me-wrapper">
            <MyNavBar />
            <div className="container">
                <div className="content-section">
                    
                    <div className="left-column">
                        <h1>About Me</h1>
                        <p>
                            Hello! My name is JJ Schmitt and I am a December 2024 Graduate of UW-Madison.
                            I enjoy playing golf, cooking, lifting weights, hanging out with friends and
                            family, watching and playing soccer, watching Chicago / UW-Madison sports, 
                            and programming. My first time programming was in 5th grade, when a traveling coding class
                            came to my elementary school and taught us drag-and-drop coding. I was lucky
                            enough to attend a middle school and high school that offered a plethora of 
                            programming courses, and I've been coding ever since.
                        </p>
                        <p>
                            You can reach me at jlschmitt19@gmail.com or my socials below!
                        </p>
                        <div className="social-container d-flex">
                            <a href="https://www.linkedin.com/in/jlschmitt4/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://www.instagram.com/jj.schmitt1/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://github.com/jjschmitt1" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="right-column">
                        <img src={buda_pic} alt="A picture of me in Budapest"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
