import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi , I am <span className="purple">Akanksha Chaturvedi </span>
            a passionate  <span className="purple">  MERN Stack Developer</span> from Jaipur, India, currently working at Digital Future Web Solution.
            <br />
            I specialize in building dynamic, scalable, and user-friendly web applications using <span className="purple">  MongoDB, Express.js, React.js, and Node.js.</span>
            <br />
           
            I hold an Integrated MCA in Computer Application from RTU, equipping me with a strong foundation in software development, problem-solving, and modern web technologies.
            <br />
            <br />
            Beyond coding, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies and frameworks
            </li>
            <li className="about-activity">
              <ImPointRight />  Writing tech blogs to share insights and best practices
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming to sharpen problem-solving skills
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Striving to engineer solutions that make a difference, one line of code at a time!"{" "}
          </p>
          <footer className="blockquote-footer">Akanksha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
