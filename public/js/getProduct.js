
const hombre = document.querySelector(".hombre");
const boxCargas = document.querySelector(".boxCargas");
const contUltimas = document.querySelector(".contUltimas");
const boxNavbarNav = document.querySelector(".navbar-nav");
const boxRutas = document.createElement("li");
const searching = document.querySelector(".sech");
const prodSearch = document.querySelector(".product");
const caja = document.createElement("div");
const texto = document.createElement("h3");
const footer = document.querySelector("footer");
const cajaUltimas = document.querySelector(".cajaUltimas");
const spiner = document.createElement("div");
const span = document.createElement("span");
const $fragment = document.createDocumentFragment();





const DatosProdClient = async (data) =>{
    let datos = JSON.stringify(data);
    let obj = JSON.parse(datos);
    if (obj.length === 0) {
        boxCargas.innerHTML = "";
        caja.innerHTML = "";
        contUltimas.innerHTML = "";
       // prodSearch.classList.remove("product_search")
        prodSearch.classList.add("product", "d-none");
        
    
          

        texto.innerHTML = "No hay productos!!";
        $fragment.appendChild(texto);

    } else {
        
      for(let el of obj){
          
          boxCargas.innerHTML = "";
        contUltimas.innerHTML = "";
          caja.innerHTML = "";
         // prodSearch.classList.remove("product_search")
          prodSearch.classList.add("product", "d-none");

          const box = document.createElement("div");
        let datosProducto = document.createElement("div");
      let img = document.createElement("img");
       let nombreProducto = document.createElement("h5");
       let hr = document.createElement("hr");
       const cardUl = document.createElement("ul");
       let descuento = document.createElement("li");
       let precio = document.createElement("li");
       let stock = document.createElement("li");
       let cuotas = document.createElement("li");
       let liCompFav = document.createElement("li");
       let car = document.createElement("i");
       let fav = document.createElement("i");
       const  cardFotter = document.createElement("div");
       let bestPrecio = Number(el.precio);
       let desc = Number(el.descuento);
       let porcentaje = (bestPrecio * desc) / 100;
       let rebajadoDe = bestPrecio - porcentaje;
       
       if (el.stock >= 5) {
        stock.innerHTML = `<small class="link-success"> stock disponible </small>`;
    } else if (el.stock > 0 && el.stock <= 4) {
        stock.innerHTML = ` <small class="link-danger"> Ultimos disponible </small>`;
    } else if (el.stock === 0) {
        stock.innerHTML = `<small class="link-secondary"> sin stock </small>`;
    }  
       caja.setAttribute("class", "cont-ul z-n1 justify-content-center text-center row gy-sm-3  gx-sm-5 gx-0 gy-0  ps-0 mt-5");
       box.setAttribute("class", "box_pilcha card col-sm-6 col m-3");
       img.setAttribute("class", "image card-img-top");
        
        
       nombreProducto.setAttribute("class", "name card-title text-truncate");
       cardUl.setAttribute("class", "list-group list-group-flush m-0 p-0 text-start text-md-center")
       datosProducto.setAttribute("class","datos card-body");
       descuento.setAttribute("class", "precio list-group-item link-danger");
       precio.setAttribute("class", "list-group-item ");
       cuotas.setAttribute("class", "list-group-item");
       stock.setAttribute("class", "list-group-item");
       liCompFav.setAttribute("class", " row justify-content-center");
       car.setAttribute("class", "fas fa-shopping-cart car mt-2 col-3");
       fav.setAttribute("class", "fa-solid fa-heart heart mt-2 col-3");
       cardFotter.setAttribute("class", "card-footer text-center");
       let img1 = el.imagen.split(",")[0];
       let imgURl = `http://localhost:3000/uploads/${img1}`;
       let imagenResponse = await fetch(imgURl);
       let imgBlob = await imagenResponse.blob();
       let imagenObjectURL = URL.createObjectURL(imgBlob);
       img.src = imagenObjectURL;
       



       descuento.innerHTML = `Antes: $ ${el.precio}`
       precio.innerHTML = `$ ${rebajadoDe} <small class="text-bg-success p-1 rounded">   ${el.descuento}  %OFF </small>`;
       nombreProducto.innerHTML = el.producto;
       cuotas.innerHTML = `<small> ${el.cuotas} cuotas sin interes </small>`;
      
      
       img.addEventListener("click", async (e)=>{
       e.preventDefault();
       if(e.target){
       
        boxCargas.innerHTML = "";
        cajaUltimas.innerHTML = "";
           
       let lasImgs = el.imagen.split(",");
    
  const loadImage = async (imgName) => {
    let imgURL = `http://localhost:3000/uploads/${imgName}`;
    let response = await fetch(imgURL);
    let blob = await response.blob();
    return URL.createObjectURL(blob);
  };
  
  
  let imagenes = await Promise.all(lasImgs.slice(1, 5).map(loadImage));
       console.log(imagenes);
      
       // crear una funcion que haga cambiar de imagen ampliada "img_zoom" cada vez que se pasa por una de las miniaturas
       const boxImg = document.createElement("div");
       boxImg.setAttribute("class", "content");
       boxImg.innerHTML = `<div class="img-prod">
       <div class="contenedor_img">
       <figure class="img_cont">
       <div class="box_img">
                        <img class="image" src="${imagenes[0]}" alt="">
                    </div>
                    <div class="box_img">
                        <img class="image1" src="${imagenes[1]}" alt="">
                    </div>
                    <div class="box_img">
                        <img class="image2" src="" alt="${imagenes[2]}">
                    </div>
                    <div class="box_img">
                        <img class="image3" src="" alt="${imagenes[3]}">
                    </div>

                </figure>
                <figure class="cont_zoom">
                    <div class="box_img__zoom">
                        <img class="image_zoom" src="" alt="">

                    </div>
                </figure>
                </div>
                </div> `
                
                boxCargas.appendChild(boxImg);
                
                
       }
      })
   
       $fragment.appendChild(box);
       box.appendChild(img);
       box.appendChild(datosProducto);
       box.appendChild(cardFotter);
       datosProducto.appendChild(hr);
       datosProducto.appendChild(nombreProducto);
       datosProducto.appendChild(cardUl)

       cardUl.appendChild(descuento);

       if (desc === 0) {

        cardUl.removeChild(descuento);
        precio.innerHTML = `$ ${rebajadoDe} `;
    }
       cardUl.appendChild(precio);
       cardUl.appendChild(cuotas);
       cardUl.appendChild(stock);
       liCompFav.appendChild(fav);
       liCompFav.appendChild(car);
       cardFotter.appendChild(liCompFav);
   
   
   }
}
boxCargas.appendChild(prodSearch);
boxCargas.appendChild(caja);

   caja.appendChild($fragment);
   
};



hombre.addEventListener("click", async(e)=>{
 e.preventDefault();
 if(e.target){
boxRutas.innerHTML = "";

const HRem = document.createElement("a");
const HPant = document.createElement("a");
const HAcce = document.createElement("a");
HRem.innerHTML = "Remeras";
HPant.innerHTML = "Pantalones";
HAcce.innerHTML = "Accesorios";
boxRutas.setAttribute("class", "nav-item ms-lg-5 ms-0 m-2");
HRem.setAttribute("class", "link-success link-offset-2  link-underline-opacity-0 link-underline-opacity-50-hover ms-2");
HPant.setAttribute("class", "link-primary link-offset-2  link-underline-opacity-0 link-underline-opacity-50-hover ms-2");
HAcce.setAttribute("class", "link-danger link-offset-2  link-underline-opacity-0 link-underline-opacity-50-hover ms-2");

        boxRutas.appendChild(HRem);
        boxRutas.appendChild(HPant);
        boxRutas.appendChild(HAcce);
        boxNavbarNav.appendChild(boxRutas)
        
          
        
    


    HRem.addEventListener("click",async (e)=>{
        e.preventDefault();
       
     if(e.target){
     
        const res = await fetch("/Hombres/Remeras").then(res =>  res.json()).then(async data=>{
           
    
          DatosProdClient(data);
        
            }).catch(err => console.log("error", err))
                    
    }
    
});

HPant.addEventListener("click",async (e)=>{
    e.preventDefault();
   
 if(e.target){
  
    const res = await fetch("/Hombres/Pantalones").then(res =>  res.json()).then(async data=>{
        
       DatosProdClient(data);
        }).catch(err => console.log("error", err))
                
}

});


HAcce.addEventListener("click",async (e)=>{
    e.preventDefault();
   
 if(e.target){
  
    const res = await fetch("/Hombres/Accesorios").then(res =>  res.json()).then(async data=>{
        
       DatosProdClient(data);
        
        }).catch(err => console.log("error", err))
                
}

});
 }

});

const mujer = document.querySelector(".mujer");

mujer.addEventListener("click", (e)=>{
    e.preventDefault();

    if(e.target){
        boxRutas.innerHTML = "";

        const MRem = document.createElement("a");
        const MPant = document.createElement("a");
        const MVest = document.createElement("a");
        const MAcce = document.createElement("a");
        MRem.innerHTML = "Remeras";
        MPant.innerHTML = "Pantalones";
        MVest.innerHTML = "Vestidos";
        MAcce.innerHTML = "Accesorios";

        boxRutas.setAttribute("class", "nav-item ms-lg-5  ms-0 m-2");
        MRem.setAttribute("class", "link-success link-underline-opacity-0 link-underline-opacity-50-hover ms-2");
        MPant.setAttribute("class", "link-primary link-underline-opacity-0 link-underline-opacity-50-hover ms-2");
        MVest.setAttribute("class", "link-danger link-underline-opacity-0 link-underline-opacity-50-hover ms-2");
        MAcce.setAttribute("class", "link-warning link-underline-opacity-0 link-underline-opacity-50-hover ms-2");
        boxRutas.appendChild(MRem);
        boxRutas.appendChild(MPant);
        boxRutas.appendChild(MVest);
        boxRutas.appendChild(MAcce);
        boxNavbarNav.appendChild(boxRutas);
 

MRem.addEventListener("click",async (e)=>{
    e.preventDefault();
   
 if(e.target){
   
    const res = await fetch("/Mujeres/Remeras").then(res =>  res.json()).then(async data=>{
        
      DatosProdClient(data);
    
});
  
 } 

});

MPant.addEventListener("click",async (e)=>{
    e.preventDefault();
   
 if(e.target){
  
    const res = await fetch("/Mujeres/Pantalones").then(res =>  res.json()).then(async data=>{
        
        DatosProdClient(data);
                
    });
}
});


MVest.addEventListener("click",async (e)=>{
    e.preventDefault();
   
 if(e.target){
  
    const res = await fetch("/Mujeres/Vestidos").then(res =>  res.json()).then(async data=>{
        
        DatosProdClient(data)
    })
    }

});

MAcce.addEventListener("click",async (e)=>{
    e.preventDefault();
   
 if(e.target){
  
    const res = await fetch("/Mujeres/Accesorios").then(res =>  res.json()).then(async data=>{
        
        DatosProdClient(data);
     
})
 }
})

}
});

const Nena = document.querySelector(".niña");

Nena.addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target){
    boxRutas.innerHTML = "";

        const NRem = document.createElement("a");
        const NPant = document.createElement("a");
        const NVest = document.createElement("a");
         NRem.innerHTML = "Remeras";
         NPant.innerHTML = "Pantalones";
         NVest.innerHTML = "Vestidos";
         
         boxRutas.setAttribute("class", "nav-item ms-lg-5 ms-0 m-2");
         NRem.setAttribute("class", "link-success link-offset-2  link-underline-opacity-0 link-underline-opacity-50-hover ms-2");
         NPant.setAttribute("class", "link-primary link-offset-2  link-underline-opacity-0 link-underline-opacity-50-hover ms-2");
         NVest.setAttribute("class", "link-danger link-offset-2  link-underline-opacity-0 link-underline-opacity-50-hover ms-2");

         boxRutas.appendChild(NRem);
         boxRutas.appendChild(NPant);
         boxRutas.appendChild(NVest);
         boxNavbarNav.appendChild(boxRutas);


        NRem.addEventListener("click",async (e)=>{
    e.preventDefault();
   
 if(e.target){
  
    const res = await fetch("/Nena/Remeras").then(res =>  res.json()).then(async data=>{
        
        DatosProdClient(data);
       
        }).catch(err => console.log("error", err))
                
    }

});


NPant.addEventListener("click",async (e)=>{
    e.preventDefault();
   
 if(e.target){
  
    const res = await fetch("/Nena/Pantalones").then(res =>  res.json()).then(async data=>{
        
        DatosProdClient(data);
       
        }).catch(err => console.log("error", err))
                
}

});

NVest.addEventListener("click",async (e)=>{
    e.preventDefault();
   
 if(e.target){
  
    const res = await fetch("/Nena/Vestidos").then(res =>  res.json()).then(async data=>{
        
        DatosProdClient(data);
       
        }).catch(err => console.log("error", err))
                
}

});

}
});

const Child = document.querySelector(".niño");

Child.addEventListener("click", (e)=>{
e.preventDefault();

if(e.target){

     boxRutas.innerHTML = "";


     const ChRem =  document.createElement("a");
     const ChPant =  document.createElement("a");
     ChRem.innerHTML = "Remeras";
     ChPant.innerHTML = "Pantalones";
      
     boxRutas.setAttribute("class", "nav-item ms-lg-5 ms-0 m-2");
     ChRem.setAttribute("class","link-success link-offset-2  link-underline-opacity-0 link-underline-opacity-50-hover ms-2");
     ChPant.setAttribute("class", "link-primary link-offset-2  link-underline-opacity-0 link-underline-opacity-50-hover ms-2")

     boxRutas.appendChild(ChRem);
     boxRutas.appendChild(ChPant);
     boxNavbarNav.appendChild(boxRutas);

    ChRem.addEventListener("click",async (e)=>{
        e.preventDefault();
        
 if(e.target){
  
    const res = await fetch("/Nene/Remeras").then(res =>  res.json()).then(async data=>{
        
        DatosProdClient(data)
       
        }).catch(err => console.log("error", err))
                
}


});


ChPant.addEventListener("click",async (e)=>{
    e.preventDefault();
    
    if(e.target){
        
        const res = await fetch("/Nene/Pantalones").then(res =>  res.json()).then(async data=>{
            DatosProdClient(data);
            
        }).catch(err => console.log("error", err))
        
    }
    
});
}

})


const UltimasEntradasH  = async ()=>{

    const titulo = document.createElement("h3");
    titulo.setAttribute("class", "titulo col-12 mb-3 text-bg-success bg-opacity-75 p-3");
    titulo.innerHTML = "Ultimas entradas";

    cajaUltimas.appendChild(titulo);

try {

    let Hombres = ["/Hombres/Remeras", "/Hombres/Pantalones", "/Hombres/Accesorios"];
 let HombresIndex = Math.floor(Math.random()* Hombres.length);
let HombresAleatorio = Hombres[HombresIndex];

    const res = await fetch(HombresAleatorio).then(res => res.json()).then(async data=>{
    let dataRandom = data.at(-1);

    
    
    const boxCard = document.createElement("div");
    const card = document.createElement("div");
    boxCard.setAttribute("class", "boxCard text-center col-md-2 col-sm-6 m-3");
    card.setAttribute("class", "card cardUltimas mx-auto  border-2 col-12 ");
    let Imgtop = document.createElement("img");
    Imgtop.setAttribute("class", "image card-img-top");
    
    
    let bestPrecio = Number(dataRandom.precio);
    let desc = Number(dataRandom.descuento);
       let porcentaje = (bestPrecio * desc) / 100;
       let rebajadoDe = bestPrecio - porcentaje;

    console.log(dataRandom)
    let img1 = dataRandom.imagen.split(",")[0];
    let imgURl = `http://localhost:3000/uploads/${img1}`;
    let imagenResponse = await fetch(imgURl);
    let imgBlob = await imagenResponse.blob();
    let imagenObjectURL = URL.createObjectURL(imgBlob);
    Imgtop.src = imagenObjectURL;
    Imgtop.addEventListener("click", (e)=>{
        e.preventDefault();
        if(e.target){
            return window.location.href = `/visualProducto.html?id=${dataRandom.id}&estaimg=${dataRandom.imagen}&producto=${dataRandom.producto}&precio=${rebajadoDe}&descuento=${dataRandom.descuento}&cuotas=${dataRandom.cuotas}&stock=${dataRandom.stock}`
        }
       }) 

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
   const cardTitulo = document.createElement("h5");
    cardTitulo.setAttribute("class", "card-title tituloUltimas");
    cardTitulo.innerHTML = "HOMBRES";
     
    boxCard.appendChild(card);
    boxCard.appendChild(cardTitulo);
    card.appendChild(Imgtop);
    
    cajaUltimas.appendChild(boxCard);




    })
    
} catch (error) {
    console.log(error)
}


}

const UltimasEntradasM = async ()=>{

    try {
    
        let Mujeres = ["/Mujeres/Remeras", "/Mujeres/Pantalones","/Mujeres/Vestidos" ,"/Mujeres/Accesorios"];
     let MujeresIndex = Math.floor(Math.random()* Mujeres.length);
    let MujeresAleatorio = Mujeres[MujeresIndex];
    
        const res = await fetch(MujeresAleatorio).then(res => res.json()).then(async data=>{
        let dataRandom = data.at(-1);
    
        
        
        const boxCard = document.createElement("div");
        const card = document.createElement("div");
        boxCard.setAttribute("class", "boxCard text-center col-md-2 col-sm-6 m-3");
        card.setAttribute("class", "card cardUltimas mx-auto border-2 col-12 ");
        let Imgtop = document.createElement("img");
        Imgtop.setAttribute("class", "image card-img-top");
        
        
        let bestPrecio = Number(dataRandom.precio);
        let desc = Number(dataRandom.descuento);
           let porcentaje = (bestPrecio * desc) / 100;
           let rebajadoDe = bestPrecio - porcentaje;
    
        console.log(dataRandom)
        let img1 = dataRandom.imagen.split(",")[0];
        let imgURl = `http://localhost:3000/uploads/${img1}`;
        let imagenResponse = await fetch(imgURl);
        let imgBlob = await imagenResponse.blob();
        let imagenObjectURL = URL.createObjectURL(imgBlob);
        Imgtop.src = imagenObjectURL;
        Imgtop.addEventListener("click", (e)=>{
            e.preventDefault();
            if(e.target){
                return window.location.href = `/visualProducto.html?id=${dataRandom.id}&estaimg=${dataRandom.imagen}&producto=${dataRandom.producto}&precio=${rebajadoDe}&descuento=${dataRandom.descuento}&cuotas=${dataRandom.cuotas}&stock=${dataRandom.stock}`
            }
           }) 
    
        const cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");
       const cardTitulo = document.createElement("h5");
        cardTitulo.setAttribute("class", "card-title tituloUltimas");
        cardTitulo.innerHTML = "MUJERES";
         
        boxCard.appendChild(card);
        boxCard.appendChild(cardTitulo);
        card.appendChild(Imgtop);
        
        cajaUltimas.appendChild(boxCard);
    
    
    
    
        })
        
    } catch (error) {
        console.log(error)
    }
    
    
    };


    const UltimasEntradasN = async ()=>{

        try {
        
            let NenasEs = ["/Nena/Remeras", "/Nena/Pantalones", "/Nena/Vestidos", "/Nene/Remeras", "/Nene/Pantalones"];
         let NenasEsIndex = Math.floor(Math.random()* NenasEs.length);
        let NenasEsAleatorio = NenasEs[NenasEsIndex];
        
            const res = await fetch(NenasEsAleatorio).then(res => res.json()).then(async data=>{
            let dataRandom = data.at(-1);
        
            
            
            const boxCard = document.createElement("div");
            const card = document.createElement("div");
            boxCard.setAttribute("class", "boxCard text-center col-md-2 col-sm-6 m-3");
            card.setAttribute("class", "card cardUltimas mx-auto border-2 col-12");
            let Imgtop = document.createElement("img");
            Imgtop.setAttribute("class", "image card-img-top");
            
            
            let bestPrecio = Number(dataRandom.precio);
            let desc = Number(dataRandom.descuento);
               let porcentaje = (bestPrecio * desc) / 100;
               let rebajadoDe = bestPrecio - porcentaje;
        
            console.log(dataRandom)
            let img1 = dataRandom.imagen.split(",")[0];
            let imgURl = `http://localhost:3000/uploads/${img1}`;
            let imagenResponse = await fetch(imgURl);
            let imgBlob = await imagenResponse.blob();
            let imagenObjectURL = URL.createObjectURL(imgBlob);
            Imgtop.src = imagenObjectURL;
            Imgtop.addEventListener("click", (e)=>{
                e.preventDefault();
                if(e.target){
                    return window.location.href = `/visualProducto.html?id=${dataRandom.id}&estaimg=${dataRandom.imagen}&producto=${dataRandom.producto}&precio=${rebajadoDe}&descuento=${dataRandom.descuento}&cuotas=${dataRandom.cuotas}&stock=${dataRandom.stock}`
                }
               }) 
        
            const cardBody = document.createElement("div");
            cardBody.setAttribute("class", "card-body");
           const cardTitulo = document.createElement("h5");
            cardTitulo.setAttribute("class", "card-title tituloUltimas");
            cardTitulo.innerHTML = "NENAS/ES";
             
            boxCard.appendChild(card);
            boxCard.appendChild(cardTitulo);
            card.appendChild(Imgtop);
            
            cajaUltimas.appendChild(boxCard);
        
        
        
        
            })
            
        } catch (error) {
            console.log(error)
        }
        
        
        }

UltimasEntradasH();
UltimasEntradasM();
UltimasEntradasN();