function Navbar() {
  const links = ["About", "Skills", "Projects", "Contact"]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-5 backdrop-blur-md bg-bg/60 border-b border-white/5">
      <span className="font-mono text-accent text-sm">
        &lt;My-Portfolio /&gt;
      </span>
      <ul className="hidden md:flex gap-8 font-mono text-sm text-muted">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="hover:text-accent transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar