document.querySelectorAll(".card-faq").forEach((cardFaq) => {
  cardFaq.addEventListener("click", (e) => {
    const cardFaqAnswer = e.currentTarget.querySelector(".card-faq-answer");
    const cardFaqAnswerD = window.getComputedStyle(cardFaqAnswer).display;

    if (cardFaqAnswerD === "none") {
      cardFaqAnswer.style.display = "block";
    } else if (cardFaqAnswerD === "block") {
      cardFaqAnswer.style.display = "none";
    }
  });
});
