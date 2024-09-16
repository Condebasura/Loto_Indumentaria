const HRem = document.querySelector(".H-Rem");

const caja = document.querySelector(".cont-ul");


    HRem.addEventListener("click",async (e)=>{
        e.preventDefault();
        if(e.target){
            const res = await fetch("/Hombres.html/H-Rem").then(res =>  res.json()).then(data=>{
caja.innerHTML = JSON.stringify(data);
            }).catch(err => console.log("error", err))
                
            

        

       
    }
})



