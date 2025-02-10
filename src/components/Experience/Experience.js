import React, { useState } from "react";
import MyNavBar from "../Navigation/MyNavBar";
import "./experience.css";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Experience() {
    // State to store the selected semester
    const [selectedSemester, setSelectedSemester] = useState("Fall 2021");

    // Object containing coursework for each semester
    const courseworkData = {
        "Fall 2021": ["L I S 201: The Information Society", "CS 300: Programming II", "German 203: Third Semester German", "Philos 104: AI Ethics"],
        "Spring 2022": ["Math 340: Linear Algebra", "CS 400: Programming III", "CS 252: Intro to Computer Engineering", "Anthro 104: Cultural Anthropology & Diversity", "German 204: Fourth Semester German"],
        "Fall 2022": ["CS 354: Machine Organization & Programing", "CS 240: Intro to Discrete Mathmatics", "German 249: Speaking and Listening", "Nutri Sci 132: Nutrition Today"],
        "Spring 2023": ["CS 577: Intro to Algorithms", "CS 435: Intro to Cryptography", "German 258: Intermediate Reading", "Econ 101: Microeconomics"],
        "Fall 2023": ["CS 571: Building User Interfaces", "Math 425: Intro to Combinatorial Optimization", "General Business 310: Accounting and Finance for Non-business Majors", "German 262: Intermediate Writing", "Econ 102: Macroeconomics"],
        "Spring 2024 (Study Abroad)": ["German 337: Advanced Conversation", "German 367: Study Abroad German", "Poli Sci 340: EU politics", "International Business 365: The Business of Beer Brewing"],
        "Fall 2024": ["CS 537: Intro to Operating Systems", "CS 525: Linear Optimization", "CS 407: Mobile Systems and Applications", "Anthro 105: Biological Anthropology"],
    };

    return (
        <div className="experience-wrapper">
            <MyNavBar />
            <Container>
                <Row className="coursework-section">
                    <Col md={4} className="left-col">
                        <h2>Semesters</h2>
                        <ListGroup>
                            {Object.keys(courseworkData).map((semester) => (
                                <ListGroup.Item
                                    key={semester}
                                    action
                                    active={selectedSemester === semester}
                                    onClick={() => setSelectedSemester(semester)}
                                >
                                    {semester}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                    {/* TODO: Add card pop-up when one of the classes is selected */}
                    <Col md={8} className="right-col">
                        <h2>{selectedSemester} Courses</h2>
                        <div className="course-grid">
                            {courseworkData[selectedSemester].map((course, index) => (
                                <Card key={index} className="course-card">
                                    <Card.Body>
                                        <Card.Text>{course}</Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </Col>
                </Row>
                <Row className="internship-section">
                    <Col>
                            <h2>Internship Experience</h2>
                            <h3>Caurus: Software Engineering Intern</h3>
                            <p>May 2024 - Aug 2024</p>
                            <ul>
                                <li>Worked with a small engineering team at a revenue generating data infrastructure startup</li>
                                <li>Assisted with product ideation through curation of potential clients, participation on client discovery calls, and ideation talks</li>
                                <li>Learned the intricacies of what a modern data stack looks like, and which technologies fit into the stack most effectively</li>
                                <li>Completed a replicator program in Rust to assist the team with future testing methods. This program empowers our engineers to bootstrap from a heterogeneous machine cluster to an experimental service cell with a single command spot</li>
                            </ul>
                            <h3>UBS: Corporate Cash Management Group Intern</h3>
                            <p>May 2023 - Aug 2023</p>
                            <ul>
                                <li>Developed an understanding of the importance of fostering strong and lasting client relationships through communication</li>
                                <li>Created Microsoft Office macros in VBA to automate time-consuming tasks for multiple team members</li>
                                <li>Perform quantitative research on current market trends and client holdings for the managing director - $45 billion business</li>
                                <li>Collaborated with team members to present weekly team presentations and an end-of-summer capstone project</li>
                            </ul>
                    </Col>
                </Row>
                <Row className="resume-section">
                    <Col>
                        <h2>Resume</h2>
                        <p>Download my resume here:</p>
                        <a href="/resume.pdf" download className="btn btn-primary">
                            Download Resume
                        </a>
                    </Col>
                    <Col>
                        <h2>Transcript</h2>
                        <p>Download my transcript here:</p>
                        <a href="/transcript.pdf" download className="btn btn-primary">
                            Download Transcript
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Experience;
