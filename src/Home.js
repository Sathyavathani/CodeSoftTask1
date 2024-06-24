import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  
  let resume = () => {
    window.location.href = 'https://drive.google.com/file/d/17zW_pGPElK4NB7Z889uWiNOcBQHwv0jr/view?usp=drivesdk';
  };
  var linkedin = () => {
    window.location.href = 'https://www.linkedin.com/in/n-sathyavathani-ab211328b/';
  };
  var github = () => {
    window.location.href = 'https://github.com/Sathyavathani';
  };
  let navigate = useNavigate();
  var contact = () => {
    navigate('/contact');//navigate to this page
  }
  
  return (
    <div>
      <div className="container">
        <div className="content">
          <h3>Hello everyone, I'm Sathyavathani👋🏽</h3>
          <p>I'm currently pursuing a B.Tech in Computer Science and Information Technology at KLU. I am eager to enhance my abilities and am dedicated to putting in the effort to acquire new skills.</p>
          <img src="images/linkedin.jpg" alt="LinkedIn" style={{ width: '80px', height: '80px' }} onClick={linkedin} />&nbsp;&nbsp;
          <img src="images/github.png" alt="GitHub" style={{ width: '80px', height: '80px' }} onClick={github} /><br /><br />
          <button className="Button" onClick={contact}>Contact Me</button>&nbsp;&nbsp;
          <button className="Button" onClick={resume}>See My Resume</button>
        </div>
        <div className="image">
          <img src='images/sathya.jpg' alt="Profile" />
        </div>
      </div>
      <footer className="footer" align='center'>
      <h5>&copy; 2024 N. Sathyavathani. All rights reserved.</h5>
        <h5>
          <a href="https://www.linkedin.com/in/n-sathyavathani-ab211328b/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://github.com/Sathyavathani" target="_blank" rel="noopener noreferrer"> GitHub</a> 
        </h5>
      </footer>
    </div>
  );
}
