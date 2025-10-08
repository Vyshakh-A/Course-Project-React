import python from "../assets/python.jpg";
import react from "../assets/react.jpg";
import dsa from "../assets/dsa.png"; // check if it's .jpg or .png
import uiux from "../assets/uiux.png";
import ml from "../assets/ml.png";
import fullstack from "../assets/fullstack.png";
import cybersecurity from "../assets/cybersecurity.png";
import aws from "../assets/aws.png";
import devops from "../assets/devops.png";
import ai from "../assets/ai.png";

const courses = [
  {
    id: 1,
    title: "Introduction to Python",
    image: python,
    description:
      "Learn the basics of Python programming, from syntax to simple projects.",
    link: "/courses/python-intro",
  },
  {
    id: 2,
    title: "Web Development with React",
    image: react,
    description:
      "Build modern, dynamic websites using React and component-driven design.",
    link: "/courses/react-webdev",
  },
  {
    id: 3,
    title: "Data Structures & Algorithms",
    image: dsa,
    description:
      "Master the foundations of problem-solving with essential DSA concepts.",
    link: "/courses/data-structures",
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    image: uiux,
    description:
      "Understand the principles of great design and create user-friendly interfaces.",
    link: "/courses/ui-ux",
  },
  {
    id: 5,
    title: "Machine Learning Basics",
    image: ml,
    description:
      "Get started with ML concepts, algorithms, and practical applications.",
    link: "/courses/ml-basics",
  },
  {
    id: 6,
    title: "Full-Stack Development",
    image: fullstack,
    description:
      "Learn both frontend and backend to build complete web applications.",
    link: "/courses/fullstack",
  },
  {
    id: 7,
    title: "Cybersecurity Essentials",
    image: cybersecurity,
    description:
      "Protect systems, networks, and data with fundamental cybersecurity practices.",
    link: "/courses/cybersecurity",
  },
  {
    id: 8,
    title: "Cloud Computing with AWS",
    image: aws,
    description:
      "Explore AWS services and learn to deploy scalable cloud applications.",
    link: "/courses/aws-cloud",
  },
  {
    id: 9,
    title: "DevOps Fundamentals",
    image: devops,
    description:
      "Understand CI/CD pipelines, automation, and modern DevOps culture.",
    link: "/courses/devops",
  },
  {
    id: 10,
    title: "Artificial Intelligence Concepts",
    image: ai,
    description:
      "Dive into AI fundamentals, covering neural networks and deep learning basics.",
    link: "/courses/ai-concepts",
  },
];

export default courses;
