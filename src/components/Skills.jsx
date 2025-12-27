import { motion } from 'framer-motion';
import { FaWordpress, FaPhp, FaReact, FaElementor } from 'react-icons/fa';

const skillsData = [
  { icon: <FaWordpress size={40} />, title: "WordPress Expert", desc: "Création de thèmes, maintenance, sécurisation." },
  { icon: <FaElementor size={40} />, title: "Elementor Pro", desc: "Intégration pixel-perfect de maquettes complexes." },
  { icon: <FaPhp size={40} />, title: "PHP & Backend", desc: "Développement de plugins sur mesure et debugging." },
  { icon: <FaReact size={40} />, title: "React & JS", desc: "Création d'interfaces dynamiques et headless WP." },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Mes Compétences Techniques</h2>
      <div className="grid">
        {skillsData.map((skill, index) => (
          <motion.div 
            key={index}
            className="card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ color: 'var(--accent)', marginBottom: '1rem' }}>{skill.icon}</div>
            <h3 style={{ marginBottom: '0.5rem' }}>{skill.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;