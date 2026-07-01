const loader = document.getElementById("loader");
const header = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const backToTop = document.getElementById("backToTop");
const cookieBanner = document.getElementById("cookieBanner");
const acceptCookies = document.getElementById("acceptCookies");
const cookieSettings = document.getElementById("cookieSettings");

window.addEventListener("load", () => {
  setTimeout(() => loader.classList.add("hide"), 650);
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 70);
  backToTop.classList.toggle("visible", window.scrollY > 520);
});

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
  });
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

if (localStorage.getItem("restaurantStarterCookies") === "accepted") {
  cookieBanner.classList.add("hidden");
}

acceptCookies.addEventListener("click", () => {
  localStorage.setItem("restaurantStarterCookies", "accepted");
  cookieBanner.classList.add("hidden");
});

cookieSettings.addEventListener("click", (event) => {
  event.preventDefault();
  localStorage.removeItem("restaurantStarterCookies");
  cookieBanner.classList.remove("hidden");
});

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("visible"), index * 60);
    }
  });
}, { threshold: 0.15 });

reveals.forEach((element) => revealObserver.observe(element));

document.querySelectorAll(".glass-hover").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--x", `${x}%`);
    card.style.setProperty("--y", `${y}%`);
  });
});

const menuData = {
  vorspeisen: [
    { icon: "🥖", name: "Bruschetta", desc: "Geröstetes Brot mit Tomaten, Knoblauch und Kräutern.", price: "ab 6,90 €" },
    { icon: "🥗", name: "Gemischter Salat", desc: "Frische Salate mit Hausdressing und knackigem Gemüse.", price: "ab 7,90 €" },
    { icon: "🍟", name: "Pommes & Snacks", desc: "Kleine herzhafte Klassiker für zwischendurch.", price: "ab 4,90 €" },
    { icon: "🍲", name: "Suppe des Tages", desc: "Wärmend, bodenständig und passend zur Saison.", price: "ab 6,50 €" }
  ],
  hauptgerichte: [
    { icon: "🍕", name: "Pizza Salami", desc: "Knusprige Pizza mit Tomatensauce, Käse und Salami.", price: "ab 10,90 €" },
    { icon: "🍝", name: "Pasta Pomodoro", desc: "Pasta mit fruchtiger Tomatensauce und Kräutern.", price: "ab 9,90 €" },
    { icon: "🌭", name: "Currywurst", desc: "Berliner Klassiker mit würziger Sauce und Beilage.", price: "ab 8,90 €" },
    { icon: "🍽️", name: "Hausmannskost", desc: "Herzhafte Gerichte, einfach, ehrlich und sättigend.", price: "ab 11,90 €" }
  ],
  desserts: [
    { icon: "☕", name: "Eiskaffee", desc: "Kühl, cremig und perfekt für den Sommer.", price: "ab 4,90 €" },
    { icon: "🍰", name: "Kuchen nach Angebot", desc: "Süßer Abschluss oder Begleiter zum Kaffee.", price: "ab 3,90 €" },
    { icon: "🍨", name: "Eisvariation", desc: "Leicht, klassisch und beliebt bei Groß und Klein.", price: "ab 4,50 €" },
    { icon: "🥞", name: "Berliner Dessert", desc: "Süße Empfehlung je nach Tagesangebot.", price: "ab 4,90 €" }
  ],
  getraenke: [
    { icon: "🍺", name: "Frisch gezapftes Bier", desc: "Kalt, frisch und passend zur gemütlichen Runde.", price: "ab 3,90 €" },
    { icon: "🍹", name: "Aperol Spritz", desc: "Spritziger Aperitif für Terrasse und Feierabend.", price: "ab 6,90 €" },
    { icon: "☕", name: "Kaffee & Espresso", desc: "Klassisch heiß serviert.", price: "ab 2,50 €" },
    { icon: "🥤", name: "Softdrinks", desc: "Cola, Wasser und weitere alkoholfreie Getränke.", price: "ab 2,90 €" }
  ]
};

const menuGrid = document.getElementById("menuGrid");
const tabs = document.querySelectorAll(".tab");

function addGlassTracking() {
  document.querySelectorAll(".menu-card.glass-hover").forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--x", `${x}%`);
      card.style.setProperty("--y", `${y}%`);
    });
  });
}

function renderMenu(category) {
  menuGrid.classList.add("menu-changing");

  setTimeout(() => {
    menuGrid.innerHTML = menuData[category].map(item => `
      <article class="menu-card glass-hover">
        <div class="menu-icon">${item.icon}</div>
        <div>
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
        </div>
        <strong class="menu-price">${item.price}</strong>
      </article>
    `).join("");

    addGlassTracking();
    menuGrid.classList.remove("menu-changing");
  }, 180);
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(item => item.classList.remove("active"));
    tab.classList.add("active");
    renderMenu(tab.dataset.category);
  });
});

renderMenu("vorspeisen");
