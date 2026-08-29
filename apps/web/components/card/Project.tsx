import { IconBrandGithub, IconExternalLinkFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

import type Projects from "@/content/projects.json";

const ProjectCard = ({ project }: { project: (typeof Projects)[0] }) => {
  return (
    <div className="w-full border border-gray-200 p-6 text-black">
      <Link
        className="group/item relative mb-6 block"
        href={project.live}
        target="_blank"
      >
        <div className="absolute inset-0 flex size-full items-center bg-black/60 text-center text-white opacity-0 transition-all duration-500 group-hover/item:opacity-100">
          <IconExternalLinkFilled className="mx-auto -mt-4 size-8" />
        </div>
        <Image
          alt={project.title}
          className="aspect-5/3 size-full object-cover"
          height={300}
          src={project.image}
          width={500}
        />
      </Link>
      <div className="mb-2 font-bold text-black text-xl capitalize">
        {project.title}
      </div>
      <div className="text-gray-400">{project.description}</div>
      <div className="my-6 flex flex-wrap gap-2">
        {project.tags?.map((tag) => (
          <div className="text-neutral-500 text-sm" key={tag}>{`#${tag}`}</div>
        ))}
      </div>
      <div className="flex flex-row gap-4">
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
  );
};

export default ProjectCard;
