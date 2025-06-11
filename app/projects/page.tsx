"use client";

import { useState } from "react";
import { projectsData } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const PROJECTS_PER_PAGE = 6;

const FILTERS = [
  { label: "All Projects", value: "all" },
  { label: "University Projects", value: "university" },
  { label: "Deep Learning Projects", value: "deep" },
  { label: "NLP Projects", value: "nlp" },
  { label: "Prediction Models Projects", value: "prediction" },
];

function getProjectCategory(title: string) {
  if (title.toLowerCase().includes("university")) return "university";
  if (title.toLowerCase().includes("deep learning")) return "deep";
  if (title.toLowerCase().includes("nlp")) return "nlp";
  if (title.toLowerCase().includes("prediction")) return "prediction";
  return "other";
}

export default function ProjectsPage({ searchParams }: { searchParams?: { page?: string } }) {
  const [filter, setFilter] = useState("all");
  const page = Number(searchParams?.page) || 1;

  // Filter projects
  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => getProjectCategory(p.title) === filter);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIdx = (page - 1) * PROJECTS_PER_PAGE;
  const endIdx = startIdx + PROJECTS_PER_PAGE;
  const projectsToShow = filteredProjects.slice(startIdx, endIdx);

  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-4 py-2 rounded-full border transition ${
              filter === f.value
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-700"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsToShow.map((project, idx) => (
          <ProjectCard
            key={startIdx + idx}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-8">
        {Array.from({ length: totalPages }).map((_, i) => (
          <Link
            key={i}
            href={`/projects?page=${i + 1}`}
            className={`px-3 py-1 rounded ${page === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"}`}
          >
            {i + 1}
          </Link>
        ))}
      </div>
    </main>
  );
}