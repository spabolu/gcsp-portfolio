import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { X } from "lucide-react";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";

// Import our components
import Talent from "./components/competencies/Talent";
import Multidisciplinary from "./components/competencies/Multidisciplinary";
import Entrepreneurship from "./components/competencies/Entrepreneurship";
import Multicultural from "./components/competencies/Multicultural";
import Social from "./components/competencies/Social";
import Reflection from "./components/competencies/Reflection";

// Import the centralized experiences object
import experiences from "./components/experiences";

// Modal Component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-xl bg-white shadow-xl transition-all">
                <div className="sticky top-0 border-b border-gray-200 bg-white px-6 py-4 rounded-t-xl flex justify-between items-center">
                  <Dialog.Title className="text-xl font-semibold text-gray-800">
                    {title}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="px-6 pt-4 pb-8">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

// Experience Details Component
interface ExperienceDetailsProps {
  title: string;
  status: string | string[];
  imageUrl?: string;
  content: React.ReactNode;
}

function ExperienceDetails({
  title,
  status,
  content,
  imageUrl,
}: ExperienceDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        {Array.isArray(status) ? (
          status.map((item, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm ${
                item.includes("Completed") || item.includes("Confirmed")
                  ? "bg-green-100 text-green-800"
                  : item.includes("Under Review") ||
                    item.includes("In-Progress")
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {item}
            </span>
          ))
        ) : (
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              status.includes("Completed")
                ? "bg-green-100 text-green-800"
                : status.includes("Under Review") ||
                  status.includes("In-Progress")
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {status}
          </span>
        )}
      </div>

      {imageUrl && (
        <div className="aspect-video rounded-lg overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="prose max-w-none">
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}

function App() {
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceDetailsProps | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* About Me Content */}
        <About />

        {/* Research/Talent Component */}
        <Talent
          setSelectedExperience={setSelectedExperience}
          experiences={experiences}
        />

        {/* Multidisciplinary Component */}
        <Multidisciplinary
          setSelectedExperience={setSelectedExperience}
          experiences={experiences}
        />

        {/* Entrepreneurship Component */}
        <Entrepreneurship
          setSelectedExperience={setSelectedExperience}
          experiences={experiences}
        />

        {/* Multicultural Component */}
        <Multicultural
          setSelectedExperience={setSelectedExperience}
          experiences={experiences}
        />

        {/* Social Consciousness Component */}
        <Social
          setSelectedExperience={setSelectedExperience}
          experiences={experiences}
        />

        {/* Reflection Section */}
        <Reflection />
      </main>

      <Footer />

      {/* Modal */}
      <Modal
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
        title={selectedExperience?.title || ""}
      >
        {selectedExperience && <ExperienceDetails {...selectedExperience} />}
      </Modal>
    </div>
  );
}

export default App;
