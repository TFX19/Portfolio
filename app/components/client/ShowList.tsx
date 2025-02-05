"use client";

import React, { useState } from "react";

interface TechnologyListProps {
  technologies: string[];
}

const TechnologyList: React.FC<TechnologyListProps> = ({ technologies }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleTechnologies = showAll ? technologies : technologies.slice(0, 6);

  return (
    <div>
      <ul className="list-disc pl-5">
        {visibleTechnologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      
      {technologies.length > 6 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="btn btn-primary mt-4"
        >
          {showAll ? "Back" : "See more"}
        </button>
      )}
    </div>
  );
};

export default TechnologyList;
