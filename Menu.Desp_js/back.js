

const back = document.querySelector(".fa-circle-arrow-left");


back.addEventListener("click", (e)=>{
  if(e.target){ 
    
     return window.open(null ,history.go(-1), '_self');}

});

