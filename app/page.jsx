"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.15 }}
    >
      <a className="brand" href="#start">KARIVO</a>
      <div className="navLinks">
        <a href="#wirkung">Wirkung</a>
        <a href="#pakete">Pakete</a>
        <a href="#prozess">Prozess</a>
        <a href="#kontakt">Kontakt</a>
      </div>
      <a className="navButton" href="#kontakt">Projekt starten</a>
    </motion.nav>
  );
}

function PremiumOrb() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 18 });
  const { scrollYProgress } = useScroll();

  const orbY = useTransform(scrollYProgress, [0, 0.35], [0, -110]);
  const orbScale = useTransform(scrollYProgress, [0, 0.35], [1, 0.78]);
  const orbRotate = useTransform(scrollYProgress, [0, 0.5], [0, 28]);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);

  function onMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <motion.div className="orbStage" onMouseMove={onMove} style={{ y: orbY, scale: orbScale, rotate: orbRotate }}>
      <motion.div className="orbWrap" style={{ rotateX, rotateY }}>
        <div className="orbit orbitA" />
        <div className="orbit orbitB" />
        <div className="orbit orbitC" />
        <div className="glassOrb">
          <div className="orbReflection" />
          <div className="orbReflection small" />
          <div className="orbCore" />
        </div>
        <motion.div className="satellite satA" animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
        <motion.div className="satellite satB" animate={{ rotate: -360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} />
      </motion.div>
    </motion.div>
  );
}

function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  return (
    <section className="hero" id="start">
      <div className="ambient ambientOne" />
      <div className="ambient ambientTwo" />
      <div className="fineGrid" />
      <Navbar />

      <div className="heroContent">
        <motion.div
          className="heroCopy"
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          animate={ready ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <span className="miniLabel">Premium Webdesign aus Deutschland</span>
          <h1>
            Websites, die<br />
            im Kopf bleiben.
          </h1>
          <p>
            KARIVO entwickelt moderne Websites, die Vertrauen schaffen, professionell wirken und Besucher schneller zu Kunden machen.
          </p>
          <div className="heroActions">
            <a className="mainCta" href="#kontakt">Kostenlose Ersteinschätzung</a>
            <a className="ghostCta" href="#wirkung">Wirkung ansehen</a>
          </div>
        </motion.div>

        <motion.div
          className="heroMeta"
          initial={{ opacity: 0, y: 26 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <div><strong>01</strong><span>Strategie</span></div>
          <div><strong>02</strong><span>Design</span></div>
          <div><strong>03</strong><span>Launch</span></div>
        </motion.div>
      </div>

      <PremiumOrb />

      <motion.div className="scrollHint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
        <span /> Scrollen
      </motion.div>
    </section>
  );
}

function Impact() {
  const items = [
    ["Erster Eindruck", "Deine Website soll sofort hochwertig, seriös und klar wirken – nicht wie ein Baukasten."],
    ["Klare Struktur", "Besucher verstehen schnell, was du anbietest und wie sie dich kontaktieren können."],
    ["Mobile zuerst", "Die Seite wird für Smartphone, Tablet und Desktop sauber aufgebaut."],
    ["Mehr Anfragen", "Kontaktwege, Buttons und Inhalte werden so platziert, dass daraus echte Anfragen entstehen."],
  ];

  return (
    <section className="impact" id="wirkung">
      <motion.div className="sectionIntro" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="miniLabel">Wirkung</span>
        <h2>Nicht einfach online. Sondern überzeugend.</h2>
      </motion.div>
      <div className="impactGrid">
        {items.map(([title, text], index) => (
          <motion.article className="impactCard" key={title} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Packages() {
  const packs = [
    ["Starter", "ab 349 €", "Für einen sauberen, schnellen Auftritt mit den wichtigsten Inhalten."],
    ["Premium", "ab 599 €", "Für Unternehmen, die stärker wirken und mehr Vertrauen aufbauen wollen."],
    ["Business", "ab 899 €", "Für einen individuellen Premium-Auftritt mit mehr Tiefe und stärkerem Design."],
  ];
  return (
    <section className="packages" id="pakete">
      <div className="sectionIntro wide">
        <span className="miniLabel">Pakete</span>
        <h2>Klare Preise. Hochwertiger Auftritt.</h2>
      </div>
      <div className="packageGrid">
        {packs.map(([name, price, text], index) => (
          <motion.article className={index === 1 ? "packageCard active" : "packageCard"} key={name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {index === 1 && <div className="badge">Empfohlen</div>}
            <h3>{name}</h3>
            <strong>{price}</strong>
            <p>{text}</p>
            <a href="#kontakt">Anfragen</a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="process" id="prozess">
      <div className="processLine" />
      <div className="sectionIntro">
        <span className="miniLabel">Prozess</span>
        <h2>Von Idee zu Website. Ohne Technikstress.</h2>
      </div>
      <div className="steps">
        {[
          ["01", "Anfrage", "Du beschreibst kurz, was du brauchst."],
          ["02", "Konzept", "Wir legen Stil, Aufbau und Inhalte fest."],
          ["03", "Umsetzung", "Design, Texte, Animationen und Technik entstehen."],
          ["04", "Launch", "Die Seite geht online und kann weiter betreut werden."],
        ].map(([num, title, text]) => (
          <div className="step" key={title}><b>{num}</b><h3>{title}</h3><p>{text}</p></div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="kontakt">
      <div>
        <span className="miniLabel">Kontakt</span>
        <h2>Bereit für einen besseren Auftritt?</h2>
        <p>Schick eine kurze Anfrage. Danach bekommst du eine klare Empfehlung, welches Paket für dich Sinn ergibt.</p>
      </div>
      <form className="contactForm" action="https://formspree.io/f/mkolbovw" method="POST">
        <input name="name" placeholder="Name / Unternehmen" required />
        <input name="email" type="email" placeholder="E-Mail" required />
        <input name="telefon" placeholder="Telefon / WhatsApp" />
        <select name="paket"><option>Premium · 599 €</option><option>Starter · 349 €</option><option>Business · 899 €</option><option>Noch unsicher</option></select>
        <textarea name="nachricht" placeholder="Worum soll es gehen?" required />
        <button type="submit">Anfrage senden</button>
      </form>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Impact />
      <Packages />
      <Process />
      <Contact />
      <footer><strong>KARIVO</strong><span>Websites, die im Kopf bleiben.</span></footer>
    </>
  );
}
