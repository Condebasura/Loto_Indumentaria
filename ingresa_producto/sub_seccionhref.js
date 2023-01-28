
   let  sub_seccion = document.querySelector("[data-sub_seccion]").options[document.querySelector("[data-sub_seccion]").selectedIndex];
    let subHombres = document.querySelectorAll(".homb");
switch(sub_seccion.value){
    case "Remeras":
        sub_seccion = subHombres[0];
        
        break;
        
        case "Pantalones":
            sub_seccion = subHombres[1];
            
            break;
            
            case "Accesorios":
                sub_seccion = subHombres[2];
                
                break;
                
            }
           
     let  subHref = sub_seccion.getAttribute("href");
        
        




export {subHref};
export{sub_seccion};