import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { LinkedIn, Email, GitHub } from "@mui/icons-material";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hello! My name is Christian</h2>
        <div className="prompt">
          <p>A Software Engineer residing in the Philippines, for any help and concerns please see my details.</p>
          <LinkedIn />
          <Email />
          <GitHub />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <Card className="list">
          <ListGroup variant="flush">
          <ListGroup.Item className="item">
              <h2>Programming and Scripting Language </h2>
              <span>C/C++, Java, C#, .NET, Bash, PowerShell, VBScript & VBA</span>
            </ListGroup.Item>
            <ListGroup.Item className="item">
              <h2>Web Development</h2>
              <span>HTML, CSS, Javascript, Bootstrap & MERN Stack </span>
            </ListGroup.Item>
            <ListGroup.Item className="item">
              <h2>Frameworks</h2>
              <span>Spring Boot & Struts 2</span>
            </ListGroup.Item>
            <ListGroup.Item className="item">
              <h2>Unit Testing Framework</h2>
              <span>C++ Google Test & JUnit</span>
            </ListGroup.Item>
            <ListGroup.Item className="item">
              <h2>Database</h2>
              <span>MongoDB, MS SQL, MS Access & MySQL</span>
            </ListGroup.Item>
            <ListGroup.Item className="item">
              <h2>Operating Systems</h2>
              <span>Ubuntu, RedHat & Amazon Web Services (AWS)</span>
            </ListGroup.Item>
            <ListGroup.Item className="item">
              <h2>Automation Testing Tools</h2>
              <span>Selenium, Selenium WebDriver & Katalon Studio</span>
            </ListGroup.Item>
            <ListGroup.Item className="item">
              <h2>Version Control</h2>
              <span>Git & Tortoise SVN</span>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
}

export default Home;
