const HRem = document.querySelector(".H-Rem");
const HPant = document.querySelector(".H-Pant");
const caja = document.querySelector(".cont-ul");


    HRem.addEventListener("click",async (e)=>{
        e.preventDefault();
        if(e.target){
            const res = await fetch("/Hombres.html/producto").then(res =>  res.json()).then(data=>{
                
 let datos = JSON.stringify(data);
 let obj = JSON.parse(datos);
 for(let i = 0; i < obj.length; i ++){
    let datObj = obj[i];
   if(datObj.seccion == "Hombre" && datObj.subSeccion == "Remeras"){
    caja.innerHTML = datObj.producto;
   }
  }
            }).catch(err => console.log("error", err))
                    
    }
})

HPant.addEventListener("click", async(e)=>{
    e.preventDefault();
    if(e.target){
        const res = await fetch("/Hombres.html/producto").then(res => res.json()).then(data=> {
           let datos = JSON.stringify(data);
           let obj = JSON.parse(datos);
          for(let i = 0; i < obj.length; i ++){
            let datObj = obj[i];
           if(datObj.seccion == "Hombre" && datObj.subSeccion == "Pantalones"){
            caja.innerHTML = datObj.producto;
           }
          }
        }).catch(err => console.log("Error", err ))
    }
});


