// import { useState, useEffect } from "react";

// function useTypewriter(text, speed = 200) {
//   const [displayText, setDisplayText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const typingInterval = setInterval(() => {
//       const currentWord = text[currentIndex];
//       if (!currentWord) {
//         clearInterval(typingInterval);
//         return;
//       }

//       if (displayText !== currentWord) {
//         setDisplayText(prevText => {
//           const nextCharacter = currentWord[prevText.length];
//           return prevText + nextCharacter;
//         });
//       } else {
//         setTimeout(() => {
//           console.log("Erasing text:", displayText);
//           setDisplayText(prevText => {
//             if (prevText !== "") {
//               return prevText.slice(0, -1); // Delete last character
//             } else {
//               return prevText;
//             }
//           });
//           if (displayText !== "") {
//             setTimeout(() => {
//               console.log("Moving to the next word");
//               setCurrentIndex(prevIndex => (prevIndex + 1) % text.length); // Move to the next word
//             }, 1000); // Timeout before moving to the next word
//           }
//         }, 1000); // Timeout before erasing
//       }
//     }, speed);

//     return () => {
//       clearInterval(typingInterval);
//     };
//   }, [text, speed, displayText, currentIndex]);

//   return displayText;
// }

// export default useTypewriter;
