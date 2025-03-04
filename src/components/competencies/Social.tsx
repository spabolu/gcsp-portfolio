import React from "react";
import { Heart } from "lucide-react";

const Social: React.FC = ({ setSelectedExperience, experiences }) => {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-6">
        <Heart className="w-8 h-8 text-blue-600" />
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Social Consciousness Component
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Status: EPICS Semester I & II (Confirmed)
          </p>
        </div>
      </div>
      <div
        className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02]"
        onClick={() => setSelectedExperience(experiences.epics)}
      >
        <div className="grid md:grid-cols-2">
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-4">EPICS Program</h3>
            <p className="text-gray-600 mb-4">
              Participated in two semesters of Engineering Projects in Community
              Service (EPICS), working on healthcare accessibility projects for
              underserved communities.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">Impact:</h4>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>Developed low-cost medical device prototypes</li>
                  <li>Collaborated with local healthcare clinics</li>
                  <li>Implemented community feedback systems</li>
                  <li>Created sustainable solution frameworks</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="aspect-square">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
              alt="EPICS Project"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
