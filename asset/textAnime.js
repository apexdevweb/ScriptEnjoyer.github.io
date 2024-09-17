gsap.registerPlugin(ScrollTrigger);
const textA = document.querySelector(".textInfo");
gsap.from(textA, {
  //y: 50,
  //x: 50,
  //z: 50,
  scale: 20,
  duration: 5,
  //rotation: 90,
  opacity: 0,
  stagger: 0.5,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".textTwo",
    start: "top 30%",
    end: "bottom 70%",
    //markers: true,
    scrub: 4,
  },
});
