// Al precionar el boton en el cuadro de error se recarga la pagina esperando que el error se solucione.
const volver = document.querySelector(".boton_volver");
volver.addEventListener("click", (e)=>{

console.log(e.target)
return window.location.href = document.referrer;

});