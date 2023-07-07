//je stock l'animation dans une fonction fléché
const stagEl = () => {
  anime({
    targets: ".square",
    scale: [
      { value: 0.1, easing: "easeOutSine", duration: 400 },
      { value: 1, easing: "easeInOutQuad", duration: 800 },
    ],
    delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
    direction: "alternate",
  });
};
