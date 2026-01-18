import docker from "./docker.png";
import fastapi from "./fastapi.png";
import jwt from "./jwt.png";
import postgresql from "./postgresql.png";
import python from "./python.png";
import tensorflow from "./tensorflow.png";
import work1 from "./work-1.png";
import work2 from "./work-2.png";
import work3 from "./work-3.png";
import work4 from "./work-4.png";
import work5 from "./work-5.png";

export const techLogos = {
  Docker: docker,
  FastAPI: fastapi,
  JWT: jwt,
  PostgreSQL: postgresql,
  Python: python,
  TensorFlow: tensorflow,
};

export const projectAssets = {
  work1,
  work2,
  work3,
  work4,
  work5,
};

export const projectData = [
  {
    title: "Revly[Full Stack Hotel Booking Website]",
    description:
      "A modern hotel booking platform built with React and Tailwind CSS featuring user hotel reservations, partner registration system for listing rooms, booking management dashboard, and secure authentication using Clerk. Includes user signup/login, room listing management, booking history tracking, and responsive UI design.",
    project_Image: work5,
    technologies: ["React", "Tailwind CSS", "Clerk Auth", "JavaScript"],
    link: "https://ravly.vercel.app",
    githubLink: "https://github.com/KESHABWI/hotel_booking_website.git",
  },
  {
    title: "Pizza Delivery REST API",
    description:
      "A full-stack FastAPI application featuring JWT-based authentication, complete order management system with CRUD operations, PostgreSQL database integration, and Docker containerization for seamless deployment. Includes user registration/login, order placement, order history tracking, and comprehensive API documentation.",
    project_Image: work1,
    technologies: ["FastAPI", "Docker", "PostgreSQL", "JWT", "Python"],
    link: "https://pizzadeliveryapi-production.up.railway.app/docs",
    githubLink: "https://github.com/KESHABWI/Pizza_delivery_API",
  },
  {
    title: "ChatMeKeKe",
    description:
      "AI RAG chatbot for querying PDFs with intelligent multi-agent routing, vector search, and real-time web integration.",
    project_Image: work2,
    technologies: [
      "Python",
      "FastAPI",
      "Streamlit",
      "LangChain",
      "LangGraph",
      "Pinecone",
      "Groq",
      "Docker",
    ],
    link: "https://chatmekeke.streamlit.app",
    githubLink: "https://github.com/KESHABWI/RAG_PDF_CHATBOT",
  },
  {
    title: "SmartLuga",
    description:
      "Diffusion-based virtual try-on system using SDXL and IP-Adapter for realistic clothing generation.",
    project_Image: work3,
    technologies: [
      "PyTorch",
      "Diffusers",
      "TorchVision",
      "Transformers",
      "Hugging Face",
      "Gradio",
    ],
    link: "https://huggingface.co/spaces/Keshabwi66/SmartLuga1.0",
    githubLink:
      "https://huggingface.co/spaces/Keshabwi66/SmartLuga1.0/tree/main",
  },
  {
    title: "Driver Drowsiness Detection System",
    description:
      "Real-time CNN-based system for detecting driver drowsiness from live video streams.",
    project_Image: work4,
    technologies: ["TensorFlow", "OpenCV", "Python", "Docker", "Streamlit"],
    link: "https://driverdrowsiness.streamlit.app",
    githubLink:
      "https://github.com/KESHABWI/Driver-Drowsiness-Detection-System-",
  },
];
