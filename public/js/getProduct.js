const hombre = document.querySelector(".hombre");
const boxCargas = document.querySelector(".boxCargas");
const boxNavbarNav = document.querySelector(".navbar-nav");
const boxRutas = document.createElement("li");
const searching = document.querySelector(".sech");
const caja = document.createElement("div");
const texto = document.createElement("h3");
const footer = document.querySelector("footer");
const $fragment = document.createDocumentFragment();



const DatosProdClient = async (data) =>{
    let datos = JSON.stringify(data);
    let obj = JSON.parse(datos);
    if (obj.length === 0) {
        caja.innerHTML = "";
      //  footer.classList.remove("position-static");
      // footer.classList.add("position-fixed");
    
        texto.innerHTML = "No hay productos!!";
        $fragment.appendChild(texto);

    } else {
        //footer.classList.remove("position-fixed");
        // footer.classList.add("position-static");
    for(let el of obj){
        
        
        caja.innerHTML = "";
        const box = document.createElement("div");
        let datosProducto = document.createElement("div");
      let img = document.createElement("img");
       let nombreProducto = document.createElement("h3");
       let hr = document.createElement("hr");
       let descuento = document.createElement("p");
       let precio = document.createElement("span");
       let stock = document.createElement("p");
       let cuotas = document.createElement("p");
       let car = document.createElement("a");
       //descuento
       let bestPrecio = Number(el.precio);
       let desc = Number(el.descuento);
       let porcentaje = (bestPrecio * desc) / 100;
       let rebajadoDe = bestPrecio - porcentaje;
       
       if(el.stock >= 5){
           stock.innerHTML = "stock disponible";
       }else if(el.stock > 0 && el.stock <= 4){
           stock.innerHTML = "Ultimos disponible";
       }else if(el.stock === 0){
           stock.innerHTML = "sin stock";
       }
       caja.setAttribute("class", "cont-ul");
       box.setAttribute("class", "box_pilcha");
       img.setAttribute("class", "image");
       nombreProducto.setAttribute("class", "name");
       datosProducto.setAttribute("class","datos");
       descuento.setAttribute("class", "precio");
       car.setAttribute("class", "fas fa-shopping-cart");
       let img1 = el.imagen.split(",")[0];
       let imgURl = `http://localhost:3000/uploads/${img1}`;
       let imagenResponse = await fetch(imgURl);
       let imgBlob = await imagenResponse.blob();
       let imagenObjectURL = URL.createObjectURL(imgBlob);
       img.src = imagenObjectURL;
       descuento.innerHTML = `Antes: $ ${el.precio}`
       precio.innerHTML = `$ ${rebajadoDe}    ${el.descuento}  %OFF`;
       nombreProducto.innerHTML = el.producto;
       cuotas.innerHTML = `${el.cuotas} cuotas sin interes`;
      img.addEventListener("click", (e)=>{
       e.preventDefault();
       if(e.target){
           return window.location.href = `/visualProducto.html?id=${el.id}&estaimg=${el.imagen}&producto=${el.producto}&precio=${rebajadoDe}&descuento=${el.descuento}&cuotas=${el.cuotas}&stock=${el.stock}`
       }
      })
   
       $fragment.appendChild(box);
       box.appendChild(img);
       box.appendChild(datosProducto);
       datosProducto.appendChild(hr);
       datosProducto.appendChild(nombreProducto);
       datosProducto.appendChild(descuento);
       datosProducto.appendChild(precio);
       datosProducto.appendChild(cuotas);
       datosProducto.appendChild(stock);
       datosProducto.appendChild(car);
   
   
   }
}
   boxCargas.appendChild(caja);
   caja.appendChild($fragment);
};



hombre.addEventListener("click", async(e)=>{
 e.preventDefault();
 if(e.target){
boxRutas.innerHTML = "";
caja.innerHTML = "";

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
        caja.innerHTML = "";
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
    caja.innerHTML = "";
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
     caja.innerHTML = "";

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



