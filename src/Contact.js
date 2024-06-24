import React from 'react';
import './card.css'; // Import the CSS file

export default function Contact() {
  const gender = <h3>Gender: Female</h3>; // React element

  return (
    <div className="card" align="center">
      <img src="images/sathya.jpg" alt="Profile" width="50%" />
      <h3>ID: 2200090076</h3>
      <h3>Name: N Sathyavathani </h3>
      <h3 className="year">Year: 2</h3>
      {gender}
      <h2 className="department">Department: CS&IT</h2>
      <i><u>2200090076@kluniversity.in</u></i><br />
      <h3>Contact: 9550539106</h3>

    </div>
  );
}
