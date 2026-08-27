import ProjectCard from "@/components/card/Project";
import projects from "@/content/projects.json";

const ProjectOverview = () => {
  return (
    <section>
      <h1 className="mb-6 text-center">Project's overview</h1>
      <div className="-mx-4 flex flex-row flex-wrap">
        {projects.map((project) => (
          <div
            className="w-full basis-full p-4 sm:basis-1/2 lg:basis-1/3"
            key={project.id}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectOverview;
