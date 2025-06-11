import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  imageUrl: string | { src: string };
  githubUrl?: string;
  projectUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  imageUrl,
  githubUrl,
  projectUrl,
}: Project) {
  return (
    <div
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg flex flex-col overflow-hidden border border-transparent
      transition-transform transition-shadow duration-300 ease-out
      hover:scale-105 hover:shadow-2xl hover:border-blue-500"
    >
      <div className="bg-black flex items-center justify-center h-40">
        {imageUrl && (
          <Image
            src={typeof imageUrl === "string" ? imageUrl : imageUrl.src}
            alt={title}
            width={320}
            height={160}
            className="object-cover w-full h-full"
            priority
          />
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h2 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-gray-700 dark:text-gray-200 mb-4 flex-1">
          {description}
        </p>
        <div className="flex gap-3 mt-2">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {/* GitHub SVG */}
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="text-gray-700 dark:text-gray-200"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
              </svg>
              GitHub
            </Link>
          )}
          {projectUrl && (
            <Link
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-blue-900 text-white font-semibold hover:bg-blue-700 transition"
            >
              View Project
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}