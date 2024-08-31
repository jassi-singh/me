import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="my-8 flex gap-8 font-mono">
      <Link href="/about">About</Link>
      <Link href="/writings">Writings</Link>
      <Link href="/devlogs">Devlogs</Link>
    </nav>
  );
}
