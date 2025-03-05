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
      "https://dhravya.dev/_next/image?url=https%3A%2F%2Fi.dhr.wtf%2Fr%2Flrbi87yh1a0.jpeg&w=1920&q=75",
    content: <FSE150Content />,
  },
  paf415: {
    title: "PAF 415: Public Policy",
    status: "PAF 415 (Completed)",
    imageUrl:
      "https://scontent-phx1-1.xx.fbcdn.net/v/t39.30808-6/357552729_651386900365684_6366090596104965542_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wdeAVj3evtcQ7kNvgF4B-s9&_nc_oc=AdgC2aYQbbNbbw7VgEFC0XVrHbHR4tl8KXAq8wiluKztZQ7IPombMsBvvpDS7EaTm6c&_nc_zt=23&_nc_ht=scontent-phx1-1.xx&_nc_gid=AMSic6UXZmkwObBEV0bfFPH&oh=00_AYAgreSW3iuESMuVVOJMwzVWIDAmhuoxgqzt_8985pKmYg&oe=67CD8C7B",
    content: <PAF415Content />,
  },
  fse301: {
    title: "FSE 301: Entrepreneurship & Value Creation",
    status: "FSE 301 (Completed)",
    imageUrl:
      "https://news.asu.edu/sites/default/files/styles/block_image_16_9_lge/public/hero_22.jpg",
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
    status: "Internship (Completed)",
    imageUrl:
      "https://images.unsplash.com/photo-1632932693914-89b90ae3d16d?q=80&w=3163&auto=format&fit=crop",
    content: <SolarSpellContent />,
  },
  epics: {
    title: "EPICS Program",
    status: ["FSE 104 (Completed)", "FSE 404 (Completed)"],
    imageUrl:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
    content: <EPICSContent />,
  },
};

export default experiences;
