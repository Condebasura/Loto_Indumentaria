
const btnHomb = document.querySelector(".hombre");
const btnMuj = document.querySelector(".mujer");
const btnNinia = document.querySelector(".niña");
const btnNinio = document.querySelector(".niño");

const desp = document.querySelector(".desp-hom");
btnHomb.addEventListener("click" ,(event) => {
    desp.classList.toggle("desplegable_homb");
 console.log(event.target)
  });


btnMuj.addEventListener("click" , () =>{
  const desp = document.querySelector(".desp-muj");
  desp.classList.toggle("desplegable_muj");
});
 
    
btnNinia.addEventListener("click" , () =>{
  const desp = document.querySelector(".desp-niña");
  desp.classList.toggle("desplegable_ninia");
})

btnNinio.addEventListener("click" , () =>{
  const desp = document.querySelector(".desp-niño");
  desp.classList.toggle("desplegable_ninio");
  
    
    
    })





