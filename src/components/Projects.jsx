import { motion } from 'framer-motion';

const projects = [
  {
    title: "Agence Immo Prestige",
    category: "Immobilier / Elementor",
    desc: "Site vitrine pour agence immobilière avec système de filtrage avancé.",
    color: "#2c3e50"
  },
  {
    title: "Marketing Digital Pro",
    category: "Landing Page / Gutenberg",
    desc: "Page de vente haute conversion optimisée pour le SEO et la vitesse.",
    color: "#2980b9"
  },
  {
    title: "Plugin Custom Calculator",
    category: "Développement PHP",
    desc: "Développement d'un plugin de calcul de prêt immobilier sur mesure.",
    color: "#27ae60"
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Réalisations Récentes</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="card"
            whileHover={{ scale: 1.03 }}
            style={{ padding: 0, overflow: 'hidden', border: '1px solid #eee' }}
          >
            <div style={{ height: '150px', backgroundColor: project.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
              Aperçu du site
            </div>
            <div style={{ padding: '1.5rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 'bold' }}>{project.category}</span>
              <h3 style={{ margin: '0.5rem 0' }}>{project.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>{project.desc}</p>
              <button className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Voir le projet</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;