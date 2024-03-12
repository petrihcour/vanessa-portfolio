import React from "react";
import useTypewriter from "./useTypewriter";

function Typewriter({ text, speed }) {
    const displayText = useTypewriter(text, speed);
    
    return <p className="accent home-accent">{displayText}</p>
}

export default Typewriter;