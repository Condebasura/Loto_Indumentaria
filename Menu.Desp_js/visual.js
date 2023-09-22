import { archivo } from "./verProd.js";
// Declaramos las variables para el contenedor de cada caja, la caja de cada imagen, la imagen y el box donde se le otorgará el zoom a cada imagen.
let miniImg = document.querySelector(".img_cont");
let imgZoom = document.querySelector(".image_zoom");
let foto  = document.querySelector(".image");
let box = document.querySelectorAll(".box_img");
// Se le atribuye la class "box_color" al primer box que es el que aparece por defecto en el zoom de imagenes.
 box[0].setAttribute("class" , "box_color");


miniImg.addEventListener("mousedown" , (e) =>{
//le asignamos el  evento a la variable foto. 
foto = e.target;

let im = foto.getAttribute("src");

imgZoom.setAttribute("src", im);
console.log(imgZoom)
document.addEventListener("mousedown", (event)=>{
    
if( event.target !=  foto ||  imgZoom.getAttribute("src") == "null" ){
    imgZoom.setAttribute("src", archivo);
    
    box[0].setAttribute("class" , "box_color");
    box[1].setAttribute("class" , "box_img") &  
    box[2].setAttribute("class" , "box_img")&
    box[3].setAttribute("class" , "box_img")&
    box[4].setAttribute("class" , "box_img");
}
})

});
   
let changeColorBox = () =>{
    for(let  p = 0; p <= miniImg.children.length -1; p++){
        miniImg.children[p].addEventListener("mousedown", (event) =>{ 
          
            if(p == 0)
            miniImg.children[p].classList.toggle("box_color");
             
        if(p != 0)
                box[0].setAttribute("class","box_img"); 
        
        if(p == 1)
              miniImg.children[p].classList.toggle("box_color");
               
        if(p != 1)
                box[1].setAttribute("class","box_img"); 
        
        if(p == 2)
            miniImg.children[p].classList.toggle("box_color");
               
        if(p != 2)
                box[2].setAttribute("class","box_img"); 
    
        if(p == 3)
            miniImg.children[p].classList.toggle("box_color");
       
        if(p != 3)
                box[3].setAttribute("class","box_img"); 
        
        if(p == 4)
            miniImg.children[p].classList.toggle("box_color");
            
        if(p != 4)
                box[4].setAttribute("class","box_img"); 
                
                           
        }) }};



changeColorBox();

export {imgZoom};