import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
  TerminalSquare,
} from 'lucide-react';
import './styles.css';
import { DataCore } from './visuals/DataCore.jsx';

const profile = {
  name: 'Tu Nombre',
  role: 'Programador & Analista de Datos',
  location: 'Mexico',
  intro:
    'Construyo soluciones digitales con enfoque analitico: convierto datos, procesos e ideas en productos claros, utiles y medibles.',
  email: 'tu.correo@email.com',
  tools: [
    'Python',
    'SQL',
    'React',
    'Power BI',
    'Excel',
    'Pandas',
    'JavaScript',
    'Git',
  ],
  experience: [
    {
      role: 'Analista de Datos',
      company: 'Empresa / Organizacion',
      period: '2024 - Actualidad',
      detail:
        'Automatizacion de reportes, limpieza de datos, dashboards operativos y analisis para toma de decisiones.',
    },
    {
      role: 'Desarrollador Frontend',
      company: 'Proyecto / Freelance',
      period: '2023 - 2024',
      detail:
        'Creacion de interfaces web responsivas, consumo de APIs y visualizacion de informacion para usuarios finales.',
    },
  ],
  education: [
    {
      title: 'Carrera universitaria',
      place: 'Universidad / Instituto',
      period: '2021 - 2025',
      detail: 'Formacion en tecnologia, programacion, bases de datos y analisis.',
    },
    {
      title: 'Diplomado / Bootcamp',
      place: 'Institucion',
      period: '2024',
      detail: 'Especializacion en datos, visualizacion, cloud o desarrollo web.',
    },
    {
      title: 'Internship',
      place: 'Empresa',
      period: '2023',
      detail: 'Practica profesional enfocada en proyectos reales y colaboracion tecnica.',
    },
  ],
  projects: [
    {
      name: 'Dashboard de ventas',
      type: 'Data Analytics',
      description:
        'Panel interactivo para monitorear ventas, tendencias, productos clave y rendimiento por periodo.',
      stack: ['Power BI', 'SQL', 'Excel'],
    },
    {
      name: 'Sistema de inventario',
      type: 'Web App',
      description:
        'Aplicacion para registrar movimientos, alertas de stock y reportes descargables.',
      stack: ['React', 'Node', 'SQLite'],
    },
    {
      name: 'Modelo de limpieza de datos',
      type: 'Automation',
      description:
        'Pipeline en Python para normalizar archivos, detectar errores y generar un resumen ejecutivo.',
      stack: ['Python', 'Pandas', 'Jupyter'],
    },
  ],
};

const stats = [
  ['+12', 'reportes optimizados'],
  ['5', 'herramientas clave'],
  ['3', 'areas: datos, web, procesos'],
];

function App() {
  return (
    <main>
      <Navigation />
      <section className="hero section" id="inicio">
        <div className="heroText">
          <p className="eyebrow">
            <Sparkles size={16} />
            Portafolio interactivo
          </p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="intro">{profile.intro}</p>
          <div className="heroActions">
            <a className="primaryButton" href="#proyectos">
              Ver proyectos
              <ArrowUpRight size={18} />
            </a>
            <a className="ghostButton" href={`mailto:${profile.email}`}>
              <Mail size={18} />
              Contacto
            </a>
          </div>
          <div className="metaLine">
            <span>
              <MapPin size={16} />
              {profile.location}
            </span>
            <span>
              <TerminalSquare size={16} />
              Disponible para proyectos data + web
            </span>
          </div>
        </div>
        <DataCore tools={profile.tools} />
      </section>

      <section className="statsBand">
        {stats.map(([value, label]) => (
          <article key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <SectionHeader
        id="herramientas"
        icon={<Code2 />}
        kicker="Stack principal"
        title="Herramientas con las que trabajo"
        copy="Una mezcla entre desarrollo, analisis y presentacion de informacion."
      />
      <section className="toolGrid">
        {profile.tools.map((tool, index) => (
          <span className="toolPill" key={tool} style={{ '--delay': `${index * 60}ms` }}>
            {tool}
          </span>
        ))}
      </section>

      <SectionHeader
        id="experiencia"
        icon={<BriefcaseBusiness />}
        kicker="Trayectoria"
        title="Experiencia profesional"
        copy="Roles y actividades donde he combinado pensamiento analitico con ejecucion tecnica."
      />
      <Timeline items={profile.experience} />

      <SectionHeader
        id="educacion"
        icon={<GraduationCap />}
        kicker="Formacion"
        title="Educacion, internships y diplomados"
        copy="Bases academicas y aprendizaje practico que sostienen mi perfil profesional."
      />
      <Timeline items={profile.education} compact />

      <SectionHeader
        id="proyectos"
        icon={<BarChart3 />}
        kicker="Laboratorio personal"
        title="Proyectos"
        copy="Ideas propias para demostrar criterio, curiosidad y capacidad de entregar algo usable."
      />
      <section className="projectGrid">
        {profile.projects.map((project) => (
          <article className="projectCard" key={project.name}>
            <div>
              <span className="projectType">{project.type}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <div className="stackList">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="contactBand" id="contacto">
        <div>
          <p className="eyebrow">
            <Database size={16} />
            Listo para conectar
          </p>
          <h2>Transformemos datos e ideas en algo que funcione.</h2>
        </div>
        <a className="primaryButton" href={`mailto:${profile.email}`}>
          Escribeme
          <ArrowUpRight size={18} />
        </a>
      </section>
    </main>
  );
}

function Navigation() {
  return (
    <nav className="nav">
      <a href="#inicio" className="brand">
        <span>TN</span>
        Portfolio
      </a>
      <div className="navLinks">
        <a href="#herramientas">Herramientas</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#educacion">Educacion</a>
        <a href="#proyectos">Proyectos</a>
      </div>
    </nav>
  );
}

function SectionHeader({ id, icon, kicker, title, copy }) {
  return (
    <section className="sectionHeader" id={id}>
      <div className="headerIcon">{icon}</div>
      <div>
        <p>{kicker}</p>
        <h2>{title}</h2>
        <span>{copy}</span>
      </div>
    </section>
  );
}

function Timeline({ items, compact = false }) {
  return (
    <section className={compact ? 'timeline compact' : 'timeline'}>
      {items.map((item) => (
        <article className="timelineItem" key={`${item.title || item.role}-${item.period}`}>
          <time>{item.period}</time>
          <div>
            <h3>{item.role || item.title}</h3>
            <strong>{item.company || item.place}</strong>
            <p>{item.detail}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

createRoot(document.getElementById('root')).render(<App />);
