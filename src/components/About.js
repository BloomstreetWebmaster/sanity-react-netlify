import React from "react";

function About() {
  return (
    <div className="about">
      <h1>About ME</h1>
      <div className="profile">
        <h2>Profile</h2>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
      </div>
      <div className="content">
        <div className="skill">
          <h2>Programing Skill</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Python</li>
            <li>Javascript</li>
          </ul>
        </div>
        <div className="experience">
          <h2>Experience</h2>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
