import dynamic from "next/dynamic";
import Blog from "./Blog";
import Hero from "./Hero";
import ProjectOverview from "./ProjectOverview";

const Slices = {
  Blog,
  Hero,
  ProjectOverview,
  RecentProjects: dynamic(() => import("./RecentProjects")),
};

export { Slices };
