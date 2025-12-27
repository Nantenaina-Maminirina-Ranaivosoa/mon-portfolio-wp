import { motion } from 'framer-motion';

const CodeBlock = () => (
  <div className="glass-panel" style={{ padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.9rem', color: '#a5b4fc', background: 'rgba(0,0,0,0.8)', border: '1px solid #333' }}>
    <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
      <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }}></div>
      <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }}></div>
      <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }}></div>
    </div>
    <p><span style={{ color: '#c678dd' }}>add_action</span>( <span style={{ color: '#98c379' }}>'wp_enqueue_scripts'</span>, <span style={{ color: '#61afef' }}>function</span>() {'{'}</p>
    <p style={{ paddingLeft: '1rem' }}>&nbsp;&nbsp;<span style={{ color: '#e06c75' }}>// Optimisation des assets</span></p>
    <p style={{ paddingLeft: '1rem' }}>&nbsp;&nbsp;wp_enqueue_style( <span style={{ color: '#98c379' }}>'main-style'</span>, get_stylesheet_uri() );</p>
    <p style={{ paddingLeft: '1rem' }}>&nbsp;&nbsp;<span style={{ color: '#e5c07b' }}>return</span> <span style={{ color: '#98c379' }}>'Performance 100%'</span>;</p>
    <p>{'}'});</p>
  </div>
);

const HeroAdvanced = () => {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '8rem' }}>
      <div className="grid-cols-3" style={{ gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'center', width: '100%' }}>
        
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '0.5rem 1rem', borderRadius: '20px', fontWeight: 600, fontSize: '0.9rem' }}>
            🚀 Disponible Immédiatement • Full Remote
          </span>
          <h1 style={{ fontSize: '3.5rem', lineHeight: 1.1, margin: '1.5rem 0' }}>
            Développeur WordPress <br />
            <span className="gradient-text">Technique & Créatif</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '600px' }}>
            Spécialisé dans l'immobilier et le marketing. Je ne fais pas que des sites, je crée des écosystèmes digitaux performants, sécurisés et convertisseurs.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#projects" className="btn-primary">Voir mon Portfolio</a>
            <button className="glass-panel" style={{ padding: '0.8rem 2rem', cursor: 'pointer', color: 'var(--text-main)', background: 'transparent' }}>Télécharger CV</button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          <div style={{ position: 'absolute', top: -30, right: -30, width: 100, height: 100, background: 'var(--secondary)', borderRadius: '50%', filter: 'blur(50px)', opacity: 0.5, zIndex: -1 }}></div>
          <CodeBlock />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroAdvanced;