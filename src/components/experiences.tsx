// Import the content components
import {
  CapstoneContent,
  FSE150Content,
  PAF415Content,
  FSE301Content,
  IrelandContent,
  SolarSpellContent,
  EPICSContent,
} from "./content";

// Updated experiences object that uses the content components
const experiences = {
  capstone: {
    title: "Capstone Project",
    status: ["Capstone I (Completed)", "Capstone II (In-Progress)"],
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=3269&auto=format&fit=crop",
    content: <CapstoneContent />,
  },
  fse150: {
    title: "FSE 150: Perspectives on Grand Challenges",
    status: "FSE 150 (Completed)",
    imageUrl:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80",
    content: <FSE150Content />,
  },
  paf415: {
    title: "PAF 415: Public Policy",
    status: "PAF 415 (Completed)",
    content: <PAF415Content />,
  },
  fse301: {
    title: "FSE 301: Entrepreneurship & Value Creation",
    status: "FSE 301 (Completed)",
    content: <FSE301Content />,
  },
  ireland: {
    title: "Ireland Study Abroad Program",
    status: "Study Abroad (Completed)",
    imageUrl:
      "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=3174&auto=format",
    content: <IrelandContent />,
  },
  solarspell: {
    title: "SolarSPELL Internship",
    status: "Under Review",
    imageUrl:
      "https://images.unsplash.com/photo-1632932693914-89b90ae3d16d?q=80&w=3163&auto=format&fit=crop",
    content: <SolarSpellContent />,
  },
  epics: {
    title: "EPICS Program",
    status: "Semester I & II (Confirmed)",
    imageUrl:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
    content: <EPICSContent />,
  },
};

export default experiences;
