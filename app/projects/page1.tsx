import { projectsData } from "@/lib/data";
import { notFound } from "next/navigation";

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectsData[Number(params.id)];
  if (!project) return notFound();

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
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
          className="rounded w-full max-h-96 object-cover"
        />
      )}
    </main>
  );
}