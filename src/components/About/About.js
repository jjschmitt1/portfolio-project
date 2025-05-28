import React from 'react';
import MyNavBar from '../Navigation/MyNavBar';
import "./about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Helmet } from "react-helmet-async";

function About() {

    const quotes = ["\"The man who loves walking will walk further than the man who loves the destination\". -Lao Tzu",
        "\"An idiot admires complexity, a genius admires simplicity.\" -Terry A. Davis",
        "\"Nothing happens to any man that he is not formed by nature to bear.\" -Marcus Aurelius",
        "\"He who has a why can bear almost any how.\" -Friedrich Nietzsche",
        "\"We suffer more often in imagination than in reality\" -Seneca",
        "\"The only person with whom you have to compare yourself is you in the past\" -Sigmund Freud",
        "\"A man who is a master of patience is a master of everything else\" -George Savile"
    ];

    const rand_num = Math.floor(Math.random() * 6.9);

    return (
        <div className="about-me-wrapper">
            <MyNavBar />
            <Helmet>
                <title>JJ Schmitt | About</title>
            </Helmet>
            <div className="container">

                <div className="quote-section">
                    <p>Quote of the day</p>
                    <p>{quotes[rand_num]}</p>
                </div>

                <div className="content-section">
                
                    <div className="left-column">
                        <h1>About Me</h1>
                        <p>
                        {/*Hello! My name is JJ Schmitt, and I am a December 2024 graduate of UW-Madison. I enjoy playing golf, 
                        cooking, lifting weights, spending time with family and friends, and both playing and watching soccer. 
                        I’m also a passionate fan of Chicago and UW-Madison sports.

                        My journey into programming began in 5th grade, when a traveling coding class introduced my elementary 
                        school to drag-and-drop coding. From there, I was fortunate to attend a middle and high school that 
                        offered a wide range of programming courses, allowing me to develop and refine my skills over the years. 
                        I've been coding ever since!*/}
                        Hello! My name is JJ Schmitt and I recently graduated from UW-Madison with a B.S. in Computer Science and
                        minors in Math and German. Since graduation, I've spent time learning new programming languages, attempting 
                        to get into shape, and building projects that I either find interesting or align with my future career goals.
                        My current career goal is to earn a position as an entry level data engineer. The combination of coding and
                        manipulating numbers is something that I feel innately drawn towards. Outside of my professional life, I love
                        to play golf, lift weights, cook protein-heavy meals, watch sports, and hang with my friends. Thanks for checking
                        out my website!

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
