import React from "react";

const EPICSContent: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="bg-amber-100 rounded-lg p-2">
        <p className="font-bold">
          Stardust Deck:{" "}
          <a
            href="https://docs.google.com/presentation/d/1hZw8SSTHxfQvrohfbz4LW3Hy9RNNoul-2aXLxMg8GuM/edit?usp=sharing"
            className="text-blue-600 hover:text-blue-800 hover:underline"
            target="_blank"
          >
            Google Drive Link
          </a>
        </p>
        <p className="font-bold">
          Headcount Deck:{" "}
          <a
            href="https://docs.google.com/presentation/d/1cFxulxwm8uM5A4dBSGLyJjgNUL11h30L-4pQN46AHLc/edit?usp=sharing"
            className="text-blue-600 hover:text-blue-800 hover:underline"
            target="_blank"
          >
            Google Drive Link
          </a>
        </p>
      </div>

      <p className="italic">Work-in-progress</p>
      <p>
        I was part of two teams in EPICS. First, I worked with the Stardust
        team, which focused on reducing solar panel waste by creating a
        standardized pipeline to refurbish pre-owned solar panels. My second
        project, Headcount, addressed occupancy tracking in response to social
        distancing and limited spacing. Using machine learning, Headcount
        monitored and counted total room occupancy to ensure it remained within
        the fire safety limits for classrooms and ballrooms.
      </p>
    </div>
  );
};

export default EPICSContent;
