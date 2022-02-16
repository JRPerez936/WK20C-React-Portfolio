import React from "react";

function Resume() {
    return (
        <div>
            <section>
                <h2>My Resume:</h2>
                <a href="https://docs.google.com/document/d/1F33xOluDqNLEFD_SStkcGQ9Sw3PPbikf/edit?usp=sharing&ouid=113144781945645951195&rtpof=true&sd=true"><button>Download</button></a>
            </section>
            <section>
                <h3>Proficiencies:</h3>
                <h3> Front End</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>jQuery</li>
                    <li>React</li>
                    <li>Materialize</li>
                    <li>Bootstrap</li>
                </ul>
                <h3> Back End </h3>
                <ul>
                    <li>MySQL,Sequelize</li>
                    <li>Mongoose,MongoDB</li>
                    <li>APIs,REST</li>
                    <li>Node</li>
                    <li>Express</li>
                </ul>
            </section>
        </div>
    )
}


export default Resume;