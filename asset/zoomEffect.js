const { innerHeight } = window;
if (window.matchMedia("(min-width: 1024px)").matches) {
  gsap.from(".infocontain img", {
    //y: 50,
    x: 900,
    //z: 50,
    scale: 0,
    stagger: 0.25,
    duration: 2,
    opacity: 0,
    ease: "power2.inOut", // Easing pour un effet smooth
    scrollTrigger: {
      trigger: "#primaryContainer",
      start: "40% 40%",
      end: "65% bottom",
      scrub: 3, // Animation plus réactive
      pin: true,
      anticipatePin: 1, // Évite les sauts lors de l'épinglage
      //markers: true, // Affiche les marqueurs de debug
    },
  });
}
