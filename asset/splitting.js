let selection=Splitting();window.matchMedia("(min-width: 1024px)").matches&&document.addEventListener("DOMContentLoaded",t=>{gsap.registerPlugin(ScrollTrigger),gsap.from(selection[0].chars,{x:50,duration:5,rotation:15,opacity:0,stagger:.05,scrollTrigger:{trigger:"",start:"50% 50%",end:"90% 90%",scrub:!0}})}),window.matchMedia("(min-width: 768px)").matches&&document.addEventListener("DOMContentLoaded",t=>{gsap.registerPlugin(ScrollTrigger),gsap.from(selection[0].chars,{x:50,duration:5,rotation:15,opacity:0,stagger:.05,scrollTrigger:{trigger:"",start:"40% 50%",end:"70% 100%",scrub:!0}})});const lenis=new Lenis;lenis.on("scroll",ScrollTrigger.update),gsap.ticker.add(t=>{lenis.raf(700*t)}),gsap.ticker.lagSmoothing(0);