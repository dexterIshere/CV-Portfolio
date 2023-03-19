import React, { useState, useEffect } from "react";

interface ProgressProps {
  done: number;
}

const Progress: React.FC<ProgressProps> = ({ done }) => {
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`,
      };
      setStyle(newStyle);
    }, 200);

    return () => clearTimeout(timer);
  }, [done]);

  return (
    <div className="progress">
      <div className="progress-done" style={style}></div>
    </div>
  );
};

export default Progress;
