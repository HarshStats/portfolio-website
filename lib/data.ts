import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcomment from "@/public/corpcomment.gif";
import NN from "@/public/NN.gif";
import NLP from "@/public/NLP.png";
import Prediction from "@/public/Prediction.png";

import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  { name: "Home", hash: "/" },
  { name: "About", hash: "/#about" },
  { name: "Skills", hash: "/#skills" },
  { name: "Projects", hash: "/projects" },
  { name: "Experience", hash: "/#experience" },
  { name: "Contact", hash: "/#contact" },
] as const;

export const experiencesData = [
  {
    title: "Pursuing Master's in Data Science",
    location: "Technical University Dortmund, Dortmund, Germany",
    description:
      "Focused on Machine Learning, Bayesian statistics, Bioinformatics, Advanced Statistics. Learning about MLOps, DataOps, and DevOps.",
    icon: React.createElement(LuGraduationCap),
    date: "Expected to complete in 2026",
  },
  {
    title: "Bachelor of Information Technology",
    location: "Gujarat Technological University, Ahmedabad, India",
    description:
      "Graduated with a CGPA of 1.3. Completed coursework in Data Structures, Algorithms, Database Management Systems, and Web Development. Developed a strong foundation in programming languages such as Python, Java, and SQL.",
    icon: React.createElement(CgWorkAlt),
    date: "2015 - 2019",
  },
  {
    title: "Project Co-Ordinator and Management",
    location: "Uplers, Ahmedabad, India",
    description:
      "Managed multiple projects, improving efficiency by 10% and ensuring on-time delivery. Developed Power BI dashboards to track project performance, budgets, and key metrics. Analyzed datasets using SQL, Python, and Excel, providing insights for decision-making. Automated reporting workflows, optimizing resource allocation and risk assessment.",
    icon: React.createElement(FaReact),
    date: "05/2019 - 11/2019",
  },
  {
    title: "Internship in Internet of Things (IoT)",
    location: "Digimation Technologies Pvt Ltd, Ahmedabad, India",
    description:
      "Designed and developed an intelligent game controller for an IoT-based game using hand gestures. Integrated Arduino UNO and MPU 6050 sensor for precise motion tracking with accelerometer and 3-axis gyroscope. Engineered a 3-pivot control system, enabling seamless gesture-based gameplay. Collaborated with cross-functional teams to optimize IoT architectures and gained hands-on experience with IoT protocols, sensors, and data visualization tools.",
    icon: React.createElement(FaReact),
    date: "06/2018 - 03/2019",
  },
] as const;

export const projectsData = [
  {
    title: "5+ University Projects",
    description: 
      "Check out my University projects, that include various regression, classification, and Bayesian models case studies.",
    tags: ["Python", "R", "SQL", "Machine Learning", "Bayesian Data Analysis"],
    imageUrl: corpcomment,
    githubUrl: "https://github.com/HarshStats",
    projectUrl: "https://github.com/HarshStats", // or your live/demo/project link
  },
  {
    title: "5+ Deep Learning Projects",
    description:
      "A collection of deep learning projects, including image classification, object detection, and generative models.",
    tags: ["TensorFlow", "PyTorch", "Neural Networks", "Computer Vision"],
    imageUrl: NN,
    githubUrl: "https://github.com/HarshStats",
    projectUrl: "https://github.com/HarshStats",
  },
  {
    title: "5+ NLP Projects", 
    description:
      "A collection of NLP projects, including text classification, sentiment analysis, and named entity recognition.",
    tags: ["Text Classification", "Sentiment Analysis", "Transformer Models", "BERT"],
    imageUrl: NLP,
    githubUrl: "https://github.com/HarshStats",
    projectUrl: "https://github.com/HarshStats",
  },
  {
    title: "5+ Prediction Models Projects",
    description:
      "A collection of prediction models projects, including time series forecasting and regression analysis.",
    tags: [
      "Time Series Forecasting",
      "Regression Analysis",,
      "Customer Churn Prediction",
    ],
    imageUrl: Prediction,
    githubUrl: "https://github.com/HarshStats",
    projectUrl: "https://github.com/HarshStats",
  },
] as const;

export const skillsData = [
  // Programming Languages
  "Python",
  "R",
  "SQL",

  // Cloud & DevOps
  "AWS",
  "Microsoft Azure",
  "Docker",
  "CI/CD",
  "GitHub Actions",
  "Git",
  "DagsHub",
  "Apache Airflow",
  "Astronomer",

  // Machine Learning & AI
  "Machine Learning",
  "Deep Learning",
  "Regression & Classification",
  "Neural Networks",
  "CNN",
  "Model Evaluation",
  "Model Optimization",
  "Hyperparameter Tuning",
  "Natural Language Processing (NLP)",
  "Transformer Models",
  "BERT",
  "RoBERTa",
  "Huggingface",
  "Reinforcement Learning",
  "Data Exploration",
  "ETL",

  // Model Deployment & MLOps
  "MLOps",
  "Flask",
  "FastAPI",
  "Streamlit",
  "AWS SageMaker",
  "TensorFlow Serving",
  "DVC",
  "MLflow",
  "Model Monitoring",
  "Model Deployment",
  "Dockerization",
  "Continuous Integration",
  "Continuous Deployment",

  // Data Visualization
  "Tableau",
  "Power BI",
  "Matplotlib",
  "Seaborn",
  "Grafana",

  // Databases & Data Engineering
  "PostgreSQL",
  "Athena",
  "Glue",

  // Tools & Libraries
  "Jupyter Notebook",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "TensorFlow",
  "PyTorch",
  "VGG16",
  "Excel",

  // Other
  "Project Management",
  "Arduino",
  "AutoML",
  "Mathematical Foundations (Linear Algebra, Calculus, Probability)",
  "Experiment Tracking",
  "Data Version Control",
  "Business Intelligence",
  "Generative AI",
] as const;
