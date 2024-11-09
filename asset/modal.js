const modal = document.getElementById("myModal");
const vids = document.querySelectorAll("#myVid"); // Renommé en 'vids' pour indiquer une collection d'éléments
const links = document.querySelectorAll("#lienVid");

const modalVid = document.getElementById("Vid01");
const captionText = document.getElementById("caption");
const span = document.getElementsByClassName("close")[0];

vids.forEach((video, index) => {
  // L'index assure que chaque vidéo correspond à son lien
  video.onclick = function () {
    modal.style.display = "block";
    modalVid.src = video.src; // Utilisez le lien vidéo courant
    captionText.textContent = links[index].textContent; // Utilisez le texte du lien correspondant
  };
});

span.onclick = function () {
  modal.style.display = "none";
};
