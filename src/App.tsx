import { useEffect, useState, type FormEvent } from 'react'
import { profile, skills, projects, education, projectExperience, learning, type Project } from './data'
import { Analytics } from '@vercel/analytics/react'

type Theme = 'dark' | 'light'

const links = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['learning', 'Learning'],
  ['contact', 'Contact'],
]

function initialTheme(): Theme {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* storage unavailable */
  }
  return 'dark'
}

function Avatar() {
  const [ok, setOk] = useState(true)
  return (
    <div className="avatar">
      {ok ? (
        <img src="/profile.jpg" alt={`${profile.name} portrait`} width="320" height="320" onError={() => setOk(false)} />
      ) : (
        <span aria-hidden="true">MM</span>
      )}
    </div>
  )
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 7V5.75A1.75 1.75 0 0 1 10.75 4h2.5A1.75 1.75 0 0 1 15 5.75V7h2.75A2.25 2.25 0 0 1 20 9.25v7.5A2.25 2.25 0 0 1 17.75 19h-11.5A2.25 2.25 0 0 1 4 16.75v-7.5A2.25 2.25 0 0 1 6.25 7H9zm2-1.25V7h2V5.75a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75zM6.25 9.5a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75H6.25z" fill="currentColor" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.25a.75.75 0 0 1 .75.75v8.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0L7.72 11.73a.75.75 0 1 1 1.06-1.06l2.47 2.47V4a.75.75 0 0 1 .75-.75zm-6.75 12.5a.75.75 0 0 1 .75.75V17a1.25 1.25 0 0 0 1.25 1.25h11.5A1.25 1.25 0 0 0 18.25 17v-1.5a.75.75 0 0 1 1.5 0V17a2.75 2.75 0 0 1-2.75 2.75H7.25A2.75 2.75 0 0 1 4.5 17v-1.5a.75.75 0 0 1 .75-.75z" fill="currentColor" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.5 8.25 4.75 12l3.75 3.75a.75.75 0 1 1-1.06 1.06L3.22 12.53a.75.75 0 0 1 0-1.06l4.22-4.22a.75.75 0 1 1 1.06 1.06zm7 7.5 3.75-3.75-3.75-3.75a.75.75 0 0 1 1.06-1.06l4.22 4.22a.75.75 0 0 1 0 1.06l-4.22 4.22a.75.75 0 1 1-1.06-1.06zm-2.9-9.3a.75.75 0 0 1 .97-.4l1.38.52a.75.75 0 0 1-.42 1.44l-1.38-.52a.75.75 0 0 1-.55-1.04z" fill="currentColor" />
    </svg>
  )
}

function MobileIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 2.75A2.75 2.75 0 0 0 6.25 5.5v13A2.75 2.75 0 0 0 9 21.25h6A2.75 2.75 0 0 0 17.75 18.5v-13A2.75 2.75 0 0 0 15 2.75H9zm0 1.5h6c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25H9c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25zm2.5 13.5h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5z" fill="currentColor" />
    </svg>
  )
}

function FlutterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.3 2.5 4.2 11.6l3.1 3.1 6.7-6.7h3.7L13.3 2.5zm-1.4 9.9-2.6 2.6 3.5 3.5h3.7l-3.6-3.6 2.5-2.5h-3.5zm2.7 5.1h-3.9l2.2 2.2h3.7l-2 2h-4.1l-3.1-3.1 2.9-2.9 2.3 2.3z" fill="currentColor" />
    </svg>
  )
}

function ApiIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.25 7.75A2.75 2.75 0 0 1 10 5h4a2.75 2.75 0 0 1 2.75 2.75v.5A2.75 2.75 0 0 1 14 11H10a2.75 2.75 0 0 1-2.75-2.75v-.5zm1.5 0v.5a1.25 1.25 0 0 0 1.25 1.25h4a1.25 1.25 0 0 0 1.25-1.25v-.5A1.25 1.25 0 0 0 14.75 6.5h-4A1.25 1.25 0 0 0 9.5 7.75zm-4.5 6.5A2.75 2.75 0 0 1 7.75 11h8.5A2.75 2.75 0 0 1 19 13.75v.5A2.75 2.75 0 0 1 16.25 17h-8.5A2.75 2.75 0 0 1 5 14.25v-.5zm1.5 0v.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25v-.5a1.25 1.25 0 0 0-1.25-1.25h-8.5A1.25 1.25 0 0 0 6.5 14.25z" fill="currentColor" />
    </svg>
  )
}

function NodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5c.62 0 1.2.16 1.7.46l5.34 3.08A2.75 2.75 0 0 1 20 8.51v7.02a2.75 2.75 0 0 1-1.36 2.37l-5.34 3.08a2.75 2.75 0 0 1-2.6 0l-5.34-3.08A2.75 2.75 0 0 1 4 15.53V8.51a2.75 2.75 0 0 1 1.36-2.37L10.7 2.96A2.75 2.75 0 0 1 12 2.5zm0 1.5a1.25 1.25 0 0 0-.58.15L6.08 7.24a1.25 1.25 0 0 0-.61 1.08v7.02c0 .43.23.83.61 1.08l5.34 3.08c.18.1.39.15.58.15s.4-.05.58-.15l5.34-3.08c.38-.25.61-.65.61-1.08V8.32c0-.43-.23-.83-.61-1.08L12.58 4.15A1.25 1.25 0 0 0 12 4zm-1.5 4.25h3a2.5 2.5 0 0 1 0 5h-3a2.5 2.5 0 0 1 0-5zm1.5 1.5a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2h-1z" fill="currentColor" />
    </svg>
  )
}

function PaletteIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5A9.5 9.5 0 0 0 2.5 12a9.5 9.5 0 0 0 9.5 9.5c1.66 0 2.42-.62 3.15-1.36A2.32 2.32 0 0 1 17.5 18a2.5 2.5 0 1 1 2.5-2.5c0 .34-.06.66-.16.96-.38 1.14-1.13 2.2-2.13 2.8-.68.42-1.66.74-2.71.74A7.5 7.5 0 0 1 4.5 12a7.5 7.5 0 0 1 7.5-7.5c1.25 0 2.37.28 3.4.77A1.5 1.5 0 0 1 16 7.5a1.5 1.5 0 0 1-1.5 1.5 1.5 1.5 0 0 1-1.5-1.5h-1.5a3 3 0 0 0 3 3h.5A3.5 3.5 0 0 0 12 2.5zm-2.25 7a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm4.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm-6.5 4.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm8.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" fill="currentColor" />
    </svg>
  )
}

function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7.75A2.75 2.75 0 0 1 6.75 5h10.5A2.75 2.75 0 0 1 20 7.75v8.5A2.75 2.75 0 0 1 17.25 19H6.75A2.75 2.75 0 0 1 4 16.25v-8.5zm2.1-.25 6.15 4.65a1 1 0 0 0 1.1 0L17.9 7.5H6.1zm-1.1 1.5v7.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-7.5l-5.47 4.14a2.5 2.5 0 0 1-3.06 0L5 8.75z" fill="currentColor" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.25-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z" fill="currentColor" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.9 2h3.4l-7.42 8.48L23 22h-6.7l-5.24-7.65L5.5 22H2.1l7.94-9.07L1 2h6.86l4.74 7.02L18.9 2zm-1.18 18h1.87L7.2 3.9H5.25L17.72 20z" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.5 22v-8h2.8l.42-3.2h-3.22V7.38c0-.93.26-1.56 1.58-1.56H16.8V2.9c-.35-.05-1.58-.16-3-.16-2.97 0-5 1.81-5 5.14V10.8H6v3.2h2.8v8h4.7z" fill="currentColor" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.34-3.35-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.02 1.53 1.02.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.21-.25-4.54-1.1-4.54-4.92 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.43 9.43 0 0 1 12 6.8c.85 0 1.7.11 2.5.33 1.9-1.29 2.74-1.02 2.74-1.02.56 1.37.21 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.66-4.57 4.9.36.31.68.92.68 1.85v2.73c0 .27.18.58.69.48A10 10 0 0 0 12 2z" fill="currentColor" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1zM5.5 9.5h2.88v8.5H5.5zm5.12 0h2.77v1.16h.04c.39-.73 1.34-1.5 2.76-1.5 2.95 0 3.5 1.94 3.5 4.47v6.37h-2.88v-5.95c0-1.42-.03-3.25-1.98-3.25-1.99 0-2.29 1.55-2.29 3.15v6.05H10.62z" fill="currentColor" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.11 4.9A9.8 9.8 0 0 0 12.02 2 9.94 9.94 0 0 0 2.56 15.06L2 22l7.03-1.84A9.94 9.94 0 0 0 12 22a9.86 9.86 0 0 0 7.11-3.1 9.68 9.68 0 0 0 0-13.99zm-7.09 2.25h.04c.2 0 .42.01.6.02.4.02.82.08 1.15.5.27.35.9 1.14.97 1.25.08.11.13.28.02.45-.11.18-.17.29-.34.46-.16.17-.35.39-.48.52-.16.14-.33.3-.15.62.18.32.8 1.32 1.73 2.14a8.57 8.57 0 0 0 2.62 1.74c.33.16.52.13.71-.08.18-.2.8-.92 1.02-1.24.2-.32.44-.26.75-.15.31.11 1.94.91 2.27 1.07.33.16.5.23.58.37.08.14.08.82-.17 1.6-.24.78-1.43 1.48-1.98 1.57-.55.09-1.22.13-3.76-1.18-3.18-1.64-5.2-5.76-5.35-6.02-.15-.26-.16-1.46.58-2.32.5-.58 1.08-1.37 1.48-1.82.2-.23.42-.3.65-.3z" fill="currentColor" />
    </svg>
  )
}

function Strip({ shots, alt, onZoom }: { shots: string[]; alt: string; onZoom: (images: string[], index?: number) => void }) {
  return (
    <div className="strip">
      {shots.map((s, i) => (
        <button key={s} type="button" className="shot" onClick={() => onZoom(shots, i)} aria-label={`Enlarge ${alt} screen ${i + 1}`}>
          <img src={s} alt={`${alt} screen ${i + 1}`} loading="lazy" onError={(event) => {
            event.currentTarget.style.display = 'none'
          }} />
        </button>
      ))}
    </div>
  )
}

function ProjectCard({ p, onZoom }: { p: Project; onZoom: (images: string[], index?: number) => void }) {
  const hasScreens = Boolean(p.screens?.length)

  return (
    <article className="card project reveal">
      {hasScreens ? (
        <div className="project-gallery">
          <Strip shots={p.screens ?? []} alt={p.title} onZoom={onZoom} />
          <button type="button" className="btn secondary" onClick={() => onZoom(p.screens ?? [], 0)} aria-label={`View more screens for ${p.title}`}>
            View more screenshots
          </button>
        </div>
      ) : (
        <div className="placeholder" role="img" aria-label={`No screenshots available for ${p.title}`}>
          <div className="ph" aria-hidden="true">{p.title.charAt(0)}</div>
          <p>No screenshots available yet.</p>
        </div>
      )}
      <div className="body">
        <h3>{p.title}</h3>
        {p.status && <span className="badge">{p.status}</span>}
        <p>{p.summary}</p>
        {p.features.length > 0 ? <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul> : <p className="info">Project details are still being finalized.</p>}
        <div className="tags">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
        <div className="links">
          {p.github && <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>}
          {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live demo</a>}
          {hasScreens && <button type="button" className="link-button" onClick={() => onZoom(p.screens ?? [], 0)}>View screenshots</button>}
        </div>
      </div>
    </article>
  )
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(initialTheme)
  const [menu, setMenu] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [zoom, setZoom] = useState<{ images: string[]; index: number } | null>(null)

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoom(null)
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.1 },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const send = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${encodeURIComponent(message)}`
  }

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="nav">
        <a className="logo" href="#top" aria-label="Mohamed Monge home">
          <span className="logo-mark">MM</span>
          <span className="logo-text">Mohamed Monge</span>
          <span className="logo-tag" aria-label="Developer branding"><CodeIcon /></span>
        </a>

        <nav className={menu ? 'open' : ''} aria-label="Main">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="icon theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle light and dark theme">
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button className="icon burger" onClick={() => setMenu(!menu)} aria-label="Toggle menu" aria-expanded={menu}>☰</button>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero">
          <div className="hero-shell reveal">
            <div className="hero-avatar-wrap">
              <Avatar />
            </div>

            <div className="hero-content">
              <div className="hero-kicker hero-kicker--large">{profile.name}</div>
              <h1 className="hero-title">{profile.title}</h1>
              <p className="hero-subtitle">{profile.subtitle}</p>
              <p className="lead">{profile.intro}</p>

              <div className="hero-tags">
                {[
                  { label: 'Mobile Apps', icon: <MobileIcon /> },
                  { label: 'Backend & APIs', icon: <ApiIcon /> },
                  { label: 'Flutter', icon: <FlutterIcon /> },
                  { label: 'Node.js', icon: <NodeIcon /> },
                  { label: 'UI/UX', icon: <PaletteIcon /> },
                ].map(({ label, icon }) => (
                  <span key={label} className="hero-tag">
                    <span className="hero-tag-icon" aria-hidden="true">{icon}</span>
                    {label}
                  </span>
                ))}
              </div>

              <div className="cta hero-actions">
                <a className="btn primary" href="#projects">
                  <span className="btn-icon"><BriefcaseIcon /></span>
                  View My Work
                </a>
                <a className="btn secondary-cta" href="#contact">
                  <span className="btn-icon"><EnvelopeIcon /></span>
                  Contact Me
                </a>
                <a className="btn secondary-cta" href="/cv/Mohamed_Monge_Mobile_App_Developer.pdf" download="Mohamed_Monge_Mobile_App_Developer.pdf">
                  <span className="btn-icon"><DownloadIcon /></span>
                  Download CV
                </a>
              </div>

              <div className="socials" aria-label="Social links">
                <a className="social-link" href={profile.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a className="social-link" href={profile.x} target="_blank" rel="noopener noreferrer" aria-label="X">
                  <XIcon />
                </a>
                <a className="social-link" href={profile.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a className="social-link" href={profile.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <WhatsAppIcon />
                </a>
                <a className="social-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedInIcon />
                </a>
                <a className="social-link" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="reveal">
          <h2 className="title">About me</h2>
          {profile.about.map((t) => <p key={t} className="text">{t}</p>)}
        </section>

        <section id="skills">
          <h2 className="title reveal">Skills</h2>
          <div className="grid">
            {skills.map((g) => (
              <div className="card reveal" key={g.group}>
                <h3>{g.group}</h3>
                <div className="tags">{g.items.map((i) => <span key={i}>{i}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects">
          <h2 className="title reveal">Featured projects</h2>
          <div className="grid projects">
            {projects.filter((p) => p.visible).map((p) => <ProjectCard key={p.title} p={p} onZoom={(images, index = 0) => setZoom({ images, index })} />)}
          </div>
        </section>

        


<section id="learning">
  <h2 className="title reveal">Experience & learning</h2>

  <div className="learning-layout">
    {/* Education Card */}
    <div className="learning-column">
      {education.map((item) => (
        <div
          className="card reveal learning-card education-card"
          key={item.title}
        >
          <span className="badge">Education</span>
          <h3>{item.title}</h3>
          <p className="timeline-meta">
            <strong>{item.institution}</strong>
          </p>
          <p className="timeline-meta">{item.period}</p>
          <p>{item.text}</p>
        </div>
      ))}
    </div>

    {/* Summary Card */}
    <div className="learning-column">
      <div className="card reveal learning-card summary-card">
        <span className="badge">Summary</span>
        <h3>Developer profile</h3>
        <p>{profile.intro}</p>

        <div className="summary-list">
          {profile.about.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>




        <section id="contact" className="reveal">
          <h2 className="title">Contact</h2>
          <p className="text">Open to mobile developer opportunities and collaborations. Feel free to reach out.</p>
          <div className="cta">
            <a className="btn primary" href={profile.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a className="btn" href={profile.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className="btn" href={profile.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
          {profile.email && (
            <form className="form" onSubmit={send}>
              <label>Name<input required value={name} onChange={(e) => setName(e.target.value)} /></label>
              <label>Message<textarea required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} /></label>
              <button className="btn primary" type="submit">Send via email</button>
            </form>
          )}
        </section>
      </main>

      {zoom && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Screenshot preview" onClick={(event) => {
          if (event.target === event.currentTarget) {
            setZoom(null)
          }
        }}>
          <div className="lightbox-panel">
            <button type="button" className="lightbox-close" aria-label="Close screenshot preview" onClick={() => setZoom(null)}>×</button>
            <div className="lightbox-main">
              <button
                type="button"
                className="nav-button"
                aria-label="Previous screenshot"
                onClick={() => setZoom((current) => current ? { images: current.images, index: (current.index - 1 + current.images.length) % current.images.length } : current)}
                disabled={zoom.images.length <= 1}
              >
                ‹
              </button>

              <img
                src={zoom.images[zoom.index]}
                alt={`Screenshot ${zoom.index + 1} of ${zoom.images.length}`}
                onClick={(event) => event.stopPropagation()}
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
              />

              <button
                type="button"
                className="nav-button"
                aria-label="Next screenshot"
                onClick={() => setZoom((current) => current ? { images: current.images, index: (current.index + 1) % current.images.length } : current)}
                disabled={zoom.images.length <= 1}
              >
                ›
              </button>
            </div>

            <div className="lightbox-thumbs" aria-label="All screenshots">
              {zoom.images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  className={`thumb ${index === zoom.index ? 'active' : ''}`}
                  onClick={() => setZoom((current) => current ? { ...current, index } : current)}
                  aria-label={`View screenshot ${index + 1}`}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

<footer>
  <div className="footer-links">
    <a
      href={profile.instagram}
      target="_blank"
      rel="noopener noreferrer"
    >
      Instagram
    </a>

    <span>|</span>

    <a
      href={profile.linkedin}
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </a>

    <span>|</span>

    <a
      href={profile.facebook}
      target="_blank"
      rel="noopener noreferrer"
    >
      Facebook
    </a>
  </div>

  <p>© {new Date().getFullYear()} {profile.name}</p>
</footer>

      <Analytics />
    </>
  )
}
