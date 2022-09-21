import React from "react";
import Links from "./Links";

function About({ github, linkedin, bio, isBio }) {

  return (
    <div id="about">
      <h2>About Me</h2>
      {/* <p>{!isBio ? null : bio}</p> */}
      {!bio ? null : <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin}/>
    </div>
  );

}

export default About;
