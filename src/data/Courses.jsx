import python from "../assets/python.jpg";
import react from "../assets/react.jpg";
import dsa from "../assets/dsa.png";
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
    company: "Google",
    image: python,
    skills:
      "Data Analysis, Problem Solving, Control Structures, Functions, File Handling",
    rating: "4.7",
    reviews: "120K",
    level: "Beginner",
    certificate: "Professional Certificate",
    duration: "3 - 6 Months",
    description:
      "Learn the basics of Python programming, from syntax to building simple projects.",
    link: "/courses/python-intro",
  },
  {
    id: 2,
    title: "Web Development with React",
    company: "Meta",
    image: react,
    skills:
      "React Components, Hooks, Routing, State Management, Frontend Deployment",
    rating: "4.8",
    reviews: "98K",
    level: "Intermediate",
    certificate: "Professional Certificate",
    duration: "4 - 8 Months",
    description:
      "Build modern, dynamic websites using React and component-driven design.",
    link: "/courses/react-webdev",
  },
  {
    id: 3,
    title: "Data Structures & Algorithms",
    company: "Stanford University",
    image: dsa,
    skills:
      "Arrays, Linked Lists, Trees, Graphs, Sorting Algorithms, Complexity Analysis",
    rating: "4.6",
    reviews: "87K",
    level: "Intermediate",
    certificate: "Professional Certificate",
    duration: "4 - 8 Months",
    description:
      "Master the foundations of problem-solving with essential DSA concepts.",
    link: "/courses/data-structures",
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    company: "California Institute of the Arts",
    image: uiux,
    skills:
      "Design Thinking, Wireframing, Prototyping, User Testing, Interaction Design",
    rating: "4.5",
    reviews: "76K",
    level: "Beginner",
    certificate: "Professional Certificate",
    duration: "3 - 5 Months",
    description:
      "Understand the principles of great design and create user-friendly interfaces.",
    link: "/courses/ui-ux",
  },
  {
    id: 5,
    title: "Machine Learning Basics",
    company: "IBM",
    image: ml,
    skills:
      "Supervised Learning, Regression, Classification, Model Evaluation, Scikit-learn",
    rating: "4.7",
    reviews: "102K",
    level: "Intermediate",
    certificate: "Professional Certificate",
    duration: "4 - 8 Months",
    description:
      "Get started with ML concepts, algorithms, and practical applications.",
    link: "/courses/ml-basics",
  },
  {
    id: 6,
    title: "Full-Stack Development",
    company: "Coursera Project Network",
    image: fullstack,
    skills:
      "Frontend (React), Backend (Node.js, Express), Databases (MongoDB), REST APIs",
    rating: "4.8",
    reviews: "112K",
    level: "Advanced",
    certificate: "Professional Certificate",
    duration: "6 - 9 Months",
    description:
      "Learn both frontend and backend to build complete web applications.",
    link: "/courses/fullstack",
  },
  {
    id: 7,
    title: "Cybersecurity Essentials",
    company: "University of Maryland",
    image: cybersecurity,
    skills:
      "Network Security, Threat Analysis, Cryptography, Risk Management, Ethical Hacking",
    rating: "4.6",
    reviews: "89K",
    level: "Beginner",
    certificate: "Professional Certificate",
    duration: "3 - 6 Months",
    description:
      "Protect systems, networks, and data with fundamental cybersecurity practices.",
    link: "/courses/cybersecurity",
  },
  {
    id: 8,
    title: "Cloud Computing with AWS",
    company: "Amazon Web Services",
    image: aws,
    skills:
      "Cloud Infrastructure, EC2, S3, Lambda, Deployment, Scalability, Serverless Computing",
    rating: "4.7",
    reviews: "95K",
    level: "Intermediate",
    certificate: "Professional Certificate",
    duration: "4 - 7 Months",
    description:
      "Explore AWS services and learn to deploy scalable cloud applications.",
    link: "/courses/aws-cloud",
  },
  {
    id: 9,
    title: "DevOps Fundamentals",
    company: "Linux Foundation",
    image: devops,
    skills:
      "CI/CD Pipelines, Docker, Kubernetes, Automation, Continuous Deployment",
    rating: "4.7",
    reviews: "88K",
    level: "Intermediate",
    certificate: "Professional Certificate",
    duration: "3 - 6 Months",
    description:
      "Understand CI/CD pipelines, automation, and modern DevOps culture.",
    link: "/courses/devops",
  },
  {
    id: 10,
    title: "Artificial Intelligence Concepts",
    company: "IBM",
    image: ai,
    skills:
      "Neural Networks, Deep Learning, NLP, Computer Vision, Generative AI",
    rating: "4.6",
    reviews: "95K",
    level: "Beginner",
    certificate: "Professional Certificate",
    duration: "3 - 6 Months",
    description:
      "Dive into AI fundamentals, covering neural networks and deep learning basics.",
    link: "/courses/ai-concepts",
  },
];

export default courses;
