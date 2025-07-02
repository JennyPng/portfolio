import Image from "next/image";
import Intro from "./components/intro";
import Projects from "./components/projects";

export default function Home() {

  return (
    <div className="items-center justify-center min-h-screen p-4 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Intro className="inline-block ml-4 md:ml-[30vw]" />
      <Projects className="mt-[15vh] ml-4"/>
    </div>
  );
}
