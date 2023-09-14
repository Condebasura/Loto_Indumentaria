
let archivo = document.querySelector(".image");
const informeImg = async () =>{
let url = new URL(window.location);
const id = url.searchParams.get("id");
   console.log(id);
   let EstaImg = url.searchParams.get("estaimg");
console.log(EstaImg);


if(EstaImg){
// intentar entrar a los datos para que se muestren en la visualizacion!!
let src = archivo.textContent;
alert(src);    
}
}

informeImg();