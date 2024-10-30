
const ChRem = document.querySelector(".Ch-Rem"),
ChPant = document.querySelector(".Ch-Pant"),
 caja = document.querySelector(".cont-ul");

const $fragment = document.createDocumentFragment();


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

