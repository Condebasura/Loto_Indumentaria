import { inService } from "../service/in-service.js";
const formulario = document.querySelector("[data-form]");


formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const producto = document.querySelector("[data-producto]").value;
    const precio = document.querySelector("[data-precio]").value;
    console.log(producto , "---" , precio);

    inService.addProducto(producto, precio)
    .then(() =>{
     alert("producto agregado");
    }).catch(err => console.log(err))

})