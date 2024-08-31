import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mt-8 flex gap-8">
      <Link href="/about">About</Link>
      <Link href="/writings">Writings</Link>
      <Link href="/devlog">Devlog</Link>
    </nav>
  );
}
