import { Mountain } from "lucide-react";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-card">
      <a className="flex items-center justify-center" href="#">
        <Mountain className="h-6 w-6" />
        <span className="sr-only">L'Artisan Boulangerie & Café</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#about">
          About
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#menu">
          Menu
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#gallery">
          Gallery
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
}
