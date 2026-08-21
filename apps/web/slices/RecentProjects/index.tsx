import ProjectCard from "@/components/card/Project";
import projects from "@/content/projects.json";

const RecentProjects = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h2 className="mb-6">Recent best project&apos;s</h2>
      <div className="-mx-4 flex flex-row flex-wrap">
        {projects.slice(0, 6).map((project) => (
          <div
            className="w-full basis-full p-4 sm:basis-1/2 lg:basis-1/3"
            key={project.id}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
