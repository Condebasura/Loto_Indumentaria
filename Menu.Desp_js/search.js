let datos = document.querySelectorAll(".name");
 let search = document.querySelector(".input");
let lista = document.querySelector(".result");


search.addEventListener("input", () => {
   for(let texto of datos){
      let nombres = texto.textContent;
      let dif = /\w.+/g;
      if(dif.test(nombres)){
       console.log(nombres)
      }
   }

})

