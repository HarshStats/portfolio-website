import { projectsData } from "@/lib/data";
import Link from "next/link";

const PROJECTS_PER_PAGE = 20;

export default function ProjectsPage({ searchParams }: { searchParams?: { page?: string } }) {
  const page = Number(searchParams?.page) || 1;
  const totalPages = Math.ceil(projectsData.length / PROJECTS_PER_PAGE);
  const startIdx = (page - 1) * PROJECTS_PER_PAGE;
  const endIdx = startIdx + PROJECTS_PER_PAGE;
  const projectsToShow = projectsData.slice(startIdx, endIdx);

  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid gap-8">
        {projectsToShow.map((project, idx) => (
          <Link
            key={startIdx + idx}
            href={`/projects/${startIdx + idx}`}
            className="block border rounded-lg p-6 shadow bg-white dark:bg-gray-900 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-2 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.imageUrl && (
              <img
                src={typeof project.imageUrl === "string" ? project.imageUrl : project.imageUrl.src}
                alt={project.title}
                className="mt-2 rounded w-full max-h-48 object-cover"
              />
            )}
          </Link>
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