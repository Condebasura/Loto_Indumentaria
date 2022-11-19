let miniImg = document.querySelector(".img_cont");
let imgZoom = document.querySelector(".image_zoom");
let foto  = document.querySelector(".image");
let box = document.querySelectorAll(".box_img");
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

let changeColorBox = () =>{
    for(let  p = 0; p <= miniImg.children.length - 1; p++){
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
                
        })
    }
}

changeColorBox();

