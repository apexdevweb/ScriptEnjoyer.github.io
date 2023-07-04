//Sélectionne l'élément a récuperer//
const btn = document.querySelector(".burgerContainer");
const text = document.querySelector(".myLinks");

//Permet d'ajouter l'évènement pour le boutons toggle au click//
btn.addEventListener("click", () => {
  text.classList.toggle("show");
});
