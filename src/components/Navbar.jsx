import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaWhatsapp } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`glass-panel`}
      style={{
        position: 'fixed',
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1200px',
        zIndex: 1000,
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
        borderRadius: '50px' // Pill shape
      }}
    >
      <h1 style={{ fontWeight: 800, fontSize: '1.5rem', margin: 0 }}>
        WP<span style={{ color: '#3b82f6' }}>.Dev</span>
      </h1>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <a href="#projects" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 500 }}>Réalisations</a>
        <a href="#skills" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 500 }}>Skills</a>
        
        <button 
          onClick={toggleTheme} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)', fontSize: '1.2rem' }}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>

        <a href="https://wa.me/261335765278" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.5rem' }}>
          <FaWhatsapp /> Contact
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;