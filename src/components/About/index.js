import React from 'react'
import coverImage from "../../assets/images/about/about_me.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "15%" }} alt="perez_j" />
      <div className="my-2">
        <p>
        Hi, my name is Justin Perez. I am a Full Stack Web Developer, and a Junior at Rutgers University studying Information Technology and Computer Science. I've been described as efficient and hardworking, and am constantly improving my skills in communication and problem-solving. I actively strive towards discovering and learning to use cutting-edge technology and software that may become useful in workplace enviornments.
      </p>
      </div>
    </section>
  )
}

export default About