import React from "react";
import MyNavBar from "../Navigation/MyNavBar";
import './experience.css';

function Experience() {
    return (
        <div className="experience-wrapper">
            <MyNavBar />
            <div className="container">
                <div className="coursework-section">
                    <div className="left col">
                        {/* Have a list of all my semester of schooling.
                            when one is selected, show the classes in right col */}
                        <p>coursework-left-col</p>
                    </div>
                    <div className="right col">
                        {/* Grid structure (can change) to show coursework from selected semester */}
                        <p>coursework-right-col</p>
                    </div>
                </div>
                <div className="resume-section">
                    {/* Have resume information here, as well as a button to download my resume */}
                    <p>resume-section</p>
                </div>
            </div>
        </div>
    )
}

export default Experience;