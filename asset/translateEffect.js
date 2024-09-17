gsap.registerPlugin(ScrollTrigger);
const carte = document.querySelectorAll(".projetContenu");
carte.forEach((cartes) => {
  gsap.from(cartes, {
    //y: 50,
    x: -450,
    //z: 50,
    scale: 0,
    duration: 15,
    rotation: 90,
    opacity: 0,
    stagger: 0.5,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".projetContenu",
      start: "top 95%",
      end: "bottom 70%",
      //markers: true,
      scrub: 6,
    },
  });
});
