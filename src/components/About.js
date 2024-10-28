import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate euismod imperdiet. Integer scelerisque elit et ipsum ullamcorper convallis. Duis ut dui a leo placerat suscipit sed nec libero. Morbi pellentesque dapibus interdum. Fusce non tristique tellus. Suspendisse varius turpis at malesuada congue. Donec sed fermentum sem, nec iaculis metus. Phasellus vel neque et lectus feugiat hendrerit vitae nec mi. Etiam non sollicitudin eros. Sed in gravida turpis. Aliquam nibh nibh, pharetra in rhoncus ut, volutpat nec lorem. Phasellus sed velit sit amet magna porttitor placerat. Suspendisse consequat elementum risus, et ornare metus.</p>
    <img src={image} alt= "I made this"></img>
  </div>;
}

export default About;
