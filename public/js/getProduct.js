const hombre = document.querySelector(".hombre");
const boxCargas = document.querySelector(".boxCargas");
const boxNavbarNav = document.querySelector(".navbar-nav");
const boxRutas = document.createElement("li");
const searching = document.querySelector(".sech");
const caja = document.createElement("div");
const texto = document.createElement("h3");
const footer = document.querySelector("footer");

const spiner = document.createElement("div");
const span = document.createElement("span");
const $fragment = document.createDocumentFragment();



const DatosProdClient = async (data) =>{
    let datos = JSON.stringify(data);
    let obj = JSON.parse(datos);
    if (obj.length === 0) {
        boxCargas.innerHTML = "";
        caja.innerHTML = "";
    
          

        texto.innerHTML = "No hay productos!!";
        $fragment.appendChild(texto);

    } else {
        
      for(let el of obj){
          
          boxCargas.innerHTML = "";
          
          caja.innerHTML = "";
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
       let car = document.createElement("a");
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
       caja.setAttribute("class", "cont-ul row gy-sm-3  gx-sm-5 gx-0 gy-0  ps-0 mt-5");
       box.setAttribute("class", "box_pilcha card col-sm-6 col m-3");
       img.setAttribute("class", "image card-img-top");
        
        
       nombreProducto.setAttribute("class", "name card-title");
       cardUl.setAttribute("class", "list-group list-group-flush m-0 p-0 text-start text-md-center")
       datosProducto.setAttribute("class","datos card-body");
       descuento.setAttribute("class", "precio list-group-item link-danger");
       precio.setAttribute("class", "list-group-item ");
       cuotas.setAttribute("class", "list-group-item");
       stock.setAttribute("class", "list-group-item")
       car.setAttribute("class", "fas fa-shopping-cart mt-2");
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
      img.addEventListener("click", (e)=>{
       e.preventDefault();
       if(e.target){
           return window.location.href = `/visualProducto.html?id=${el.id}&estaimg=${el.imagen}&producto=${el.producto}&precio=${rebajadoDe}&descuento=${el.descuento}&cuotas=${el.cuotas}&stock=${el.stock}`
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
       cardFotter.appendChild(car);
   
   
   }
}

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
           
            console.log(data)
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



