import { useState } from 'react'
import './App.css'

const services = [
  {
    number: '01',
    title: 'Strony i aplikacje',
    description:
      'Szybkie, responsywne interfejsy React, które dobrze wyglądają i po prostu działają.',
    tags: ['React', 'UI / UX', 'Vite'],
    icon: 'code',
  },
  {
    number: '02',
    title: 'Automatyzacje IT',
    description:
      'Narzędzia, integracje i procesy, które oszczędzają czas oraz porządkują codzienną pracę.',
    tags: ['API', 'Workflows', 'Cloud'],
    icon: 'network',
  },
  {
    number: '03',
    title: 'Zdjęcia z drona',
    description:
      'Dynamiczne ujęcia z powietrza dla nieruchomości, turystyki, wydarzeń i marek.',
    tags: ['Aerial', 'Photo', 'Video'],
    icon: 'drone',
  },
]

const projects = [
  {
    type: 'WEB APP',
    title: 'Point A',
    description: 'Interaktywny planer podróży z mapami, trasami i galeriami.',
    accent: 'cyan',
    visual: 'map',
    stack: ['React', 'Supabase', 'Leaflet'],
  },
  {
    type: 'AERIAL',
    title: 'Above The Horizon',
    description: 'Filmowe kadry krajobrazów widzianych z zupełnie nowej perspektywy.',
    accent: 'pink',
    visual: 'aerial',
    stack: ['Drone', '4K', 'Color grade'],
  },
  {
    type: 'AUTOMATION',
    title: 'Signal Flow',
    description: 'Lekki panel operacyjny do monitorowania i automatyzacji procesów.',
    accent: 'lime',
    visual: 'terminal',
    stack: ['API', 'Dashboard', 'Cloud'],
  },
]

function Icon({ name }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.6',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (name === 'code') {
    return (
      <svg {...common}>
        <path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" />
      </svg>
    )
  }

  if (name === 'network') {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="6" height="5" rx="1" />
        <rect x="15" y="15" width="6" height="5" rx="1" />
        <path d="M9 6.5h3a4 4 0 0 1 4 4V15M15 17.5h-3a4 4 0 0 1-4-4V9" />
      </svg>
    )
  }

  if (name === 'drone') {
    return (
      <svg {...common}>
        <path d="M8 12h8M10 10h4l1.5 4h-7L10 10Z" />
        <path d="m8.5 11-3-3M15.5 11l3-3M5 6h3M16 6h3M5 18h3M16 18h3M8.5 13l-3 3M15.5 13l3 3" />
      </svg>
    )
  }

  if (name === 'arrow') {
    return (
      <svg {...common}>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </svg>
    )
  }

  if (name === 'menu') {
    return (
      <svg {...common}>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M18 6 6 18M8 6h10v10" />
    </svg>
  )
}

function Logo() {
  return (
    <a className="logo" href="#home" aria-label="ITAdamW - strona główna">
      <span className="logo-mark">
        <span>AW</span>
      </span>
      <span className="logo-copy">
        <strong>ITADAMW</strong>
        <small>digital / aerial</small>
      </span>
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <Logo />
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <a href="#services" onClick={closeMenu}>Usługi</a>
          <a href="#projects" onClick={closeMenu}>Projekty</a>
          <a href="#drone" onClick={closeMenu}>Drony</a>
          <a href="#about" onClick={closeMenu}>O mnie</a>
        </nav>
        <a className="header-cta" href="#contact">
          <span>Rozpocznij projekt</span>
          <Icon name="arrow" />
        </a>
        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Otwórz menu"
          aria-expanded={menuOpen}
        >
          <Icon name="menu" />
        </button>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              Dostępny dla nowych projektów
            </div>
            <p className="hero-kicker">DIGITAL SYSTEMS / AERIAL VISION</p>
            <h1>
              Buduję rzeczy
              <span>dla cyfrowego świata.</span>
            </h1>
            <p className="hero-lead">
              Łączę technologię, design i perspektywę z powietrza. Tworzę strony,
              aplikacje i materiały dronowe, które zostają w pamięci.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Zobacz realizacje
                <Icon name="arrow" />
              </a>
              <a className="button button-ghost" href="#contact">Porozmawiajmy</a>
            </div>
            <div className="hero-meta">
              <div><strong>03+</strong><span>obszary działania</span></div>
              <div><strong>100%</strong><span>indywidualnego podejścia</span></div>
              <div><strong>PL / EN</strong><span>zdalnie i lokalnie</span></div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hud-card hud-top">
              <span>SYS.STATUS</span>
              <strong>ONLINE</strong>
            </div>
            <div className="drone-core">
              <div className="drone-ring" />
              <div className="drone-shape">
                <span className="rotor rotor-one" />
                <span className="rotor rotor-two" />
                <span className="rotor rotor-three" />
                <span className="rotor rotor-four" />
                <span className="drone-body" />
                <span className="drone-lens" />
              </div>
              <div className="scan-line" />
            </div>
            <div className="hud-card hud-bottom">
              <span>ALTITUDE</span>
              <strong>120 M</strong>
            </div>
            <div className="coordinates">52.2297° N / 21.0122° E</div>
          </div>
        </section>

        <section className="ticker" aria-label="Zakres usług">
          <div>
            <span>WEB DEVELOPMENT</span><i>+</i>
            <span>UI DESIGN</span><i>+</i>
            <span>AUTOMATION</span><i>+</i>
            <span>DRONE PHOTO & VIDEO</span><i>+</i>
            <span>DIGITAL SOLUTIONS</span>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading">
            <div>
              <p className="section-index">01 / USŁUGI</p>
              <h2>Technologia spotyka<br /><span>dobry kadr.</span></h2>
            </div>
            <p>
              Od pierwszej koncepcji do gotowego produktu. Skupiam się na
              rozwiązaniach, które są czytelne, użyteczne i mają własny charakter.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="card-topline">
                  <span>{service.number}</span>
                  <div className="service-icon"><Icon name={service.icon} /></div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="tag-list">
                  {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading compact-heading">
            <div>
              <p className="section-index">02 / WYBRANE PROJEKTY</p>
              <h2>Praca, która mówi<br /><span>sama za siebie.</span></h2>
            </div>
            <a className="text-link" href="#contact">Twój projekt może być następny <Icon name="arrow" /></a>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className={`project-card accent-${project.accent}`} key={project.title}>
                <div className={`project-visual visual-${project.visual}`}>
                  <span className="project-number">0{index + 1}</span>
                  {project.visual === 'map' && (
                    <div className="map-ui">
                      <span className="map-route route-a" />
                      <span className="map-route route-b" />
                      <i className="map-pin pin-a" />
                      <i className="map-pin pin-b" />
                      <i className="map-pin pin-c" />
                    </div>
                  )}
                  {project.visual === 'aerial' && (
                    <div className="aerial-ui">
                      <div className="mountain mountain-back" />
                      <div className="mountain mountain-front" />
                      <span className="viewfinder" />
                    </div>
                  )}
                  {project.visual === 'terminal' && (
                    <div className="terminal-ui">
                      <span>&gt; initializing signal_flow</span>
                      <span>&gt; connecting nodes...</span>
                      <span className="success">&gt; system ready_</span>
                    </div>
                  )}
                </div>
                <div className="project-info">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-footer">
                    <div className="tag-list">
                      {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    <button type="button" aria-label={`Zobacz projekt ${project.title}`}>
                      <Icon name="external" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="drone-section" id="drone">
          <div className="drone-backdrop">
            <div className="horizon horizon-one" />
            <div className="horizon horizon-two" />
            <div className="drone-reticle"><span /></div>
          </div>
          <div className="drone-content">
            <p className="section-index">03 / AERIAL VISION</p>
            <h2>Inna perspektywa<br />zmienia <span>wszystko.</span></h2>
            <p>
              Ujęcia z drona dla miejsc, marek i historii, które potrzebują
              przestrzeni. Materiał przygotowany do social mediów, stron i kampanii.
            </p>
            <a className="button button-primary" href="#contact">
              Zaplanuj lot <Icon name="arrow" />
            </a>
          </div>
          <div className="flight-data">
            <div><span>FORMAT</span><strong>4K / RAW</strong></div>
            <div><span>TRYB</span><strong>PHOTO + VIDEO</strong></div>
            <div><span>OBSZAR</span><strong>POLSKA</strong></div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-code">
            <div className="code-bar"><i /><i /><i /><span>about_me.json</span></div>
            <pre>
              <code>
{`{
  "name": "Adam",
  "role": "IT creator",
  "focus": [
    "web development",
    "automation",
    "aerial content"
  ],
  "status": "ready to build"
}`}
              </code>
            </pre>
          </div>
          <div className="about-copy">
            <p className="section-index">04 / O MNIE</p>
            <h2>Ciekawość napędza<br /><span>każdy projekt.</span></h2>
            <p>
              Lubię łączyć logiczne myślenie z wizualnym wyczuciem. W IT szukam
              prostych odpowiedzi na złożone problemy, a z dronem szukam kadrów,
              których nie widać z ziemi.
            </p>
            <div className="about-values">
              <span>01. Konkret</span>
              <span>02. Estetyka</span>
              <span>03. Niezawodność</span>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="section-index">05 / KONTAKT</p>
            <h2>Masz pomysł?<br /><span>Uruchommy go.</span></h2>
          </div>
          <div className="contact-panel">
            <p>
              Opowiedz mi krótko, czego potrzebujesz. Odpowiem z propozycją
              kierunku i kolejnych kroków.
            </p>
            <a className="contact-mail" href="mailto:itwloczyk@pm.me">
              itwloczyk@pm.me
              <Icon name="external" />
            </a>
            <div className="social-links">
              <a href="https://github.com/ITAdamW" target="_blank" rel="noreferrer">GitHub</a>
              <a href="#home">LinkedIn</a>
              <a href="#home">Instagram</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Logo />
        <p>© 2026 ITAdamW. Built with React and curiosity.</p>
        <a href="#home">Powrót na górę ↑</a>
      </footer>
    </div>
  )
}

export default App
