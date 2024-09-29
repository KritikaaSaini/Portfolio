// components/Particle.js
import React from "react";

function Particle({ top, left }) {
  return (
    <div
      className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
                 from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute"
      style={{ top: `${top}%`, left: `${left}%` }} // Randomize positions
    ></div>
  );
}

export default Particle;
