
const btnHomb = document.querySelector(".hombre");
const btnMuj = document.querySelector(".mujer");
const btnNinia = document.querySelector(".niña");
const btnNinio = document.querySelector(".niño");

btnHomb.addEventListener("click" ,() => {
    const desp = document.querySelector(".desp-hom");
   desp.classList.toggle("desplegable_homb");
  
  });


btnMuj.addEventListener("click" , () =>{
  const desp = document.querySelector(".desp-muj");
  desp.classList.toggle("desplegable_muj");
});
 
    
btnNinia.addEventListener("click" , () =>{
  const desp = document.querySelector(".desp-niña");
  desp.classList.toggle("desplegable_ninia");
})

btnNinio.addEventListener("click" , (event) =>{
  const desp = document.querySelector(".desp-niño");
  desp.classList.toggle("desplegable_ninio");
  
    console.log(event.target)
    
    })





