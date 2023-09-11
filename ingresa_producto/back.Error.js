const volver = document.querySelector("[data-volver]");
volver.addEventListener("click", (e)=>{
/*if(e.target){
    let newWindow = open("", "", 
    "width=10,height=10,left=2000,top=2000");

     newWindow.onload =  newWindow.close();
    
     
     return history.go(-1);
}*/
console.log(e.target)
return window.location.href = document.referrer;

});