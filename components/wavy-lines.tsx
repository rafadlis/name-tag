"use client";
import React from "react";

interface RotatableWavyLinesBackgroundProps {
  numberOfLines?: number;
  rotationAngle?: number;
}

export default function WavyLinesBackground({
  numberOfLines = 5,
  rotationAngle = 0,
}: RotatableWavyLinesBackgroundProps = {}) {
  const generateWavyPath = (index: number) => {
    // Adjust dimensions to match card size (74mm x 106mm)
    const width = 74;
    const height = 106;

    const amplitude = (height / numberOfLines) * 0.3; // Scale amplitude based on height
    const frequency = 0.15; // Adjusted for card width
    const phase = Math.random() * Math.PI * 2;
    const yOffset = (height / numberOfLines) * index;

    let path = `M -10 ${yOffset}`;

    // Generate points across the width of the card
    for (let x = -10; x <= width + 10; x += 2) {
      const y = yOffset + amplitude * Math.sin(frequency * x + phase);
      path += ` L ${x} ${y}`;
    }

    return path;
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 74 106"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform={`rotate(${rotationAngle}, 37, 53)`}>
          {Array.from({ length: numberOfLines }).map((_, index) => (
            <path
              key={index}
              d={generateWavyPath(index)}
              fill="none"
              stroke="currentColor"
              className="text-blue-950"
              strokeWidth="0.15"
              strokeOpacity="0.25"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
