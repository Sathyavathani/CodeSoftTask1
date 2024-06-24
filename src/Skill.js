import React from 'react';
import './Abilities.css'; // Assuming Style.css contains your CSS styles

export default function Skill() {
  return (
    <div>
      <h2 align='center'>MySkills</h2>
      <div className="skill-cards">
        {/* Programming Languages Card */}
        <div className="card">
          <h4>Programming Languages</h4>
          <ul>
            <li>Advanced Java, C</li>
            <li>Database-MySQL</li>
          </ul>
         
        </div>
        
        {/* Web Development Card */}
        <div className="card">
          <h4>Web Development</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React Library</li>
          </ul>
          
        </div>
        
        {/* MERN Stack Project Card */}
        <div className="card">
          <h4>MERN Stack Project</h4>
          <p>Site Link:🚀<br/><a href="https://master--bcevents19.netlify.app/" style={{color: 'blue'}}>EventManagementSystem</a></p>
         
        </div>
      </div>
    </div>
  );
}
