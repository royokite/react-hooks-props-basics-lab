import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  const { name, city, bio, links, isBio, color } = user;
  return (
    <div>
      <NavBar />
      <Home name={name} city={city} color={color}/>
      <About bio={bio} github={links.github} linkedin={links.linkedin} isBio={isBio}/>
    </div>
  );
}

export default App;
