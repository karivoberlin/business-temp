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
  pizza: [
    { icon: "🍕", name: "Pizza Salami", desc: "Knusprig, herzhaft und ein Klassiker für den Biergarten.", price: "beliebt" },
    { icon: "🍕", name: "Pizza Margherita", desc: "Einfach, warm und genau richtig für den schnellen Hunger.", price: "klassisch" },
    { icon: "🧄", name: "Pizza mit Knoblauch", desc: "Würzig, unkompliziert und ideal zum Teilen.", price: "zum Mitnehmen" },
    { icon: "🌶️", name: "Pizza Spezial", desc: "Deftig belegt, passend zu einem kühlen Getränk.", price: "Hausstil" }
  ],
  pasta: [
    { icon: "🍝", name: "Pasta Pomodoro", desc: "Tomatensauce, Kräuter und einfache italienische Küche.", price: "frisch" },
    { icon: "🍝", name: "Pasta nach Art des Hauses", desc: "Sättigend, unkompliziert und bodenständig serviert.", price: "Tagesgericht" },
    { icon: "🧀", name: "Pasta mit Käse", desc: "Cremig, warm und besonders beliebt bei Familien.", price: "beliebt" },
    { icon: "🥗", name: "Kleiner Salat dazu", desc: "Frisch als Beilage oder leichter Start vor dem Hauptgericht.", price: "leicht" }
  ],
  klassiker: [
    { icon: "🌭", name: "Currywurst", desc: "Berliner Klassiker für den unkomplizierten Hunger.", price: "Hausmannskost" },
    { icon: "🥘", name: "Kleine warme Gerichte", desc: "Einfach, fair und passend zur Gartenkneipe.", price: "wechselnd" },
    { icon: "🥖", name: "Bruschetta", desc: "Geröstetes Brot mit Tomaten und Kräutern.", price: "zum Teilen" },
    { icon: "🍟", name: "Beilagen & Snacks", desc: "Für den Tisch, den Feierabend oder den kleinen Hunger.", price: "locker" }
  ],
  getraenke: [
    { icon: "🍺", name: "Bier vom Fass", desc: "Kalt gezapft und perfekt für draußen.", price: "Biergarten" },
    { icon: "🍹", name: "Aperol Spritz", desc: "Sommerlich, frisch und beliebt auf der Terrasse.", price: "Sommer" },
    { icon: "☕", name: "Kaffee", desc: "Für den Nachmittag oder nach dem Essen.", price: "klassisch" },
    { icon: "🥤", name: "Softdrinks", desc: "Erfrischungen für Familien, Gruppen und spontane Gäste.", price: "gekühlt" }
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
