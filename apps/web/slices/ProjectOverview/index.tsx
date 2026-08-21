import { IconBrandGithub, IconExternalLinkFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import projects from "@/content/projects.json";

const ProjectOverview = () => {
  return (
    <section>
      <h2 className="mb-6 text-center">Project's overview</h2>
      <div className="-mx-4 flex flex-row flex-wrap">
        {projects.map((project) => (
          <div
            className="w-full basis-full p-4 sm:basis-1/2 lg:basis-1/3"
            key={project.id}
          >
            <div className="w-full border border-gray-200 p-6 text-black">
              <div className="relative mb-6">
                <Image
                  alt={project.title}
                  className="aspect-5/3 size-full object-cover"
                  height={300}
                  src={project.image}
                  width={500}
                />
              </div>
              <div className="mb-2 font-bold text-black text-xl capitalize">
                {project.title}
              </div>
              <div className="text-gray-400">{project.description}</div>
              <div className="mt-4 flex flex-row gap-4">
                {project.github ? (
                  <Link
                    className="flex flex-row gap-2 text-black/70 hover:text-black"
                    href={project.github}
                    target="_blank"
                  >
                    <IconBrandGithub />
                    <span>Repository</span>
                  </Link>
                ) : null}
                <Link
                  className="flex flex-row gap-2 text-black/70 hover:text-black"
                  href={project.live}
                  target="_blank"
                >
                  <IconExternalLinkFilled />
                  <span>Live Preview</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectOverview;
