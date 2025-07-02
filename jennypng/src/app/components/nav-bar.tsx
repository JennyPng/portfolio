import Link from "next/link";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="flex justify-between items-center p-4 md:mx-24">
          <Link href="/" className="text-sm">jenny peng</Link>
          <nav className="flex flex-wrap justify-between items-center p-4 pb-0 mb-0">
              <Link href="/" className="text-sm px-4">Home</Link>
              <Link href="#projects" className="text-sm px-4">Projects</Link>
              <Link href="/about-me" className="text-sm px-4">About Me</Link>
              <Link href="/contact" className="text-sm px-4">Contact</Link>
              <Link href="/contact" className="text-sm px-4">garden</Link>
          </nav>
      </div>
        <hr className="border-1 -mx-3 border-primary-green" />
    </div>
  );
}