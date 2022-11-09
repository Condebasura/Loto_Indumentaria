let miniImg = document.querySelector(".img_cont");
let imgZoom = document.querySelector(".image_zoom");
let foto  = document.querySelector(".image");
let box = document.querySelector(".box_img");
let img_defect = foto.getAttribute("src");
imgZoom.setAttribute("src", img_defect);

miniImg.addEventListener("mousedown" , (event) =>{
  
foto =  event.target

let im = foto.getAttribute("src");

imgZoom.setAttribute("src", im);

if(imgZoom.getAttribute("src") == "null" ){

    return imgZoom.setAttribute("src", img_defect);
}


});





