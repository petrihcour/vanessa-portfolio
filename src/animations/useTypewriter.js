import { DisplaySettingsOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";

function useTypewriter(text, speed = 200) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        const currentText = text[index];
        let currentDisplayText = "";

        if (displayText.length < currentText.length) {
          currentDisplayText = currentText.substring(0, displayText.length + 1);
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % text.length);
          }, 5000); // timeout pause before erasing
        }
        setDisplayText(currentDisplayText);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed, displayText, index]);

  return displayText;
}

export default useTypewriter;
