// importamos la variable archivo para que  imgZoom tome por defecto el src de la imagen cuando se hace click fuera de las miniaturas, la cual se le asigna a la variable cuando entramos en la visualizacion.
import { archivo } from "./verProd.js";

// Declaramos las variables para el contenedor de cada caja, la caja de cada imagen, la imagen y el box donde se le otorgará el zoom a cada imagen.
let miniImg = document.querySelector(".img_cont");
let imgZoom = document.querySelector(".image_zoom");
let foto = document.querySelector(".image");
let box = document.querySelectorAll(".box_img");
// Se le atribuye la class "box_color" al primer box que es el que aparece por defecto en el zoom de imagenes.
box[0].setAttribute("class", "box_color");


miniImg.addEventListener("mousedown", (e) => {
        //le asignamos el  evento a la variable foto.   
        foto = e.target;

        // le asignamos a la variable im el valor de src de la foto que se seleccione, asi imgZoom muestra la misma imagen que seleccionamos en la muniatura. 
        let im = foto.getAttribute("src");
        imgZoom.setAttribute("src", im);

        // Este listener se utiliza para que si se hace click fuera de los box de las imagen, la imagen del zoom vuelve a la por defecto.
        document.addEventListener("mousedown", (e) => {

                if (e.target != foto || imgZoom.getAttribute("src") == "null") {
                        imgZoom.setAttribute("src", archivo);

                        box[0].setAttribute("class", "box_color");
                        box[1].setAttribute("class", "box_img") &
                                box[2].setAttribute("class", "box_img") &
                                box[3].setAttribute("class", "box_img") &
                                box[4].setAttribute("class", "box_img");
                }
        })

});
//funcion para cambiar el borde de la caja que es seleccionada
let changeColorBox = () => {
        for (let p = 0; p <= miniImg.children.length - 1; p++) {
                miniImg.children[p].addEventListener("mousedown", (event) => {
                        // Si la caja es seleccioada  se le agrega la clase css que contiene el cambio de color de borde, de lo contrario ,se le quita. 
                        if (p == 0)
                                miniImg.children[p].classList.add("box_color");

                        if (p != 0)
                                box[0].setAttribute("class", "box_img");

                        if (p == 1)
                                miniImg.children[p].classList.add("box_color");
                        ;
                        if (p != 1)
                                box[1].setAttribute("class", "box_img");

                        if (p == 2)
                                miniImg.children[p].classList.add("box_color");

                        if (p != 2)
                                box[2].setAttribute("class", "box_img");

                        if (p == 3)
                                miniImg.children[p].classList.add("box_color");

                        if (p != 3)
                                box[3].setAttribute("class", "box_img");

                        if (p == 4)
                                miniImg.children[p].classList.add("box_color");

                        if (p != 4)
                                box[4].setAttribute("class", "box_img");


                })
        }
};



changeColorBox();
// exportamos una funcion a otro archivo js.
export { imgZoom };