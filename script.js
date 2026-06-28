const loader=document.getElementById("loader"),cursorGlow=document.getElementById("cursorGlow"),cursorDot=document.getElementById("cursorDot"),header=document.getElementById("premiumHeader"),menuButton=document.getElementById("menuButton"),premiumNav=document.getElementById("premiumNav"),heroParallax=document.getElementById("heroParallax"),scrollProgress=document.getElementById("scrollProgress"),backToTop=document.getElementById("backToTop"),cookieBanner=document.getElementById("cookieBanner"),acceptCookies=document.getElementById("acceptCookies"),cookieSettings=document.getElementById("cookieSettings"),pageTransition=document.getElementById("pageTransition"),particles=document.getElementById("particles");window.addEventListener("load",()=>{setTimeout(()=>loader.classList.add("hide"),750)});for(let i=0;i<42;i++){const e=document.createElement("span");e.className="particle";e.style.left=100*Math.random()+"%";e.style.top=100+100*Math.random()+"%";e.style.animationDuration=8+12*Math.random()+"s";e.style.animationDelay=8*Math.random()+"s";particles.appendChild(e)}window.addEventListener("mousemove",e=>{cursorGlow.style.left=e.clientX+"px";cursorGlow.style.top=e.clientY+"px";cursorDot.style.left=e.clientX+"px";cursorDot.style.top=e.clientY+"px"});window.addEventListener("scroll",()=>{const e=window.scrollY,t=document.documentElement.scrollHeight-window.innerHeight,o=t>0?e/t*100:0;header.classList.toggle("scrolled",e>80);backToTop.classList.toggle("visible",e>600);heroParallax.style.transform=`scale(1.08) translateY(${.08*e}px)`;scrollProgress.style.width=o+"%"});menuButton.addEventListener("click",()=>premiumNav.classList.toggle("open"));document.querySelectorAll(".premium-nav a").forEach(e=>{e.addEventListener("click",()=>premiumNav.classList.remove("open"))});document.querySelectorAll("a[href^='#']").forEach(e=>{e.addEventListener("click",()=>{pageTransition.classList.remove("active");void pageTransition.offsetWidth;pageTransition.classList.add("active")})});backToTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));"accepted"===localStorage.getItem("premiumRestaurantCookies")&&cookieBanner.classList.add("hidden");acceptCookies.addEventListener("click",()=>{localStorage.setItem("premiumRestaurantCookies","accepted");cookieBanner.classList.add("hidden")});cookieSettings.addEventListener("click",e=>{e.preventDefault();localStorage.removeItem("premiumRestaurantCookies");cookieBanner.classList.remove("hidden")});const reveals=document.querySelectorAll(".reveal"),revealObserver=new IntersectionObserver(e=>{e.forEach((e,t)=>{e.isIntersecting&&setTimeout(()=>e.target.classList.add("visible"),80*t)})},{threshold:.15});reveals.forEach(e=>revealObserver.observe(e));function initTiltCards(){document.querySelectorAll(".tilt-card").forEach(e=>{e.addEventListener("mousemove",t=>{const o=e.getBoundingClientRect(),n=t.clientX-o.left,r=t.clientY-o.top,a=(n/o.width-.5)*10,l=(r/o.height-.5)*-10;e.style.transform=`perspective(900px) rotateX(${l}deg) rotateY(${a}deg) translateY(-4px)`});e.addEventListener("mouseleave",()=>e.style.transform="")})}initTiltCards();document.querySelectorAll(".magnetic").forEach(e=>{e.addEventListener("mousemove",t=>{const o=e.getBoundingClientRect(),n=(t.clientX-o.left-o.width/2)*.18,r=(t.clientY-o.top-o.height/2)*.18;e.style.transform=`translate(${n}px, ${r}px) translateY(-4px)`});e.addEventListener("mouseleave",()=>e.style.transform="")});const counters=document.querySelectorAll("[data-count]"),counterObserver=new IntersectionObserver(e=>{e.forEach(e=>{if(!e.isIntersecting)return;const t=e.target,o=parseFloat(t.dataset.count);let n=0;const r=o/70,a=setInterval(()=>{n+=r,n>=o?(t.textContent=o%1==0?o.toLocaleString("de-DE")+(o>90?"%":"+"):o.toFixed(1)+"★",clearInterval(a)):t.textContent=o%1==0?Math.floor(n).toLocaleString("de-DE"):n.toFixed(1)},18);counterObserver.unobserve(t)})},{threshold:.45});counters.forEach(e=>counterObserver.observe(e));const premiumMenuData={starter:[{icon:"🥂",name:"Aperitif Moment",desc:"Feiner Gruß aus der Küche mit saisonalen Akzenten.",price:"9,90 €",tag:"Signature"},{icon:"🦪",name:"Sea Starter",desc:"Frische Meeresnoten, Zitrus und Kräuteröl.",price:"16,90 €",tag:"Fresh"},{icon:"🥗",name:"Golden Salad",desc:"Blattsalate, karamellisierte Nüsse, Dressing und Parmesan.",price:"12,90 €",tag:"Light"}],main:[{icon:"🍝",name:"Trüffel Pasta",desc:"Hausgemachte Pasta mit Trüffelcreme und Parmesan.",price:"24,90 €",tag:"Chef"},{icon:"🥩",name:"Filet Royal",desc:"Rinderfilet, Jus, Gemüse und Kartoffelvariation.",price:"34,90 €",tag:"Premium"},{icon:"🐟",name:"Lachs Signature",desc:"Gebratener Lachs mit Zitronenbutter und Marktgemüse.",price:"27,90 €",tag:"Elegant"}],dessert:[{icon:"🍫",name:"Chocolate Gold",desc:"Warmer Schokoladenkern, Vanille und Beeren.",price:"10,90 €",tag:"Sweet"},{icon:"🍓",name:"Berry Panna Cotta",desc:"Cremig, frisch und mit Minze serviert.",price:"8,90 €",tag:"Classic"},{icon:"🍨",name:"Sorbet Selection",desc:"Leichtes Sorbet mit fruchtigen Noten.",price:"7,90 €",tag:"Fresh"}],drinks:[{icon:"🍷",name:"Wine Pairing",desc:"Ausgewählte Begleitung zu Signature Gerichten.",price:"ab 19 €",tag:"Pairing"},{icon:"🍸",name:"Golden Aperitif",desc:"Spritzig, elegant und perfekt zum Start.",price:"9,90 €",tag:"Bar"},{icon:"☕",name:"Espresso Ritual",desc:"Kräftig, aromatisch und stilvoll serviert.",price:"3,50 €",tag:"Finish"}]},menuGrid=document.getElementById("premiumMenuGrid"),premiumTabs=document.querySelectorAll(".premium-tab");function renderPremiumMenu(e){menuGrid.classList.add("menu-changing");setTimeout(()=>{menuGrid.innerHTML=premiumMenuData[e].map(e=>`<article class="premium-menu-card tilt-card shine-card"><div><div class="food-icon">${e.icon}</div><h3>${e.name}</h3><p>${e.desc}</p></div><div class="food-footer"><span>${e.tag}</span><strong>${e.price}</strong></div></article>`).join("");initTiltCards();menuGrid.classList.remove("menu-changing")},180)}premiumTabs.forEach(e=>{e.addEventListener("click",()=>{premiumTabs.forEach(e=>e.classList.remove("active"));e.classList.add("active");renderPremiumMenu(e.dataset.category)})});renderPremiumMenu("starter");const galleryButtons=document.querySelectorAll(".gallery-filter-btn"),galleryTiles=document.querySelectorAll(".gallery-tile"),lightbox=document.getElementById("lightbox"),lightboxImage=document.getElementById("lightboxImage"),lightboxTitle=document.getElementById("lightboxTitle"),lightboxClose=document.getElementById("lightboxClose");galleryButtons.forEach(e=>{e.addEventListener("click",()=>{galleryButtons.forEach(e=>e.classList.remove("active"));e.classList.add("active");const t=e.dataset.filter;galleryTiles.forEach(e=>{const o="all"===t||e.dataset.category===t;e.classList.toggle("hidden",!o)})})});galleryTiles.forEach(e=>{e.addEventListener("click",()=>{lightboxImage.src=e.dataset.img;lightboxTitle.textContent=e.dataset.title;lightbox.classList.add("active");lightbox.setAttribute("aria-hidden","false");document.body.classList.add("no-scroll")})});function closeLightbox(){lightbox.classList.remove("active");lightbox.setAttribute("aria-hidden","true");document.body.classList.remove("no-scroll")}lightboxClose.addEventListener("click",closeLightbox);lightbox.addEventListener("click",e=>{e.target===lightbox&&closeLightbox()});document.addEventListener("keydown",e=>{"Escape"===e.key&&closeLightbox()});const reviews=[{avatar:"M",name:"Max Mustermann",text:"“Ein außergewöhnlicher Abend. Das Ambiente, der Service und das Essen wirkten auf einem sehr hohen Niveau.”"},{avatar:"S",name:"Sarah Beispiel",text:"“Schon beim Betreten fühlt sich alles hochwertig an. Die Gerichte waren perfekt angerichtet.”"},{avatar:"L",name:"Leon Gast",text:"“Die Website vermittelt genau dieses Gefühl: elegant, vertrauenswürdig und besonders.”"}];let reviewIndex=0;const reviewCard=document.getElementById("reviewCard"),reviewAvatar=document.getElementById("reviewAvatar"),reviewName=document.getElementById("reviewName"),reviewText=document.getElementById("reviewText"),prevReview=document.getElementById("prevReview"),nextReview=document.getElementById("nextReview"),reviewDots=document.getElementById("reviewDots");function renderDots(){reviewDots.innerHTML=reviews.map((e,t)=>`<button class="${t===reviewIndex?"active":""}" data-index="${t}" aria-label="Bewertung ${t+1}"></button>`).join("");reviewDots.querySelectorAll("button").forEach(e=>{e.addEventListener("click",()=>{reviewIndex=Number(e.dataset.index);renderReview()})})}function renderReview(){reviewCard.classList.add("fade");setTimeout(()=>{const e=reviews[reviewIndex];reviewAvatar.textContent=e.avatar;reviewName.textContent=e.name;reviewText.textContent=e.text;reviewCard.classList.remove("fade");renderDots()},220)}function next(){reviewIndex=(reviewIndex+1)%reviews.length;renderReview()}function prev(){reviewIndex=(reviewIndex-1+reviews.length)%reviews.length;renderReview()}nextReview.addEventListener("click",next);prevReview.addEventListener("click",prev);renderDots();setInterval(next,5200);const reservationForm=document.getElementById("reservationForm"),formNote=document.getElementById("formNote");reservationForm.addEventListener("submit",()=>{formNote.textContent="Reservierungsanfrage wird gesendet ...";formNote.classList.add("success")});document.querySelector(".newsletter-form").addEventListener("submit",e=>{e.preventDefault();e.currentTarget.querySelector("button").textContent="Eingetragen ✓"});
const eventForm = document.getElementById("eventForm");
const eventFormNote = document.getElementById("eventFormNote");

if (eventForm) {
  eventForm.addEventListener("submit", () => {
    eventFormNote.textContent = "Event-Anfrage wird gesendet ...";
    eventFormNote.classList.add("success");
  });
}

// Business V4: Online-Speisekarte mit Suche und Quick-Filtern
const menuSearch = document.getElementById("menuSearch");
const quickFilters = document.querySelectorAll(".quick-filter");

function renderBusinessMenu() {
  if (!menuGrid) return;

  menuGrid.classList.add("menu-changing");

  setTimeout(() => {
    const search = currentSearchTerm.toLowerCase().trim();
    const items = (premiumMenuData[currentMenuCategory] || []).filter(item => {
      const matchesSearch =
        !search ||
        item.name.toLowerCase().includes(search) ||
        item.desc.toLowerCase().includes(search) ||
        item.tag.toLowerCase().includes(search);

      const matchesFilter =
        currentQuickFilter === "all" ||
        (item.labels || []).includes(currentQuickFilter);

      return matchesSearch && matchesFilter;
    });

    if (!items.length) {
      menuGrid.innerHTML = `
        <article class="premium-menu-card shine-card">
          <div>
            <div class="food-icon">🔎</div>
            <h3>Kein Gericht gefunden</h3>
            <p>Ändere die Suche oder wähle einen anderen Filter.</p>
          </div>
          <div class="food-footer">
            <span>Business Menü</span>
            <strong>—</strong>
          </div>
        </article>
      `;
    } else {
      menuGrid.innerHTML = items.map(item => `
        <article class="premium-menu-card tilt-card shine-card" data-labels="${(item.labels || []).join(" ")}">
          <div>
            <div class="food-icon">${item.icon}</div>
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <div class="menu-badge-row">
              ${(item.labels || []).map(label => `<span>${label}</span>`).join("")}
            </div>
          </div>
          <div class="food-footer">
            <span>${item.tag}</span>
            <strong>${item.price}</strong>
          </div>
        </article>
      `).join("");
    }

    initTiltCards();
    menuGrid.classList.remove("menu-changing");
  }, 160);
}

premiumTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    currentMenuCategory = tab.dataset.category;
    renderBusinessMenu();
  });
});

if (menuSearch) {
  menuSearch.addEventListener("input", () => {
    currentSearchTerm = menuSearch.value;
    renderBusinessMenu();
  });
}

quickFilters.forEach(button => {
  button.addEventListener("click", () => {
    quickFilters.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    currentQuickFilter = button.dataset.filter;
    renderBusinessMenu();
  });
});

setTimeout(renderBusinessMenu, 300);

// Business V5: Reservierungssystem
const guestMinus = document.getElementById("guestMinus");
const guestPlus = document.getElementById("guestPlus");
const guestCount = document.getElementById("guestCount");
const guestNote = document.getElementById("guestNote");
const reservationTime = document.getElementById("reservationTime");
const reservationOccasion = document.getElementById("reservationOccasion");
const reservationSummary = document.getElementById("reservationSummary");
const reservationPresets = document.querySelectorAll(".reservation-preset");

function updateReservationSummary() {
  if (!guestCount || !reservationSummary) return;

  const persons = Number(guestCount.value || 1);
  const time = reservationTime && reservationTime.value ? reservationTime.value : "Uhrzeit noch wählen";
  const occasion = reservationOccasion && reservationOccasion.value ? reservationOccasion.value : "Anlass noch wählen";

  if (persons >= 10) {
    guestNote.textContent = "Große Gruppe erkannt – ideal für Business/Event-Anfrage";
  } else if (persons >= 6) {
    guestNote.textContent = "Gruppe erkannt – Restaurant kann besser planen";
  } else {
    guestNote.textContent = "Normale Tischreservierung";
  }

  reservationSummary.querySelector("span").textContent = `${persons} Personen · ${time} · ${occasion}`;
}

if (guestMinus && guestPlus && guestCount) {
  guestMinus.addEventListener("click", () => {
    guestCount.value = Math.max(1, Number(guestCount.value) - 1);
    updateReservationSummary();
  });

  guestPlus.addEventListener("click", () => {
    guestCount.value = Math.min(100, Number(guestCount.value) + 1);
    updateReservationSummary();
  });

  guestCount.addEventListener("input", updateReservationSummary);
}

if (reservationTime) reservationTime.addEventListener("change", updateReservationSummary);
if (reservationOccasion) reservationOccasion.addEventListener("change", updateReservationSummary);

reservationPresets.forEach(button => {
  button.addEventListener("click", () => {
    reservationPresets.forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    if (guestCount) guestCount.value = button.dataset.persons;
    if (reservationTime) reservationTime.value = button.dataset.time;
    if (reservationOccasion) reservationOccasion.value = button.dataset.occasion;

    updateReservationSummary();
  });
});

setTimeout(updateReservationSummary, 300);

// Business V7: Karriereformular
const applicationForm = document.getElementById("applicationForm");
const applicationNote = document.getElementById("applicationNote");

if (applicationForm) {
  applicationForm.addEventListener("submit", () => {
    applicationNote.textContent = "Bewerbung wird gesendet ...";
    applicationNote.classList.add("success");
  });
}

// Business V8: einfacher DE/EN Sprachwechsel
const translations = {
  de: {
    navReserve: "Tisch reservieren",
    heroOverline: "Business V8 · Mehrsprachigkeit DE/EN",
    heroTitle: "Professionell, modern und jetzt mit vorbereitetem DE/EN-Sprachwechsel.",
    heroText: "Business V8 ergänzt Mehrsprachigkeit: DE/EN Sprachwechsel, übersetzte Kernbereiche, internationale Gäste und professioneller Auftritt für Touristen.",
    heroPrimary: "Reservierung starten",
    heroSecondary: "Business ansehen",
    businessFocusTitle: "Mehr als schön: diese Website soll Anfragen bringen.",
    cateringTitle: "Für Firmenfeiern, Geburtstage und große Gruppen.",
    careerTitle: "Ein professioneller Arbeitgeber-Auftritt.",
    reservationTitle: "Reservierungssystem mit klarer Anfrage-Logik.",
    contactTitle: "Besuchen Sie uns.",
    translationPreviewTitle: "Reservieren Sie Ihren besonderen Abend.",
    translationPreviewText: "Ein professionelles Reservierungssystem für Restaurants, Events und große Gruppen.",
    translationPreviewButton: "Tisch reservieren"
  },
  en: {
    navReserve: "Book a table",
    heroOverline: "Business V8 · DE/EN Language Switch",
    heroTitle: "Professional, modern and ready for bilingual restaurant websites.",
    heroText: "Business V8 adds multilingual support: German/English switching, translated key sections, international guests and a professional experience for tourists.",
    heroPrimary: "Start reservation",
    heroSecondary: "View business system",
    businessFocusTitle: "More than beautiful: this website is built to generate requests.",
    cateringTitle: "For corporate events, birthdays and large groups.",
    careerTitle: "A professional employer presence.",
    reservationTitle: "Reservation system with clear request logic.",
    contactTitle: "Visit us.",
    translationPreviewTitle: "Reserve your special evening.",
    translationPreviewText: "A professional reservation system for restaurants, events and large groups.",
    translationPreviewButton: "Book a table"
  }
};

const languageButtons = document.querySelectorAll(".language-btn");

function setLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("businessRestaurantLanguage", lang);

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  languageButtons.forEach(button => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
}

languageButtons.forEach(button => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage(localStorage.getItem("businessRestaurantLanguage") || "de");

// Business V11: CTA Polish
document.querySelectorAll(".btn-gold").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.setAttribute("data-polish", "active");
  });
  button.addEventListener("mouseleave", () => {
    button.removeAttribute("data-polish");
  });
});

// Business V12: Final Status
console.log("Business V12 Ultimate Agentur-Version geladen");

// Business V15 – Animation Upgrade
(function(){
  const progress=document.getElementById("businessScrollProgress");
  const transition=document.getElementById("businessPageTransition");
  window.addEventListener("scroll",()=>{if(!progress)return;const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=max>0?(window.scrollY/max*100)+"%":"0%"});
  document.querySelectorAll("a").forEach(link=>{const href=link.getAttribute("href")||"";if(href.endsWith(".html")&&transition){link.addEventListener("click",()=>{transition.classList.remove("active");void transition.offsetWidth;transition.classList.add("active")})}});
  if(window.Lenis){const lenis=new Lenis({smoothWheel:true,duration:1.15});function raf(t){lenis.raf(t);requestAnimationFrame(raf)}requestAnimationFrame(raf)}
  if(window.gsap&&window.ScrollTrigger){gsap.registerPlugin(ScrollTrigger);gsap.utils.toArray(".reveal").forEach(el=>{gsap.fromTo(el,{opacity:0,y:38,filter:"blur(8px)"},{opacity:1,y:0,filter:"blur(0px)",duration:.9,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 86%"}})})}
  document.querySelectorAll(".tilt-card").forEach(card=>{card.addEventListener("mousemove",e=>{const r=card.getBoundingClientRect();const x=e.clientX-r.left,y=e.clientY-r.top;const ry=(x/r.width-.5)*8,rx=(y/r.height-.5)*-8;card.style.transform=`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`});card.addEventListener("mouseleave",()=>card.style.transform="")});
})();

// Business V16 – Premium Motion Upgrade
(function(){
  const cursor = document.getElementById("businessCursorDot");

  if (cursor) {
    window.addEventListener("mousemove", (event) => {
      cursor.style.left = event.clientX + "px";
      cursor.style.top = event.clientY + "px";
    });
  }

  document.querySelectorAll(".btn, .header-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const rect = button.getBoundingClientRect();
      button.style.setProperty("--ripple-x", (event.clientX - rect.left) + "px");
      button.style.setProperty("--ripple-y", (event.clientY - rect.top) + "px");
      button.classList.remove("rippling");
      void button.offsetWidth;
      button.classList.add("rippling");
      setTimeout(() => button.classList.remove("rippling"), 700);
    });
  });

  if (window.gsap && window.ScrollTrigger) {
    gsap.utils.toArray("h1, h2").forEach((headline) => {
      gsap.fromTo(headline,
        { opacity: 0, y: 28, letterSpacing: "-0.08em" },
        {
          opacity: 1,
          y: 0,
          letterSpacing: "-0.04em",
          duration: .9,
          ease: "power3.out",
          scrollTrigger: { trigger: headline, start: "top 88%" }
        }
      );
    });

    gsap.utils.toArray(".hero-video-placeholder, .subpage-image").forEach((image) => {
      gsap.to(image, {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }
})();

// Business V17 – Speisekarte 2.0
(function(){
  const proMenuGrid = document.getElementById("proMenuGrid");
  if (!proMenuGrid) return;

  const proMenu = {
    starter: [
      {icon:"🥖", name:"Bruschetta Classica", desc:"Geröstetes Brot, Tomaten, Basilikum und Olivenöl.", price:"8,90 €", tags:["vegetarisch","bestseller"], allergens:["G"]},
      {icon:"🥗", name:"Goldener Salat", desc:"Blattsalate, Nüsse, Kräuter und Hausdressing.", price:"11,90 €", tags:["vegetarisch","glutenfrei"], allergens:["N"]},
      {icon:"🍲", name:"Suppe des Tages", desc:"Saisonal gekocht und täglich wechselnd.", price:"7,50 €", tags:["vegan"], allergens:[]}
    ],
    main: [
      {icon:"🍝", name:"Trüffel Pasta", desc:"Hausgemachte Pasta mit Trüffelcreme und Parmesan.", price:"24,90 €", tags:["vegetarisch","bestseller"], allergens:["G","L"]},
      {icon:"🥩", name:"Filet Royal", desc:"Rinderfilet, Jus, Gemüse und Kartoffelvariation.", price:"34,90 €", tags:["bestseller","glutenfrei"], allergens:[]},
      {icon:"🐟", name:"Lachs Signature", desc:"Gebratener Lachs mit Zitronenbutter und Marktgemüse.", price:"27,90 €", tags:["glutenfrei"], allergens:["L"]}
    ],
    dessert: [
      {icon:"🍫", name:"Chocolate Gold", desc:"Warmer Schokoladenkern mit Vanilleeis.", price:"10,90 €", tags:["bestseller","vegetarisch"], allergens:["G","L"]},
      {icon:"🍓", name:"Panna Cotta", desc:"Cremig, frisch und mit Beeren serviert.", price:"8,90 €", tags:["vegetarisch","glutenfrei"], allergens:["L"]},
      {icon:"🍨", name:"Sorbet Variation", desc:"Fruchtig, leicht und perfekt zum Abschluss.", price:"7,50 €", tags:["vegan","glutenfrei"], allergens:[]}
    ],
    drinks: [
      {icon:"🍷", name:"Hauswein", desc:"Rot oder Weiß, passend zur Küche ausgewählt.", price:"5,90 €", tags:["bestseller","vegan"], allergens:[]},
      {icon:"🍸", name:"Golden Aperitif", desc:"Spritzig, frisch und ideal zum Start.", price:"9,90 €", tags:["bestseller"], allergens:[]},
      {icon:"☕", name:"Espresso", desc:"Kräftig, aromatisch und frisch zubereitet.", price:"2,90 €", tags:["vegan","glutenfrei"], allergens:[]}
    ]
  };

  let currentCategory = "starter";
  let currentFilter = "all";
  let searchTerm = "";

  const search = document.getElementById("proMenuSearch");
  const filters = document.querySelectorAll(".pro-filter");
  const categories = document.querySelectorAll(".pro-category");

  function renderProMenu(){
    const items = (proMenu[currentCategory] || []).filter(item => {
      const text = (item.name + " " + item.desc + " " + item.tags.join(" ")).toLowerCase();
      const matchSearch = !searchTerm || text.includes(searchTerm);
      const matchFilter = currentFilter === "all" || item.tags.includes(currentFilter);
      return matchSearch && matchFilter;
    });

    if (!items.length) {
      proMenuGrid.innerHTML = '<article class="pro-menu-card no-menu-result shine-card"><div><h3>Kein Gericht gefunden</h3><p>Bitte ändere Suche oder Filter.</p></div></article>';
      return;
    }

    proMenuGrid.innerHTML = items.map(item => `
      <article class="pro-menu-card tilt-card shine-card">
        <div>
          <div class="pro-menu-card-top">
            <div class="pro-menu-icon">${item.icon}</div>
            <div><h3>${item.name}</h3><p>${item.desc}</p></div>
          </div>
          <div class="pro-badges">
            ${item.tags.map(tag => `<span>${tag}</span>`).join("")}
            ${item.allergens.map(a => `<span>${a}</span>`).join("")}
          </div>
        </div>
        <div class="pro-menu-footer">
          <span>Restaurant Name</span>
          <strong class="pro-menu-price">${item.price}</strong>
        </div>
      </article>
    `).join("");

    document.querySelectorAll(".tilt-card").forEach(card => {
      card.addEventListener("mousemove", e => {
        const r = card.getBoundingClientRect();
        const ry = ((e.clientX - r.left) / r.width - .5) * 8;
        const rx = ((e.clientY - r.top) / r.height - .5) * -8;
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      });
      card.addEventListener("mouseleave", () => card.style.transform = "");
    });
  }

  if (search) search.addEventListener("input", () => {
    searchTerm = search.value.toLowerCase().trim();
    renderProMenu();
  });

  filters.forEach(btn => btn.addEventListener("click", () => {
    filters.forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderProMenu();
  }));

  categories.forEach(btn => btn.addEventListener("click", () => {
    categories.forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    renderProMenu();
  }));

  renderProMenu();
})();

// Business V18 – Reservierung 2.0
(function(){
  const guests = document.getElementById("bookingGuestsV18");
  if (!guests) return;

  const minus = document.getElementById("bookingMinusV18");
  const plus = document.getElementById("bookingPlusV18");
  const time = document.getElementById("bookingTimeV18");
  const occasion = document.getElementById("bookingOccasionV18");
  const note = document.getElementById("bookingNoteV18");
  const summary = document.getElementById("bookingSummaryV18");
  const presets = document.querySelectorAll(".booking-preset-v18");
  const form = document.getElementById("bookingFormV18");
  const formNote = document.getElementById("bookingFormNoteV18");

  function updateBooking(){
    const persons = Number(guests.value || 1);
    const selectedTime = time && time.value ? time.value : "Uhrzeit noch wählen";
    const selectedOccasion = occasion && occasion.value ? occasion.value : "Anlass noch wählen";

    if (persons >= 20) {
      note.textContent = "Event-Anfrage erkannt – ideal für Catering oder geschlossene Gesellschaft";
    } else if (persons >= 10) {
      note.textContent = "Große Gruppe erkannt – Restaurant kann besser planen";
    } else if (persons >= 6) {
      note.textContent = "Gruppenreservierung erkannt";
    } else {
      note.textContent = "Normale Tischreservierung";
    }

    if (summary) {
      summary.querySelector("span").textContent = `${persons} Personen · ${selectedTime} · ${selectedOccasion}`;
    }
  }

  if (minus) minus.addEventListener("click", () => {
    guests.value = Math.max(1, Number(guests.value) - 1);
    updateBooking();
  });

  if (plus) plus.addEventListener("click", () => {
    guests.value = Math.min(120, Number(guests.value) + 1);
    updateBooking();
  });

  guests.addEventListener("input", updateBooking);
  if (time) time.addEventListener("change", updateBooking);
  if (occasion) occasion.addEventListener("change", updateBooking);

  presets.forEach(button => {
    button.addEventListener("click", () => {
      presets.forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      guests.value = button.dataset.persons;
      if (time) time.value = button.dataset.time;
      if (occasion) occasion.value = button.dataset.occasion;
      updateBooking();
    });
  });

  if (form) {
    form.addEventListener("submit", () => {
      formNote.textContent = "Reservierungsanfrage wird gesendet ...";
      formNote.classList.add("success");
    });
  }

  updateBooking();
})();

// Business V19 – Luxury Restaurant Experience
(function(){
  const luxCounters = document.querySelectorAll("[data-lux-count]");

  if (luxCounters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const target = parseFloat(el.dataset.luxCount);
        let current = 0;
        const step = target / 75;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            if (target === 4.9) el.textContent = "4.9★";
            else if (target >= 1000) el.textContent = target.toLocaleString("de-DE") + "+";
            else if (target >= 90) el.textContent = target + "%";
            else el.textContent = target + "+";
            clearInterval(timer);
          } else {
            if (target === 4.9) el.textContent = current.toFixed(1);
            else el.textContent = Math.floor(current).toLocaleString("de-DE");
          }
        }, 18);

        counterObserver.unobserve(el);
      });
    }, { threshold: .4 });

    luxCounters.forEach(counter => counterObserver.observe(counter));
  }

  if (window.gsap && window.ScrollTrigger) {
    gsap.utils.toArray(".luxury-card-image, .menu-special-card, .booking-preview-card").forEach((el) => {
      gsap.fromTo(el,
        { scale: 1.04 },
        {
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" }
        }
      );
    });

    gsap.utils.toArray(".luxury-light").forEach((el, i) => {
      gsap.to(el, {
        x: i % 2 === 0 ? 36 : -36,
        y: i % 2 === 0 ? -28 : 28,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  }
})();

// Business V20 – Final Check
console.log("Restaurant Business V20 Agentur Final geladen");

// V21 – deutlich sichtbare Wow-Animationen
(function(){
  const spotlight = document.getElementById("wowSpotlight");

  window.addEventListener("mousemove", (event) => {
    if (spotlight) {
      spotlight.style.left = event.clientX + "px";
      spotlight.style.top = event.clientY + "px";
    }

    document.querySelectorAll(".shine-card").forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mx", x + "%");
      card.style.setProperty("--my", y + "%");
    });
  });

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".brand",
      {opacity:0, y:-18},
      {opacity:1, y:0, duration:.8, ease:"power3.out"}
    );

    gsap.fromTo(".premium-nav a, .main-nav a",
      {opacity:0, y:-16},
      {opacity:1, y:0, duration:.65, stagger:.055, ease:"power3.out", delay:.15}
    );

    gsap.utils.toArray("h1, h2").forEach((el) => {
      gsap.fromTo(el,
        {opacity:0, y:50, scale:.96, filter:"blur(12px)"},
        {
          opacity:1,
          y:0,
          scale:1,
          filter:"blur(0px)",
          duration:1,
          ease:"power4.out",
          scrollTrigger:{trigger:el,start:"top 86%"}
        }
      );
    });

    gsap.utils.toArray(".cinematic-card, .luxury-experience-card, .agentur-final-card, .motion-card, .subpage-feature-card").forEach((el, i) => {
      gsap.fromTo(el,
        {opacity:0, y:70, rotateX:10, scale:.94},
        {
          opacity:1,
          y:0,
          rotateX:0,
          scale:1,
          duration:.95,
          delay:(i%3)*.08,
          ease:"power3.out",
          scrollTrigger:{trigger:el,start:"top 88%"}
        }
      );
    });

    gsap.utils.toArray(".cinematic-image, .luxury-card-image, .menu-special-card, .booking-preview-card").forEach((el) => {
      gsap.to(el, {
        yPercent:-8,
        scale:1.05,
        ease:"none",
        scrollTrigger:{
          trigger:el,
          start:"top bottom",
          end:"bottom top",
          scrub:true
        }
      });
    });

    gsap.to(".wow-orb-one", {x:90, y:-45, scale:1.22, duration:8, repeat:-1, yoyo:true, ease:"sine.inOut"});
    gsap.to(".wow-orb-two", {x:-85, y:55, scale:1.16, duration:9, repeat:-1, yoyo:true, ease:"sine.inOut"});
  }
})();

// Aurum V22 – extra polish
(function(){
  if (window.gsap && window.ScrollTrigger) {
    gsap.utils.toArray(".aurum-wine-image, .aurum-private-card").forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 70, scale: .96, filter: "blur(12px)" },
        { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1.05, ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 84%" }
        }
      );
    });
  }
})();

// Phase 1 Homepage Complete
(function(){
  const header = document.getElementById("siteHeader");
  const nav = document.getElementById("mainNav");
  const toggle = document.getElementById("menuToggle");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const closeLightbox = document.getElementById("closeLightbox");

  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }

  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 70);
    });
  }

  document.querySelectorAll(".phase-gallery-item").forEach((button) => {
    button.addEventListener("click", () => {
      if (!lightbox || !lightboxImage) return;
      lightboxImage.src = button.dataset.img;
      lightbox.classList.add("active");
    });
  });

  if (closeLightbox && lightbox) {
    closeLightbox.addEventListener("click", () => lightbox.classList.remove("active"));
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) lightbox.classList.remove("active");
    });
  }

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".phase-hero-title span",
      { opacity: 0, y: 80, filter: "blur(14px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.05, stagger: .14, ease: "power4.out", delay: .25 }
    );

    gsap.fromTo(".phase-hero-subtitle, .phase-hero-text, .phase-hero-actions",
      { opacity: 0, y: 38, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: .95, stagger: .12, ease: "power4.out", delay: .55 }
    );

    gsap.fromTo(".phase-hero-card",
      { opacity: 0, y: 60, rotateX: 8, filter: "blur(12px)" },
      { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)", duration: 1.05, ease: "power4.out", delay: .65 }
    );

    gsap.utils.toArray(".phase-main-image, .phase-dish-image, .phase-gallery-item").forEach((el) => {
      gsap.to(el, {
        yPercent: -7,
        scale: 1.04,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }
})();

// Phase 2 Speisekarte Complete
(function(){
  const grid = document.getElementById("aurumMenuGrid");
  if (!grid) return;

  const items = {
    vorspeisen: [
      {name:"Burrata & Feige", desc:"Burrata, marinierte Feige, Rucola, Walnuss und Balsamico.", price:"13,90 €", tags:["vegetarisch","signature","N"], img:"https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=1000&q=85"},
      {name:"Carpaccio Aurum", desc:"Rindercarpaccio, Parmesan, Zitrone, Rucola und Olivenöl.", price:"16,90 €", tags:["signature","glutenfrei"], img:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1000&q=85"},
      {name:"Bruschetta Gold", desc:"Geröstetes Sauerteigbrot, Tomaten, Basilikum und Kräuteröl.", price:"9,90 €", tags:["vegetarisch","G"], img:"https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=1000&q=85"}
    ],
    hauptgerichte: [
      {name:"Trüffel Pasta Aurum", desc:"Hausgemachte Pasta, Trüffelcreme, Parmesan und schwarzer Trüffel.", price:"24,90 €", tags:["signature","vegetarisch","G","L"], img:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85"},
      {name:"Filet Royal", desc:"Dry-Aged-Rinderfilet, Jus, Marktgemüse und Kartoffelvariation.", price:"34,90 €", tags:["signature","glutenfrei"], img:"https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=85"},
      {name:"Lachs Zitronenbutter", desc:"Gebratener Lachs, Zitronenbutter, Kräuter und Gemüse.", price:"27,90 €", tags:["glutenfrei","L"], img:"https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1000&q=85"}
    ],
    desserts: [
      {name:"Chocolate Gold", desc:"Warmer Schokoladenkern, Vanille, Beeren und feine Akzente.", price:"10,90 €", tags:["signature","vegetarisch","G","L"], img:"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=85"},
      {name:"Crème Brûlée", desc:"Klassisch karamellisiert mit Vanille und saisonalen Früchten.", price:"9,90 €", tags:["vegetarisch","glutenfrei","L"], img:"https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=1000&q=85"},
      {name:"Sorbet Variation", desc:"Drei Sorbets, Minze und frische Beeren.", price:"8,50 €", tags:["vegetarisch","glutenfrei"], img:"https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=1000&q=85"}
    ],
    bar: [
      {name:"Riesling Reserve", desc:"Mineralisch, elegant und perfekt zur saisonalen Küche.", price:"8,90 €", tags:["weine","glutenfrei"], img:"https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=85"},
      {name:"Aurum Spritz", desc:"Hausaperitif mit Zitrus, Kräutern und Schaumwein.", price:"11,90 €", tags:["signature"], img:"https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=85"},
      {name:"Pinot Noir", desc:"Samtig, tief und ideal zu Filet oder Private Dining.", price:"9,90 €", tags:["weine"], img:"https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1000&q=85"}
    ]
  };

  let category = "vorspeisen";
  let filter = "all";
  let search = "";

  const searchInput = document.getElementById("aurumMenuSearch");
  const filterButtons = document.querySelectorAll(".aurum-filter");
  const categoryButtons = document.querySelectorAll(".aurum-category");

  function render(){
    const result = (items[category] || []).filter(item => {
      const hay = (item.name + " " + item.desc + " " + item.tags.join(" ")).toLowerCase();
      const matchSearch = !search || hay.includes(search);
      const matchFilter = filter === "all" || item.tags.includes(filter);
      return matchSearch && matchFilter;
    });

    grid.innerHTML = result.length ? result.map(item => `
      <article class="aurum-menu-card tilt-card shine-card">
        <div class="aurum-menu-image" style="--img:url('${item.img}')"></div>
        <div class="aurum-menu-body">
          <div>
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <div class="aurum-menu-tags">${item.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
          </div>
          <div class="aurum-menu-footer">
            <span>Aurum Berlin</span>
            <strong>${item.price}</strong>
          </div>
        </div>
      </article>
    `).join("") : `<article class="aurum-menu-card shine-card"><div class="aurum-menu-body"><h3>Kein Gericht gefunden</h3><p>Bitte ändern Sie Suche oder Filter.</p></div></article>`;
  }

  searchInput && searchInput.addEventListener("input", () => {
    search = searchInput.value.toLowerCase().trim();
    render();
  });

  filterButtons.forEach(btn => btn.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    btn.classList.add("active");
    filter = btn.dataset.filter;
    render();
  }));

  categoryButtons.forEach(btn => btn.addEventListener("click", () => {
    categoryButtons.forEach(item => item.classList.remove("active"));
    btn.classList.add("active");
    category = btn.dataset.category;
    render();
  }));

  render();
})();

// Phase 3 Premium Reservierung
(function(){
  const guests = document.getElementById("guestCountPhase");
  if (!guests) return;

  const minus = document.getElementById("guestMinusPhase");
  const plus = document.getElementById("guestPlusPhase");
  const time = document.getElementById("reservationTimePhase");
  const occasion = document.getElementById("reservationOccasionPhase");
  const note = document.getElementById("reservationNotePhase");
  const summary = document.getElementById("reservationSummaryPhase");
  const presets = document.querySelectorAll(".reservation-preset-phase");
  const form = document.getElementById("aurumReservationForm");
  const message = document.getElementById("reservationFormMessage");

  function updateReservation(){
    const count = Number(guests.value || 1);
    const selectedTime = time && time.value ? time.value : "Uhrzeit noch wählen";
    const selectedOccasion = occasion && occasion.value ? occasion.value : "Anlass noch wählen";

    if (count >= 10) {
      note.textContent = "Private-Dining-Anfrage erkannt – wir stimmen Details persönlich ab.";
    } else if (count >= 6) {
      note.textContent = "Größere Gruppe erkannt – wir bereiten passende Tischoptionen vor.";
    } else {
      note.textContent = "Normale Tischreservierung";
    }

    if (summary) {
      summary.querySelector("span").textContent = `${count} Personen · ${selectedTime} · ${selectedOccasion}`;
    }
  }

  if (minus) minus.addEventListener("click", () => {
    guests.value = Math.max(1, Number(guests.value) - 1);
    updateReservation();
  });

  if (plus) plus.addEventListener("click", () => {
    guests.value = Math.min(60, Number(guests.value) + 1);
    updateReservation();
  });

  guests.addEventListener("input", updateReservation);
  if (time) time.addEventListener("change", updateReservation);
  if (occasion) occasion.addEventListener("change", updateReservation);

  presets.forEach(button => {
    button.addEventListener("click", () => {
      presets.forEach(item => item.classList.remove("active"));
      button.classList.add("active");

      guests.value = button.dataset.guests;
      if (time) time.value = button.dataset.time;
      if (occasion) occasion.value = button.dataset.occasion;

      const areaValue = button.dataset.area;
      document.querySelectorAll('input[name="bereich"]').forEach(input => {
        input.checked = input.value === areaValue;
      });

      updateReservation();
    });
  });

  if (form && message) {
    form.addEventListener("submit", () => {
      message.textContent = "Ihre Reservierungsanfrage wird gesendet ...";
      message.classList.add("success");
    });
  }

  updateReservation();
})();

if(window.gsap&&window.ScrollTrigger){gsap.utils.toArray('.event-card').forEach((c,i)=>gsap.from(c,{opacity:0,y:70,duration:1,delay:i*.08,scrollTrigger:{trigger:c,start:'top 85%'}}));}
// Phase 5 Kontakt, Trust & FAQ
(function(){
  const status = document.getElementById("openStatusPhase");
  if (status) {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const isOpen = day !== 1 && hour >= 17 && hour < 23;

    status.textContent = isOpen ? "Jetzt geöffnet" : "Aktuell geschlossen";
  }

  if (window.gsap && window.ScrollTrigger) {
    gsap.utils.toArray(".contact-info-card, .social-tile, .faq-list-phase details").forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 55, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: .85,
          delay: (i % 3) * .07,
          ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 88%" }
        }
      );
    });
  }
})();

// Phase 6 Final Polish
(function(){
  document.documentElement.classList.add("js-ready");

  if (window.gsap && window.ScrollTrigger) {
    gsap.utils.toArray(".chef-card, .award-item").forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 60, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: .9, delay: (i % 3) * .08, ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 88%" }
        }
      );
    });
  }
})();
