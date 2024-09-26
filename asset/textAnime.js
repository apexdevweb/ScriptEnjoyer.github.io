gsap.registerPlugin(ScrollTrigger);
const textA = document.querySelector(".textInfo");
gsap.from(textA, {
  //y: 50,
  //x: 50,
  //z: 50,
  scale: 10,
  duration: 1,
  //rotation: 90,
  opacity: 0,
  stagger: 0.5,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".textTwo",
    start: "top top",
    end: "bottom bottom",
    //markers: true,
    scrub: 4,
  },
});
