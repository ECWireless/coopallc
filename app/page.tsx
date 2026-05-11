const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/ecwireless',
  },
  {
    label: 'RaidGuild',
    href: 'https://raidguild.org',
  },
];

export default function Home() {
  return (
    <main className="page-shell" aria-labelledby="site-title">
      <section className="calling-card">
        <div className="mark" aria-hidden="true">
          <span />
          <span />
        </div>

        <h1 id="site-title">Coopa LLC</h1>
        <p className="tagline">
          A collaborative agency for software development.
        </p>

        <nav className="links" aria-label="Coopa links">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="email" href="mailto:Elliott@coopallc.com">
          Elliott@coopallc.com
        </a>
      </section>
    </main>
  );
}
