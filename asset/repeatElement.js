//permet de répété un element déjà creer
let mainContainer = document.querySelector(".cubeContainer");
for (let i = 0; i < 379; i++) {
  let cube = document.createElement("div");
  cube.classList.add("cube");
  mainContainer.appendChild(cube);
}

////permet de programé les effets et animations
//let cube = document.querySelectorAll(".cube");
//let animation = anime.timeline({
//  targets: cube,
//  easing: "easeInOutExpo",
//  loop: false,
//  //delay: anime.stagger(10, { start: 50 }),
//});
//
//animation
//  .add({
//    scale: 0,
//    //disloquence sur la largeure
//    translateX: function () {
//      return anime.random(-360, 360);
//    },
//    //disloquence sur la hauteur
//    translateY: function () {
//      return anime.random(-360, 360);
//    },
//    //disloquence sur la rotation
//    rotate: function () {
//      return anime.random(-360, 360);
//    },
//    //contrôle de la durée
//    duration: function () {
//      return anime.random(500, 3000);
//    },
//  })
//  .add({
//    scale: 1,
//    translateX: 0,
//    translateY: 0,
//    rotate: 0,
//    duration: function () {
//      return anime.random(500, 3000);
//    },
//  });
