let miniImg = document.querySelector(".img_cont");
const imgZoom = document.querySelector(".image_zoom");
let foto  = document.querySelector(".image");

miniImg.addEventListener("mousedown" , (e) =>{
  
foto = e.target;

let im = foto.getAttribute("src");

imgZoom.setAttribute("src", im);
 
})