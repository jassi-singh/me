import NavButton from "@/components/nav-button";

export default function Navbar() {
  return (
    <nav className="relative mb-8 flex gap-2 font-mono">
      <NavButton href="/">About</NavButton>
      <NavButton href="/writings">Writings</NavButton>
      <NavButton href="/devlogs">Devlogs</NavButton>
    </nav>
  );
}
