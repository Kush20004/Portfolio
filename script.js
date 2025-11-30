// Navbar

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
let isOpen = false;

menuBtn.addEventListener("click", () => {
  if (!isOpen) {
    mobileMenu.classList.remove("hidden");
    menuBtn.classList.remove("ri-menu-line");
    menuBtn.classList.add("ri-close-line");

    gsap.from(mobileMenu, {
      opacity: 0,
      y: -20,
      duration: 0.3,
    });

    isOpen = true;
  } else {
    gsap.to(mobileMenu, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        mobileMenu.classList.add("hidden");
      },
    });

    menuBtn.classList.remove("ri-close-line");
    menuBtn.classList.add("ri-menu-line");

    isOpen = false;
  }
});

// Hero section

// gsap.from(".hero-text", {
//   opacity: 0,
//   x: -50,
//   duration: 1,
// });

// gsap.from(".hero-img", {
//   opacity: 0,
//   x: 50,
//   duration: 1,
//   delay: 0.3,
// });

gsap.registerPlugin(TextPlugin);

// Typing Animation for Name
gsap.to("#typingName", {
  text: "Kush Singh",
  duration: 2,
  ease: "none",
});

// Hero Section Animations
gsap.from(".hero-text", {
  opacity: 0,
  x: -50,
  duration: 1,
  delay: 0.5,
});



// About Section

gsap.registerPlugin(ScrollTrigger);

// About Section Image Animation
gsap.from(".about-img", {
  scrollTrigger: {
    trigger: ".about-img",
    start: "top 80%",
  },
  opacity: 0,
  x: -80,
  duration: 1,
});

// About Section Text Animation
gsap.from(".about-text", {
  scrollTrigger: {
    trigger: ".about-text",
    start: "top 80%",
  },
  opacity: 0,
  x: 80,
  duration: 1,
  delay: 0.2,
});

// Skills

gsap.from(".skill-card", {
  scrollTrigger: {
    trigger: ".skill-card",
    start: "top 85%",
  },
  opacity: 0,
  y: 40,
  duration: 0.6,
  stagger: 0.2,
});

// Projects

gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".project-card",
    start: "top 85%",
  },
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.3,
});

// Contact

gsap.from("#contact", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
  },
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  fetch(
    "https://script.google.com/macros/s/AKfycbzGPZJyt6rNLVIXwU4jMICaBJ6tB0sb_iOM75n-Vnb9fzViU7misR0Y1GBfimPOPA8/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }
  );

  alert("Message Sent Successfully!");
  document.getElementById("contactForm").reset();
});
