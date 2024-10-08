let selection = Splitting();
// use a script tag or an external JS file
if (window.matchMedia("(min-width: 1024px)").matches) {
  document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(selection[0].chars, {
      //y: 50,
      x: 50,
      //z: 50,
      duration: 5,
      rotation: 15,
      opacity: 0,
      stagger: 0.05,
      //stagger: 0.05,
      scrollTrigger: {
        trigger: "",
        start: "50% 50%",
        end: "90% 90%",
        //markers: true,
        scrub: true,
      },
    });
  });
}
//lenis script pour la compatibilité avec GSAP
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 700);
});

gsap.ticker.lagSmoothing(0);

//lenis script pour la compatibilité sans GSAP

// const lenis = new Lenis();

// lenis.on("scroll", (e) => {
//   console.log(e);
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);
