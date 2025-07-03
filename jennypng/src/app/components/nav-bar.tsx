import Link from "next/link";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="flex text-secondary-green duration-175 justify-between items-center p-4 md:mx-24">
          <Link href="/" className="text-sm">jenny peng</Link>
          <nav className="flex flex-wrap justify-between items-center p-4 pb-0 mb-0">
              <Link href="/#projects" className="text-sm px-4 hover:text-tertiary-green">projects</Link>
              <Link href="/about-me" className="text-sm px-4 hover:text-tertiary-green">about</Link>
              <Link href="/blog" className="text-sm px-4 hover:text-tertiary-green">blog</Link>
              <Link href="/art" className="text-sm px-4 hover:text-tertiary-green">art</Link>
              <Link href="https://jennypng.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-sm px-4 hover:text-tertiary-green">🌱</Link>
          </nav>
      </div>
        <hr className="border-1 -mx-3 border-primary-green" />
    </div>
  );
}