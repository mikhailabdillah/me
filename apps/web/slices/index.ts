import dynamic from "next/dynamic";
import Hero from "./Hero";

const Slices = {
  Hero,
  ProjectOverview: dynamic(() => import("./ProjectOverview")),
  RecentProjects: dynamic(() => import("./RecentProjects")),
};

export { Slices };
