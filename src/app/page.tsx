import BackgroundGrid from "@/components/canvas/BackgroundGrid";
import Hero from "@/components/sections/Hero";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import GitHubEngine from "@/components/sections/GitHubEngine";

export default function Home() {
  return (
    <main className="relative bg-transparent selection:bg-primary/30 min-h-screen">
      <BackgroundGrid />
      <Hero />
      <ProjectShowcase />
      <GitHubEngine />
    </main>
  );
}
