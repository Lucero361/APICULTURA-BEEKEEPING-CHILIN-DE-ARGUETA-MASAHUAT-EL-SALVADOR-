const reasons = [
  {
    number: "01",
    title: "Alimentos diversos",
    text: "La polinización ayuda a muchas plantas a producir frutos y semillas que forman parte de nuestra alimentación.",
    icon: "✳",
    className: "sunflower",
  },
  {
    number: "02",
    title: "Naturaleza viva",
    text: "Al visitar flores, las abejas contribuyen a la reproducción de plantas silvestres y al bienestar de otros seres vivos.",
    icon: "⌁",
    className: "leaf",
  },
  {
    number: "03",
    title: "Ecosistemas fuertes",
    text: "La polinización sostiene relaciones esenciales entre plantas, animales y los lugares que compartimos.",
    icon: "❋",
    className: "flower",
  },
];

const actions = [
  {
    number: "01",
    title: "Cultiva flores nativas",
    text: "Elige plantas locales con floraciones en distintas épocas para ofrecer alimento a los polinizadores.",
  },
  {
    number: "02",
    title: "Evita los pesticidas",
    text: "Reduce su uso y busca alternativas seguras. Si son imprescindibles, sigue siempre las indicaciones de la etiqueta.",
  },
  {
    number: "03",
    title: "Cuida sus espacios",
    text: "Conserva áreas naturales y deja rincones tranquilos donde los polinizadores puedan encontrar refugio.",
  },
  {
    number: "04",
    title: "Comparte y apoya",
    text: "Habla de la importancia de las abejas y apoya a quienes trabajan por una apicultura responsable.",
  },
];

function BeeIllustration() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="art-sun" />
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <svg className="hero-bee" viewBox="0 0 290 220" fill="none">
        <path d="M129 84c-5-39 16-59 40-50 20 8 19 31-5 62M157 89c8-38 34-49 52-34 16 14 8 35-22 57" fill="#fffdf5" stroke="#203b2b" strokeWidth="5" />
        <ellipse cx="145" cy="123" rx="69" ry="48" transform="rotate(-18 145 123)" fill="#f4ba36" stroke="#203b2b" strokeWidth="6" />
        <path d="m113 100 23 78m15-88 23 77" stroke="#203b2b" strokeWidth="14" strokeLinecap="round" />
        <circle cx="206" cy="103" r="25" fill="#203b2b" />
        <circle cx="213" cy="97" r="4" fill="#fffdf5" />
        <path d="m224 103 19 7-19 8m-144 20-27 7 21-20" stroke="#203b2b" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m203 77 8-17m-20 15 1-18" stroke="#203b2b" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span className="art-label label-top">pequeñas aliadas</span>
      <span className="art-label label-bottom">un gran impacto</span>
      <span className="art-spark spark-one">✳</span>
      <span className="art-spark spark-two">✳</span>
      <span className="art-spark spark-three">✳</span>
    </div>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Abejas, vida — inicio">
          <span className="brand-mark" aria-hidden="true">✳</span>
          <span>abejas<span className="brand-comma">,</span> vida</span>
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#importancia">Su importancia</a>
          <a href="#amenazas">El desafío</a>
          <a className="nav-cta" href="#acciones">¿Cómo ayudar? <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span /> UN LLAMADO POR LA VIDA</p>
            <h1>Si cuidamos a las abejas, <em>cuidamos nuestro futuro.</em></h1>
            <p className="hero-description">
              Son pequeñas, pero su trabajo conecta flores, alimentos y ecosistemas. Conocerlas es el primer paso para protegerlas.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#importancia">Descubre por qué importan <span aria-hidden="true">↓</span></a>
              <a className="text-link" href="#acciones">Empieza con una acción <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-note">
              <span className="note-icon" aria-hidden="true">✳</span>
              <p>Un mensaje desde El Salvador <span>para el mundo.</span></p>
            </div>
          </div>
          <BeeIllustration />
          <div className="hero-bottom-line">
            <span>POLINIZADORES ESENCIALES</span>
            <span className="line" />
            <span>UN FUTURO QUE FLORECE</span>
          </div>
        </section>

        <section className="importance section-wrap" id="importancia">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span /> EL VALOR DE LAS ABEJAS</p>
              <h2>Su trabajo hace<br />florecer <em>la vida.</em></h2>
            </div>
            <p className="section-intro">
              Al transportar polen de una flor a otra, las abejas ayudan a muchas plantas a reproducirse. Ese trabajo sostiene la biodiversidad y contribuye a la producción de alimentos.
            </p>
          </div>
          <div className="reason-grid">
            {reasons.map((reason) => (
              <article className="reason-card" key={reason.number}>
                <div className={`reason-icon ${reason.className}`} aria-hidden="true">{reason.icon}</div>
                <span className="card-number">{reason.number}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="challenge" id="amenazas">
          <div className="challenge-inner section-wrap">
            <div className="challenge-visual" aria-hidden="true">
              <div className="honeycomb honeycomb-one" />
              <div className="honeycomb honeycomb-two" />
              <span className="challenge-flower">✳</span>
              <span className="challenge-dot dot-one" />
              <span className="challenge-dot dot-two" />
              <span className="challenge-dot dot-three" />
            </div>
            <div className="challenge-copy">
              <p className="eyebrow eyebrow-light"><span /> UNA REALIDAD QUE NOS CONCIERNE</p>
              <h2>Las abejas necesitan <em>espacio para vivir.</em></h2>
              <p>
                La pérdida de hábitats, algunos pesticidas, las enfermedades y el cambio climático pueden poner en riesgo a las abejas y a otros polinizadores. Protegerlos también significa cuidar los lugares donde todos vivimos.
              </p>
              <a className="light-link" href="#acciones">Conoce qué puedes hacer <span aria-hidden="true">↘</span></a>
            </div>
          </div>
        </section>

        <section className="actions section-wrap" id="acciones">
          <div className="actions-heading">
            <p className="eyebrow"><span /> CADA ACCIÓN CUENTA</p>
            <h2>Un futuro mejor<br />empieza <em>cerca de ti.</em></h2>
            <p>Pequeños cambios en casa, en la comunidad y en nuestros hábitos pueden hacer una diferencia.</p>
          </div>
          <div className="action-list">
            {actions.map((action) => (
              <article className="action-item" key={action.number}>
                <span className="action-number">{action.number}</span>
                <div>
                  <h3>{action.title}</h3>
                  <p>{action.text}</p>
                </div>
                <span className="action-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="closing">
          <div className="closing-decoration" aria-hidden="true">✳</div>
          <p className="eyebrow eyebrow-light"><span /> POR LAS ABEJAS, POR LA VIDA</p>
          <h2>Proteger a las abejas<br />es cuidar <em>lo que nos une.</em></h2>
          <p>Comparte este mensaje. La conciencia también puede echar raíces.</p>
          <a className="button button-light" href="https://www.fao.org/pollination/en/" target="_blank" rel="noreferrer">
            Aprende más sobre la polinización <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark" aria-hidden="true">✳</span>
          <span>abejas<span className="brand-comma">,</span> vida</span>
        </a>
        <p>Un mensaje desde El Salvador para el mundo.</p>
        <a className="back-top" href="#inicio">Volver arriba ↑</a>
      </footer>
    </>
  );
}

export default App;
