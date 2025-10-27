

import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/landing.css";
import "../styles/components/loader.css";
import "../styles/components/about-us.css";
import "../styles/components/footer.css";
import "../styles/components/client.css";
import "../styles/components/services.css";
import "../styles/components/scrolltrigger-animation.css";
import "../styles/utils.css";

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".header__menu");
  const navLinks = document.querySelectorAll(".header__menu li");
  const landing_cta = document.querySelector(".landing-cta");
  const overlay = document.querySelector(".overlay");

  // toggle menu
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    landing_cta.style.zIndex = landing_cta.style.zIndex === "-1" ? "4" : "-1";

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.6
        }s`;
      }
    });
  });

  // animate links
};

navSlide();

gsap.registerPlugin(CustomEase, ScrollTrigger);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

document.addEventListener("DOMContentLoaded", () => {
  // --- 1️⃣ Ensure we start at the top ---
  window.scrollTo(0, 0);

  // --- 2️⃣ Disable scrolling during animation ---
  document.body.style.overflowY = "hidden";

  const tl = gsap.timeline({
    delay: 0.3,
    defaults: {
      ease: "hop",
    },
    onComplete: () => {
      // --- 3️⃣ Re-enable scrolling once animation finishes ---
      document.body.style.overflowY = "auto";
    },
  });

  const counts = document.querySelectorAll(".count");

  counts.forEach((count, index) => {
    const digits = count.querySelectorAll(".digit h1");
    tl.to(
      digits,
      {
        y: "0%",
        duration: 1,
        stagger: 0.075,
      },
      index * 1
    );

    if (index < counts.length) {
      tl.to(
        digits,
        {
          y: "-100vh",
          duration: 1,
          stagger: 0.075,
        },
        index * 1 + 1
      );
    }
  });

  tl.to(".spinner", {
    opacity: 0,
    duration: 0.3,
  });

  tl.to(
    ".word h1",
    {
      y: "0%",
      duration: 1,
    },
    "<"
  );

  tl.to(".divider", {
    scaleY: "100%",
    duration: 1,
    onComplete: () =>
      gsap.to(".divider", { opacity: 0, duration: 0.4, delay: 0.3 }),
  });

  tl.to("#word-1 h1", {
    y: "100vh",
    duration: 1,
    delay: 0.3,
  });

  tl.to(
    "#word-2 h1",
    {
      y: "-100vh",
      duration: 1,
    },
    "<"
  );

  tl.to(".block", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    duration: 1,
    stagger: 0.1,
    delay: 0.75,
    ease: "power4.inOut",
    onStart: () => gsap.to(".hero-img", { scale: 1, duration: 2, ease: "hop" }),
    onComplete: () => {
      document.body.style.overflowY = "auto"; // unlock scroll right here
    },
  });

  tl.to(
    [".header", ".line h1", ".line p"],
    {
      y: "0%",
      duration: 1.5,
      stagger: 0.2,
    },
    "<"
  );

  tl.to(
    [".landing-cta", ".cta-icon"],
    {
      scale: 1,
      duration: 1.5,
      stagger: 0.75,
      delay: 0.75,
    },
    "<"
  );

  tl.to(
    ".cta-label p",
    {
      y: "0%",
      duration: 1.5,
      delay: 0.5,
    },
    "<"
  );

  tl.to(".header", {
    zIndex: 2,
  });

  window.scrollTo(0, 0);

  tl.to(".header, .line h1, .line p", {
    y: "0%",
    duration: 1.5,
    stagger: 0.2,
  });

  tl.to(".loader", {
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    onComplete: () => {
      const loader = document.querySelector(".loader");
      loader.style.pointerEvents = "none"; // disable interaction
      loader.style.display = "none"; // optionally remove it from flow
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  ScrollTrigger.refresh();

  gsap.from(".logo-item", {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".logo-grid",
      start: "top 80%",
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  const services = gsap.util(".service");
});
