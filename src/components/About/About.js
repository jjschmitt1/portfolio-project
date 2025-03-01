import React from 'react';
import MyNavBar from '../Navigation/MyNavBar';
import "./about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Helmet } from "react-helmet-async";

function About() {
    return (
        <div className="about-me-wrapper">
            <MyNavBar />
            <Helmet>
                <title>JJ Schmitt | About</title>
            </Helmet>
            <div className="container">
                <div className="content-section">
                    
                    <div className="left-column">
                        <h1>About Me</h1>
                        <p>
                        Hello! My name is JJ Schmitt, and I am a December 2024 graduate of UW-Madison. I enjoy playing golf, 
                        cooking, lifting weights, spending time with family and friends, and both playing and watching soccer. 
                        I’m also a passionate fan of Chicago and UW-Madison sports.

                        My journey into programming began in 5th grade, when a traveling coding class introduced my elementary 
                        school to drag-and-drop coding. From there, I was fortunate to attend a middle and high school that 
                        offered a wide range of programming courses, allowing me to develop and refine my skills over the years. 
                        I've been coding ever since!
                        </p>
                        {/* TODO: Add a "quote of the week" thing, where I can put cool quotes I like
                            quote 1: An idiot admires complexity, a genius admires simplicity - Terry A. Davis*/}
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
                        <img src='/content/me_in_buda.png' alt="Me in Budapest"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
