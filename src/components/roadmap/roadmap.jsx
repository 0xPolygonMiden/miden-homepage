import React from "react";
import roadmapImage from "../../assets/Image/roadmap.jpg";

export default function Roadmap() {
  return (
    <div className="roadmap-container">
      <img 
        src={roadmapImage} 
        alt="Roadmap" 
        className="w-full h-auto"
      />
    </div>
  );
}