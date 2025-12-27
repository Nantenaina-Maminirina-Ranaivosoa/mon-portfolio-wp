import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  { id: 1, title: "Luxury Estate", cat: "Immobilier", img: "https://images.unsplash.com/photo-1600596542815-2a4d9f6facb8?auto=format&fit=crop&w=600&q=80", desc: "Listing immobilier avec filtres avancés (ACF + FacetWP)." },
  { id: 2, title: "Marketing Agency", cat: "Vitrine", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80", desc: "Site agence haute performance, score Lighthouse 99/100." },
  { id: 3, title: "Plugin Booking", cat: "Dev Sur Mesure", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80", desc: "Plugin de réservation développé en PHP pur et API REST." },
  { id: 4, title: "Invest Immo", cat: "Immobilier", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80", desc: "Landing page conversion pour investisseurs." },
];

const PortfolioFilter = () => {
  const [filter, setFilter] = useState("Tous");
  const categories = ["Tous", "Immobilier", "Vitrine", "Dev Sur Mesure"];

  const filteredProjects = filter === "Tous" 
    ? projects 
    : projects.filter(p => p.cat === filter);

  return (
    <section id="projects">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Portfolio Sélectionné</h2>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '20px',
                border: 'none',
                background: filter === cat ? 'var(--gradient)' : 'var(--glass)',
                color: filter === cat ? 'white' : 'var(--text-main)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid-cols-3">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-panel"
              style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img src={project.img} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="hover-zoom" />
              </div>
              <div style={{ padding: '1.5rem', flex: 1 }}>
                <span style={{ fontSize: '0.8rem', color: '#3b82f6', fontWeight: 700, textTransform: 'uppercase' }}>{project.cat}</span>
                <h3 style={{ margin: '0.5rem 0' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default PortfolioFilter;