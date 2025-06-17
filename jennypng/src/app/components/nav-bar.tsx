import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center p-4 mx-24">
        <Link href="/" className="text-sm">jenny peng</Link>
        <nav className="flex justify-between items-center p-4">
            <Link href="/" className="text-sm px-4">Home</Link>
            <Link href="/projects" className="text-sm px-4">Projects</Link>
            <Link href="/about-me" className="text-sm px-4">About Me</Link>
            <Link href="/contact" className="text-sm px-4">Contact</Link>
        </nav>
    </div>
  );
}