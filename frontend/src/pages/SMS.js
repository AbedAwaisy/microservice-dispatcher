import React from 'react';
import './SMS.css'; // Assuming you have a CSS file named "About.css"

const SMS = () => {
    return (
        <div className="about-container">
            <h1 className="about-heading">About Me</h1>
            <p className="about-intro">
                Hello! I'm <span className="about-highlight">Abed</span>, a passionate software engineer with a focus on building dynamic and impactful web applications.
                Currently, I'm working on my first website, which is not just a project but a vision brought to life through code.
            </p>
            <p className="about-details">
                The website is an embodiment of my technical journey. It leverages the power of modern technologies including
                <span className="about-highlight">React</span> for seamless user interfaces, <span className="about-highlight">Node.js</span> for server-side logic, and <span className="about-highlight">MongoDB</span> for efficient data management.
            </p>
            <p className="about-functionality">
                The core functionalities of the website revolve around managing products, enabling features such as adding,
                removing, and searching for products. These features showcase my commitment to creating user-centric solutions.
            </p>
            <p className="about-education">
                I hold a degree in Information System Engineering, which has not only provided me with a strong foundation
                but has also fueled my passion for continuous learning and pushing the boundaries of what's possible in tech.
            </p>
            <p className="about-excited">
                I'm thrilled to see this project through to completion and deploy it to the online world. Join me on this journey
                as I turn lines of code into an impactful web presence.
            </p>
        </div>
    );
};

export default SMS;
