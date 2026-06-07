import docker from "../tech/docker.png";
import fastapi from "../tech/fastapi.png";
import jwt from "../tech/jwt.png";
import postgresql from "../tech/postgresql.png";
import python from "../tech/python.png";
import tensorflow from "../tech/tensorflow.png";
import work1 from "../projects/work-1.png";
import work2 from "../projects/work-2.png";
import work3 from "../projects/work-3.png";
import work4 from "../projects/work-4.png";
import work5 from "../projects/work-5.png";
import work6 from "../projects/work-6.png";
import work7 from "../projects/work-7.png";

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
  work6,
  work7,
};

export const projectData = [
  {
    title: "Food Ordering App Design",
    description:
      "Designed a high-fidelity Burger Ordering Mobile App in Figma featuring user authentication, menu browsing, food customization, cart management, and checkout workflows. Utilized reusable components, Auto Layout, and modern UI/UX principles to create a scalable and responsive design system that enhances user engagement and ordering efficiency.",
    project_Image: work2,
    technologies: [
      "Figma",
    ],
    link: "https://www.figma.com/design/igXcEvy3rosTDgnFJPU7gm/burgerui-app?node-id=0-1&t=rDX1hrcO8UpuGzEc-1",
  },
  {
    title: "SmartLuga: Virtual Try-On",
    description:
      "Developed a diffusion-based virtual try-on system using SDXL and IP-Adapter to generate realistic digital clothing overlays. Preserved garment textures and spatial consistency through fine-tuned models and integrated a Gradio interface for real-time demonstrations.",
    project_Image: work3,
    technologies: [
      "PyTorch",
      "Stable Diffusion",
      "Hugging Face",
      "Diffusers",
      "Transformers",
      "Gradio",
    ],
    link: "https://huggingface.co/spaces/Keshabwi66/SmartLuga1.0",
    githubLink:
      "https://huggingface.co/spaces/Keshabwi66/SmartLuga1.0/tree/main",
  },
  {
    title: "Driver Drowsiness Detection",
    description:
      "Engineered a real-time computer vision pipeline to classify driver fatigue monitoring eye-closure patterns via a CNN model. Optimized for low-latency execution, achieving 30+ FPS and integrated into a Streamlit dashboard for real-time alerting.",
    project_Image: work4,
    technologies: ["TensorFlow", "OpenCV", "Python", "Docker", "Streamlit"],
    link: "https://driverdrowsiness.streamlit.app",
    githubLink:
      "https://github.com/KESHABWI/Driver-Drowsiness-Detection-System-",
  },
  {
    title: "Multi-Tenant SaaS API (RBAC)",
    description:
      "Designed a secure multi-tenant RESTful API featuring strict schema-based data isolation and hierarchical Role-Based Access Control (RBAC). Implemented custom DRF permission classes and JWT-based authentication to enforce branch-level access control.",
    project_Image: work6,
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "JWT",
      "PostgreSQL",
      "Docker",
    ],
    link: "https://github.com/KESHABWI/multi-tenant-role-based-api",
    githubLink: "https://github.com/KESHABWI/multi-tenant-role-based-api",
  },
  {
    title: "SnapLink: URL Management Platform",
    description:
      "Engineered a premium URL shortener with custom aliases, expiration logic, real-time click analytics, and dynamic QR code generation. Containerized the stack using Docker to ensure consistent environments and simplified deployment.",
    project_Image: work7,
    technologies: [
      "Python",
      "Django",
      "Redis",
      "Docker",
      "Bootstrap 5",
      "PostgreSQL",
    ],
    link: "https://github.com/KESHABWI/url-shortener-django",
    githubLink: "https://github.com/KESHABWI/url-shortener-django",
  },
  {
    title: "Pizza Delivery API",
    description:
      "Built a high-performance order management API featuring real-time order tracking, JWT security, and Dockerized infrastructure. Integrated PostgreSQL for persistent storage and implemented comprehensive CRUD operations for order management.",
    project_Image: work1,
    technologies: ["FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "Docker"],
    link: "https://pizzadeliveryapi-production.up.railway.app/docs",
    githubLink: "https://github.com/KESHABWI/Pizza_delivery_API",
  },
];
