import { useEffect, useState } from "react";

const HoneComp: React.FC = () => {
  const [textIndex, setTextIndex] = useState<number>(0);
  const [letterIndex, setLetterIndex] = useState<number>(0);
  const [headerText, setHeaderText] = useState<string>("");

  const [textArray, setTextArray] = useState<string[]>([]);

  useEffect(() => {
    setTextArray(["Compétences", "Skills", "Kompetenzen","手腕", "技能", "competencias"]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (letterIndex < textArray[textIndex].length) {
        setHeaderText((prev) => prev + textArray[textIndex][letterIndex]);
        setLetterIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setHeaderText("");
          setLetterIndex(0);
          setTextIndex((prev) => (prev + 1) % textArray.length);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [letterIndex, textIndex, textArray]);

  return (
    <>
    <div className="digitalT"></div>
      <h1 className="compT">{headerText}</h1>
      <style jsx>{`
        h1:after {
          content: "_";
          animation: blink 1s linear infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default HoneComp;