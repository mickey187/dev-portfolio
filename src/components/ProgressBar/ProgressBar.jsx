import React, { useEffect, useState } from 'react';

function ProgressBar({ initialPercentage = 5, targetPercentage = 85, duration = 6000 }) {
  const [percentage, setPercentage] = useState(initialPercentage);

  useEffect(() => {
    const timeout = setTimeout(() => setPercentage(targetPercentage), 100);

    return () => clearTimeout(timeout);
  }, [targetPercentage]);

  return (
    <div className="p-1 rounded-full bg-black/25 shadow-inner shadow-black/25">
      <div
        className="h-4 rounded-full bg-gradient-to-b from-white/30 to-white/5 transition-[width,background-color] duration-[0.4s] linear"
        style={{
          width: `${percentage}%`,
          transitionDuration: `${duration / 1000}s`,
          backgroundColor: percentage >= targetPercentage ? '#491ef7' : '#896df7',
        }}
      />
    </div>
  );
}

export default ProgressBar;
