import React from 'react'
import { Typewriter } from "react-simple-typewriter";
function Typing() {
  return (
    <div>
      {" "}
      <span>
        <Typewriter
          words={[
            "Programmer",
            "UI/UX Designser",
            "Graphix Designer",
            "Web Developer",
          ]}
          loop={1000}
          cursor
          cursorStyle="|"
          typeSpeed={30}
          deleteSpeed={20}
          delaySpeed={1500}
        />
      </span>
    </div>
  );
}

export default Typing