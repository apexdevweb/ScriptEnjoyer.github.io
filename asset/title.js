anime
  .timeline({ loop: false })
  .add({
    targets: ".ml15 .word",
    scale: [14, 1],
    opacity: [0, 1],
    easing: "easeOutCirc",
    duration: 400,
    delay: (el, i) => 300 * i,
  })
  .add({
    targets: ".ml15",
    opacity: 1,
    duration: 400,
    easing: "easeOutExpo",
    delay: 1000,
  });
