const links = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Check an image", href: "/#check" },
  { label: "About", href: "/#about" },
];

function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-2xl border border-black/10 bg-white p-2 shadow-sm">
      <a href="/" className="px-4 py-2 text-lg font-bold text-ink">
        RealView
      </a>

      <nav className="hidden items-center gap-1 sm:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-xl px-4 py-2 text-sm text-ink/70 transition hover:bg-paper hover:text-ink"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
