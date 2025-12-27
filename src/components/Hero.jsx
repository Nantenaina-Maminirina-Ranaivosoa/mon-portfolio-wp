import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span style={{ color: 'var(--accent)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>
          Développeur WordPress Full Remote
        </span>
        <h1 style={{ fontSize: '4rem', margin: '1rem 0' }}>
          Je transforme vos designs en <br />
          <span style={{ color: 'var(--accent)' }}>Sites Performants</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Expert en intégration Elementor, optimisation SEO et développement PHP. 
          Prêt à rejoindre votre équipe pour vos projets immobiliers et marketing.
        </p>
        <a href="#contact" className="btn">
          Me contacter sur WhatsApp
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;