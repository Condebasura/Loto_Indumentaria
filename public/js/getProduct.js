const HRem = document.querySelector(".H-Rem");
const HPant = document.querySelector(".H-Pant");
const caja = document.querySelector(".cont-ul");
const $fragment = document.createDocumentFragment();
    HRem.addEventListener("click",async (e)=>{
        e.preventDefault();
       
     if(e.target){
      
        const res = await fetch("/Hombres.html/producto").then(res =>  res.json()).then(async data=>{
            
            let datos = JSON.stringify(data);
 let obj = JSON.parse(datos);

 for(let el of obj){
    
   if(el.seccion == "Hombre" && el.subSeccion == "Remeras") {
    caja.innerHTML = "";
    const box = document.createElement("div");
   let img = document.createElement("img");
    let nombreProducto = document.createElement("h3");
    let descuento = document.createElement("p");
    let precio = document.createElement("span");
    let stock = document.createElement("p");
    let cuotas = document.createElement("p");
    //descuento
    let bestPrecio = Number(el.precio);
    let desc = Number(el.descuento);
    let porcentaje = (bestPrecio * desc) / 100;
    let rebajadoDe = bestPrecio - porcentaje;
    
    if(el.stock > 1){
        stock.innerHTML = "stock disponible";
    }else if(el.stock === 1){
        stock.innerHTML = "Ultimo disponible";
    }else if(el.stock < 1){
        stock.innerHTML = "sin stock";
    }

    box.setAttribute("class", "box_pilcha");
    img.setAttribute("class", "image");
    nombreProducto.setAttribute("class", "name");

    let img1 = el.imagen.split(",")[0];
    let imgURl = `http://localhost:3000/uploads/${img1}`;
    let imagenResponse = await fetch(imgURl);
    let imgBlob = await imagenResponse.blob();
    let imagenObjectURL = URL.createObjectURL(imgBlob);
    img.src = imagenObjectURL;
    descuento.innerHTML = `Antes: $ ${el.precio}`
    precio.innerHTML = `$ ${rebajadoDe}    ${el.descuento}%OFF`;
    nombreProducto.innerHTML = el.producto;
    cuotas.innerHTML = `${el.cuotas} cuotas sin interes`;
    $fragment.appendChild(box);
    box.appendChild(img);
    box.appendChild(nombreProducto);
    box.appendChild(descuento);
    box.appendChild(precio);
    box.appendChild(cuotas);
    box.appendChild(stock);

}
}
caja.appendChild($fragment);
            }).catch(err => console.log("error", err))
                    
    }
    
});

HPant.addEventListener("click", async(e)=>{
    e.preventDefault();
    if(e.target){
        const res = await fetch("/Hombres.html/producto").then(res => res.json()).then(async data=> {
           let datos = JSON.stringify(data);
           let obj = JSON.parse(datos);
          for(let el of obj){
            
           if(el.seccion == "Hombre" && el.subSeccion == "Pantalones"){
             caja.innerHTML = "";
             const box = document.createElement("div");
             let img = document.createElement("img");
             const nombreProducto = document.createElement("h3");
             let precio = document.createElement("span");
             
             box.setAttribute("class", "box_pilcha");
             img.setAttribute("class", "image");
             nombreProducto.setAttribute("class", "name");
            
             let imgURl = `http://localhost:3000/uploads/${el.imagen}`;
             let imagenResponse = await fetch(imgURl);
             let imgBlob = await imagenResponse.blob();
             let imagenObjectURL = URL.createObjectURL(imgBlob);
                 nombreProducto.innerHTML = el.producto;
                 precio.innerHTML = `$ ${el.precio}`;
                 img.src = imagenObjectURL;
                 $fragment.appendChild(box);
                 box.appendChild(img);
                box.appendChild(nombreProducto);
                 box.appendChild(precio);
}
}
caja.appendChild($fragment);
        }).catch(err => console.log("Error", err ))
    }
});


