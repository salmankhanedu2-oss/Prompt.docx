const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menuToggle");
const pages = [...document.querySelectorAll(".page")];
const navLinks = [...document.querySelectorAll(".nav-link")];

function showPage(hash) {
  const target = (hash || "#home").replace("#", "");
  const valid = ["home", "menu", "contact"].includes(target) ? target : "home";
  pages.forEach(page => page.classList.toggle("active-page", page.id === valid));
  navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${valid}`));
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("hashchange", () => showPage(location.hash));
navLinks.forEach(link => link.addEventListener("click", () => showPage(link.hash)));
document.querySelectorAll('a[href^="#"]').forEach(link => {
  if (!link.classList.contains("nav-link")) {
    link.addEventListener("click", () => {
      const hash = link.getAttribute("href");
      if (hash && hash.length > 1) showPage(hash);
    });
  }
});
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  document.getElementById("formHint").textContent =
    "Thanks! This demo form is working in your browser, but it needs an email/backend connection to deliver your message.";
  event.target.reset();
});

showPage(location.hash || "#home");
