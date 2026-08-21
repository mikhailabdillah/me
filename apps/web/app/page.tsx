import { Slices } from "@/slices";

export default function Home() {
  return (
    <div>
      <main>
        <Slices.Hero />
        <Slices.RecentProjects />
      </main>
    </div>
  );
}
