

const bak = document.querySelector(".fa-circle-arrow-left");

/*back.addEventListener("click", (e)=>{
  if(e.target){ 
    
    let newWindow = open("", "", "width=30,height=30,left=1000,top=-2000");
    
    newWindow.onload =  newWindow.close();
    
    
    return history.go(-1);
  }
});*/

bak.addEventListener("click", ()=>{
  return window.location.href = document.referrer;
})




