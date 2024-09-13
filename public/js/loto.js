
const btnHomb = document.querySelector(".hombre");
const btnMuj = document.querySelector(".mujer");
const btnNinia = document.querySelector(".niña");
const btnNinio = document.querySelector(".niño");

const despH = document.querySelector(".desp-hom");
btnHomb.addEventListener("click" ,(event) => {
    despH.classList.toggle("desplegable_homb");
    document.addEventListener("click", (event)=>{
      if( event.target != btnHomb ){
        despH.setAttribute("class" ,"desp-hom");
      }
    })
    
  });


  const despM = document.querySelector(".desp-muj");
btnMuj.addEventListener("click" , () =>{
  despM.classList.toggle("desplegable_muj");
  document.addEventListener("click", (event)=>{
    if( event.target != btnMuj ){
      despM.setAttribute("class" ,"desp-muj");
    }
  })
});
 
    
const despNi = document.querySelector(".desp-niña");
btnNinia.addEventListener("click" , () =>{
  despNi.classList.toggle("desplegable_ninia");
  document.addEventListener("click", (event)=>{
    if( event.target != btnNinia){
      despNi.setAttribute("class" ,"desp-niña");
    }
  })
})

const despChi = document.querySelector(".desp-niño");
btnNinio.addEventListener("click" , () =>{
  despChi.classList.toggle("desplegable_ninio");
  document.addEventListener("click", (event)=>{
    if( event.target != btnNinio ){
      despChi.setAttribute("class" ,"desp-niño");
    }
  })
 })





