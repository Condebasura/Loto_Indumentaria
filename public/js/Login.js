const Login = document.querySelector(".Login");
const Create =  document.querySelector(".Create");
const modal = document.getElementById("modal");

Login.addEventListener("click", (e)=>{
    e.preventDefault();

    if(e.target){
         modal.innerHTML = "";
         const LabelEmail = document.createElement("label");
         const InputEmail = document.createElement("input");
         
        modal.showModal()
    }
})