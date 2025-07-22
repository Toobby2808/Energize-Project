/* MOBILE MENU JAVASCRIPT */
const hamburgerMenu = document.querySelector(".hamburger-btn");
const mobileMenu = document.querySelector(".mobile-menu");

hamburgerMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

/* FAQ SECTION JAVASCRIPT */
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  const faqQuestion = faq.querySelector(".faq-question");

  faqQuestion.addEventListener("click", () => {
    const icon = faq.querySelector(".faq-question i");

    // Open Clicked Faq
    if (faq.classList.contains("open")) {
      faq.classList.remove("open");
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    } else {
      faq.classList.add("open");
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    }
    // Close all other opened faqs
    faqs.forEach((otherFaq) => {
      if (otherFaq !== faq) {
        console.log(otherFaq);
        otherFaq.classList.remove("open");
        otherFaq.querySelector("i").classList.add("fa-plus");
      }
    });
  });
});
