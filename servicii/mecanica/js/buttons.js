/* INTERNAL BUTTONS */
/*
document.querySelector(".btn-name").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#section-name").scrollIntoView({ behavior: "smooth" });
});
*/
document.querySelectorAll(".btn-navbar").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#section-contact").scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".btn-hero").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#section-services").scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".btn-hero-white").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#section-contact").scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".btn-services").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#section-services").scrollIntoView({ behavior: "smooth" });
  });
});

/* INTERSECTION OBSERVERS */

/* OLD WAY OBSERVERS 

const textAboutList = document.querySelectorAll(".text-about");
const cardsServicesList = document.querySelectorAll(".card-services");
const cardsTeamList = document.querySelectorAll(".card-team");
const cardsFaqList = document.querySelectorAll(".card-faq");
const h3List = document.querySelectorAll("h3");
const cardContact = document.querySelector(".card-contact");
const imgAbout = document.querySelector(".box-img-about");

const offsetYObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("offset-y0", entry.isIntersecting);
    if (entry.isIntersecting) offsetYObserver.unobserve(entry.target);
  });
});

const offsetXObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("offset-x0", entry.isIntersecting);
    if (entry.isIntersecting) offsetXObserver.unobserve(entry.target);
  });
});

textAboutList.forEach((text) => offsetYObserver.observe(text));
cardsServicesList.forEach((card) => offsetYObserver.observe(card));
cardsTeamList.forEach((card) => offsetYObserver.observe(card));
cardsFaqList.forEach((card) => offsetYObserver.observe(card));
h3List.forEach((h3) => offsetXObserver.observe(h3));
offsetXObserver.observe(cardContact);
offsetXObserver.observe(imgAbout); */
