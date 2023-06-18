//Mise en place du script pour le slider

if (document.readyState === "complete") {
	myScript();
  } else {
	document.addEventListener("DOMContentLoaded", function () {
	  myScript();
	});
  }
  
  function myScript() {
	console.log("HTML prêt !");
  
	const slides = [
	  {
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	  },
	  {
		image: "slide2.jpg",
		tagLine:
		  "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	  },
	  {
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	  },
	  {
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	  },
	];
  // Calcul du nombre d'items pour le slider
  let nbItems = slides.length - 1;
  // Position de départ
  let numDot = 0;
  // Dossier des images
  let srcImage = "./assets/images/slideshow/";

  // On selectionne les items suivants
  const bannerImg = document.querySelector(".banner-img");
  const bannerText = document.querySelector(".banner-text");
  const arrowLeft = document.querySelector(".arrow_left");
  const arrowRight = document.querySelector(".arrow_right");
  const dots = document.querySelector(".dots");

  // Apparition des éléments une fois le script chargé
  arrowLeft.classList.remove("hidden");
  arrowRight.classList.remove("hidden");

  // Mise en place des points de sélection
  for (let cercle = 0; cercle <= nbItems; cercle++) {
	dots.innerHTML +=
	  '<span id="dot' +
	  cercle +
	  '" class="dot" title="Image' +
	  (cercle + 1) +
	  '"></span>';
  }
 // La mise en place d'une liste de tous les élements ayant la class "dot"
 const dotList = document.querySelectorAll(".dot");
  
 // Mise en place d'un cercle plein pour l'image active qui est actif un cercle vide pour les autres points
 const addSelected = () => {
   for (let cercle = 0; cercle <= nbItems; cercle++) {
	 if (cercle === numDot) {
	   dotList[cercle].classList.add("dot_selected");
	 } else {
	   dotList[cercle].classList.remove("dot_selected");
	 }
   }
 };

}