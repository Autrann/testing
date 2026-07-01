import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Atom,
  BarChart3,
  Blocks,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  FileSpreadsheet,
  GitBranch,
  GraduationCap,
  Mail,
  MapPin,
  MonitorPlay,
  Sparkles,
  Table2,
  TerminalSquare,
} from 'lucide-react';
import './styles.css';
import { DataCore } from './visuals/DataCore.jsx';

const profile = {
  name: 'Luis Autran',
  role: 'Programador & Analista de Datos',
  location: 'Mexico',
  intro:
    'Hola! Pendiente de completar',
  email: 'luis.autran@hotmail.com',
  tools: [
    'React',
    'Laravel',
    'Python',
    'SQL',
    'Power BI',
    'Excel',
    'Pandas',
    'JavaScript',
    'Git',
  ],
  experience: [
    {
      role: 'Data Operations Supervisor',
      company: 'Flecha Amarilla',
      period: '2026 - Actualidad',
      detail:
        '• Análisis de discrepancias entre registros digitales y resultados operativos utilizando Excel y consultas en SQL para detectar anomalías, errores de captura y posibles riesgos financieros. • Automatización de procesos y análisis de datos mediante SQL y Python para la extracción eficiente de información. • Supervisión y mejora continua del flujo de datos y reportes generados por el equipo de analistas. • Diseño y generación de reportes y dashboards en PowerBi para monitoreo operativo y análisis de métricas',
    },
    {
      role: 'Programador Fullstack Jr.',
      company: 'Universidad Autónoma de San Luis Potosí',
      period: '2024 - 2025',
      detail:
        'Gestión y mantenimiento de sistemas web en Laravel y React, entorno de producción mediante Ubuntu Server y manejo de pruebas de APIREST, requests, tokens, debugging y frontend • Responsable del análisis del flujo y comportamiento de usuarios, utilizando Python y Excel para generar reportes • Coordinación con equipos multidisciplinarios bajo metodologías ágiles, dando seguimiento a tareas y control de versiones mediante ClickUp y GitLab. • Elaboración de prototipos y vistas funcionales en Figma',
    },
    {
      role: 'Analista de Aplicaciones y Servidores',
      company: 'Abastecedora Industrial Viesa',
      period: '2023 - 2024',
      detail:
        'Responsable de la implementación y administración de infraestructura Linux de servidores para la gestión de inventarios, clientes y proveedores. • Integración y gestión de bases de datos MySQL con herramientas internas desarrolladas en .NET. • Supervisión del mantenimiento preventivo y correctivo de equipos de cómputo.',
    },
  ],
  education: [
    {
      title: 'Ingeniería en Computación',
      place: 'Universidad Autónoma de San Luis Potosí',
      period: '2020 - 2025',
      detail: 'Formacion en tecnologia, programacion, bases de datos y analisis.',
    },
    {
      title: 'Becario en el Departamento de Desarrollo e Investigación',
      place: 'Universidad Autónoma de San Luis Potosí',
      period: '2023 - 2024',
      detail: 'Especializacion en desarrollo web y analisis de datos.',
    },
    {
      title: 'Participante ICPC',
      place: 'ICPC - International Collegiate Programming Contest',
      period: '2023 - 2024',
      detail: 'Participacion en competencias de programacion y resolucion de problemas.',
    },
    {
      title: 'Certificados Google Careers',
      place: ': Ciberseguridad yRedes y Seguridad Informática',
      period: '2023 - 2024',
      detail: 'Certificaciones en ciberseguridad y seguridad informática, incluyendo fundamentos de redes, protección de datos y gestión de amenazas.',
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

const hubNodes = [
  {
    id: 'herramientas',
    label: 'Herramientas',
    title: 'Stack tecnico',
    text: 'Python, SQL, React, BI y automatizacion.',
    stat: `${profile.tools.length} skills`,
    position: 'topLeft',
    tone: 'cyan',
    preview: ['Python', 'SQL', 'React'],
  },
  {
    id: 'experiencia',
    label: 'Experiencia',
    title: 'Trabajo real',
    text: 'Dashboards, procesos, interfaces y analisis.',
    stat: `${profile.experience.length} roles`,
    position: 'topRight',
    tone: 'gold',
    preview: profile.experience.map((item) => item.role),
  },
  {
    id: 'educacion',
    label: 'Educacion',
    title: 'Formacion',
    text: 'Carrera, internships, diplomados y practica.',
    stat: `${profile.education.length} rutas`,
    position: 'bottomLeft',
    tone: 'violet',
    preview: profile.education.map((item) => item.title),
  },
  {
    id: 'proyectos',
    label: 'Proyectos',
    title: 'Laboratorio',
    text: 'Proyectos personales para mostrar criterio.',
    stat: `${profile.projects.length} builds`,
    position: 'bottomRight',
    tone: 'coral',
    preview: profile.projects.map((item) => item.name),
  },
];

const toolIcons = {
  React: Atom,
  Laravel: Blocks,
  Python: TerminalSquare,
  SQL: Database,
  'Power BI': BarChart3,
  Excel: FileSpreadsheet,
  Pandas: Table2,
  JavaScript: Code2,
  Git: GitBranch,
};

function App() {
  React.useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Navigation />
      <section className="hero section" id="inicio">
        <div className="heroIntro">
          <p className="eyebrow">
            <Sparkles size={16} />
            Mapa interactivo
          </p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="intro">{profile.intro}</p>
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
        <DataCore nodes={hubNodes} />
        <div className="heroActions heroActionsFloating">
          <a className="primaryButton" href="#proyectos">
            Ver proyectos
            <ArrowUpRight size={18} />
          </a>
          <a className="ghostButton" href={`mailto:${profile.email}`}>
            <Mail size={18} />
            Contacto
          </a>
        </div>
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
      <section className="toolGrid showcaseSection" data-reveal>
        {profile.tools.map((tool, index) => (
          <ToolCard tool={tool} index={index} key={tool} />
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
      <section className="projectGrid showcaseSection" data-reveal>
        {profile.projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
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
    <section className="sectionHeader" id={id} data-reveal>
      <div className="headerIcon">{icon}</div>
      <div>
        <p>{kicker}</p>
        <h2>{title}</h2>
        <span>{copy}</span>
      </div>
    </section>
  );
}

function ToolCard({ tool, index }) {
  const Icon = toolIcons[tool] || Code2;

  return (
    <article className="toolCard spotlightCard" style={{ '--delay': `${index * 70}ms` }}>
      <div className="toolIcon">
        <Icon size={26} />
      </div>
      <span>{tool}</span>
      <small>{getToolLabel(tool)}</small>
    </article>
  );
}

function getToolLabel(tool) {
  const labels = {
    React: 'Interfaces',
    Laravel: 'Backend',
    Python: 'Automatizacion',
    SQL: 'Datos',
    'Power BI': 'Dashboards',
    Excel: 'Analisis',
    Pandas: 'DataFrames',
    JavaScript: 'Web',
    Git: 'Versionado',
  };

  return labels[tool] || 'Herramienta';
}

function Timeline({ items, compact = false }) {
  return (
    <section className={compact ? 'timeline compact showcaseSection' : 'timeline showcaseSection'} data-reveal>
      {items.map((item, index) => (
        <article
          className="timelineItem spotlightCard"
          key={`${item.title || item.role}-${item.period}`}
          style={{ '--delay': `${index * 90}ms` }}
        >
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

function ProjectCard({ project }) {
  const hasImage = Boolean(project.image);
  const hasDemo = Boolean(project.demoUrl);
  const hasCode = Boolean(project.codeUrl);

  return (
    <article className="projectCard spotlightCard">
      <div className="projectPreview">
        {hasImage ? (
          <img src={project.image} alt={`Preview de ${project.name}`} />
        ) : (
          <div className="generatedPreview" aria-hidden="true">
            <span />
            <span />
            <span />
            <i />
          </div>
        )}
      </div>
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
      {(hasDemo || hasCode) && (
        <div className="projectActions">
          {hasDemo && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              <MonitorPlay size={16} />
              Demo
            </a>
          )}
          {hasCode && (
            <a href={project.codeUrl} target="_blank" rel="noreferrer">
              <ExternalLink size={16} />
              Codigo
            </a>
          )}
        </div>
      )}
    </article>
  );
}

createRoot(document.getElementById('root')).render(<App />);
