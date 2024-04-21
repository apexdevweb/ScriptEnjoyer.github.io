anime({
  targets: ".line-drawing .lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1400,
  delay: function (el, i) {
    return i * 450;
  },
  direction: "alternate",
  loop: false,
});
