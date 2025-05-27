import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center p-4">
        <Link href="/">jenny peng</Link>
        <nav className="flex justify-between items-center p-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    </div>
  );
}