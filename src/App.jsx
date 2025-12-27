import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Barre de progression de lecture */}
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '5px',
          background: 'var(--accent)',
          transformOrigin: '0%',
          zIndex: 1000
        }}
      />

      <main>
        <Hero />
        <Skills />
        <Projects />
        
        <section id="contact" style={{ textAlign: 'center', background: 'var(--text-primary)', color: 'white', marginTop: '4rem' }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 style={{ color: 'white' }}>Prêt à collaborer ?</h2>
            <p style={{ marginBottom: '2rem', opacity: 0.8 }}>
              Je suis disponible immédiatement pour du temps plein en remote.
            </p>
            <a 
              href="https://wa.me/261335765278" 
              target="_blank" 
              rel="noreferrer"
              className="btn" 
              style={{ backgroundColor: '#25D366', fontSize: '1.2rem' }}
            >
              Candidature via WhatsApp
            </a>
          </motion.div>
        </section>
      </main>
      
      <footer style={{ textAlign: 'center', padding: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
        <p>© 2024 - Développé avec React + Vite pour démonstration technique</p>
      </footer>
    </>
  );
}

export default App;