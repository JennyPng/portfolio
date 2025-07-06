import Intro from "./components/intro";
import Projects from "./components/projects";
import Experience from "./components/experience";
import AnimatedBlobsBackground from "./components/animated-blobs";

export default function Home() {

  return (  
    <div className="items-center justify-center min-h-screen p-4 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <AnimatedBlobsBackground />
      <Intro className="inline-block ml-4 md:ml-[30vw]" />
      <Projects className="mt-[15vh] ml-4"/>
      <Experience className="mt-[15vh] ml-4"/>
    </div>
  );
}
