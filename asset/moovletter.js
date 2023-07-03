// Wrap every letter in a span
// Wrap every letter in a span
var textWrapper = document.querySelector(".ml10 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: false })
  .add({
    targets: ".ml10 .letter",
    rotateY: [-90, 0],
    duration: 10300,
    delay: (el, i) => 45 * i,
  })
  .add({
    targets: ".ml10",
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
