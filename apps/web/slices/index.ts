import dynamic from "next/dynamic";
import Hero from "./Hero";

const Slices = {
  Hero,
  RecentProjects: dynamic(() => import("./RecentProjects")),
};

export { Slices };
