import React from "react";
import MyNavBar from "../Navigation/MyNavBar";
import './projects.css';
import { Row, Col, Card } from 'react-bootstrap';
import { Helmet } from "react-helmet-async";

function Projects() {
    const descriptions = {
        "Arbet": "Developed an automated arbitrage detection system that retrieves real-time betting lines for select sports via an API. The system processes data in Node.js, transforming and forwarding it to a Rust-based computation engine that efficiently analyzes arbitrage opportunities across multiple markets. The results are returned to the Node.js environment via JSON for further processing or display.",
        "Replicator": "I developed a replicator program in Rust to streamline and enhance our team's testing capabilities. This tool enables engineers to efficiently bootstrap from a heterogeneous machine cluster to an experimental service cell with a single command, significantly reducing setup time and improving deployment consistency. By automating this process, the program enhances scalability and ensures a seamless transition between environments, ultimately optimizing the team's workflow for future testing methods.",
        "Personal Portfolio": "Developed this very website through a combination of React.js and CSS. You can access the code base on my GitHub under 'portfolio-project'."
    }

    /* TODO: Change Arbet src to something different */
    const myProjects = [
        {name: "Arbet", src: "/content/replicator.png", description: descriptions["Arbet"]},
        {name: "Replicator", src: "/content/replicator.png", description: descriptions["Replicator"]},
        {name: "Personal Portfolio", src: "/content/personal_portfolio.png", description: descriptions["Personal Portfolio"]}
    ]

    return (
        <div className="projects-wrapper">
            <MyNavBar />
            <Helmet>
                <title>JJ Schmitt | Projects</title>
            </Helmet>
            <Row className="justify-content-center mt-5">
                {myProjects.map((project, idx) => (
                    <Col key={idx} md={10} lg={8} className="mb-4">
                        <Card className="project-card flex-row">
                            <Card.Img variant="left" className="project-image" src={project.src} alt={`Image of ${project.name}`} />
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Projects
