
const search = document.querySelector(".input");
const boxCargas = document.querySelector(".boxCargas");
const template = document.getElementById("result").content;
const Prod = document.querySelector(".product");
const contUltimas = document.querySelector(".contUltimas");
let textH1 = document.createElement("h1");
let modalcontainer = document.getElementById("modalContainer");
const fragment = document.createDocumentFragment();

const verProd = async (el ,bestPrecio,rebajadoDe, imagenObjectURL , interes) =>{

          
       
   boxCargas.innerHTML = "";
   contUltimas.classList.add("d-none");
   Prod.classList.add("product", "d-none");
 
   
      
  let lasImgs = el.imagen.split(",");
 
 const loadImage = async (imgName) => {
 let imgURL = `http://localhost:3000/uploads/${imgName}`;
 let response = await fetch(imgURL);
 let blob = await response.blob();
 return URL.createObjectURL(blob);
 };
 
 
 let imagenes = await Promise.all(lasImgs.slice(0, 5).map(loadImage));
  
 
    
 
 
 
  const boxImg = document.createElement("div");
  boxImg.setAttribute("class", "content  col-lg-7 ms-5 mt-5 p-2 me-2 bg-light text-dark border");
  boxImg.innerHTML = `<div class="img-prod conteiner-fluid">
  <div class="contenedor_img row">
  <figure class="img_cont col-md-2 col ms-0">
  <div class="box_img img-fluid">
                   <img class="MinImg border-1  " src="${imagenes[0]}" alt="">
               </div>
               <div class="box_img img-fluid">
                   <img class="MinImg1 border-1 " src="${imagenes[1]}" alt="">
               </div>
               <div class="box_img img-fluid">
                   <img class="MinImg2 border-1 " src="${imagenes[2]}" alt="">
               </div>
               <div class="box_img img-fluid">
                   <img class="MinImg3 border-1 " src="${imagenes[3]}" alt="">
               </div>
                    <div class="box_img img-fluid">
                   <img class="MinImg3 border-1 " src="${imagenes[4]}" alt="">
               </div>
           </figure>
           <figure class="cont_zoom col-md-10 col">
               <div class="box_img__zoom">
                   <img class="image_zoom img-fluid pt-3" src="" alt="">
 
               </div>
           </figure>
           </div>
           </div> `;
 
           let datProd = document.createElement("div");
           datProd.setAttribute("class", "datos col-lg-3 mt-5 p-2 ms-2 bg-light text-dark border");
           datProd.innerHTML = ` <div class="Stock_nombre">
           <span class=" con_Stock"></span>
           
           <h1 class="name">${el.producto}</h1>
       </div>
       <div class="precio_cuotas">
           <span class="bestprecio">$ ${rebajadoDe} </span>
           <div class="cuo-in">
               <span class="cuotas">${el.cuotas} </span>
               <small class="int">cuotas sin interes de $ </small>
           </div>
           <div class="cards">
               <img class="card" decoding="async"
                   src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg"
                   alt="visa">
               <img class="card" decoding="async"
                   src="https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg"
                   alt="American Express">
               <img class="card" decoding="async"
                   src="https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg"
                   alt="Naranja">
               <img class="card" decoding="async"
                   src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg"
                   alt="Mastercard">
           </div>
           <span class="cond_Pago"><a class="med_pago" href=""> ver mas medios
                   de pago </a></span>
       </div>
       <div class="box_Envios">
           <span class="envio"><i class="fa-solid fa-truck-fast"></i> Envios a todo el pais</span>
           <span class="form_Env">Ver formas de envio</span>
           <span class="polit">Politicas de devolución</span>
       </div>
       <div class="comp_add">
           <select  class="cantidad">
               
 
           </select>
           
               
 
                   <button type="button" class="comprar btn btn-success"><span>Comprar </span><i class="fa-solid fa-bag-shopping"></i></button>
               
               <button type="button" class="add btn btn-outline-primary"><span>Agregar </span><i class="fa-solid fa-cart-shopping"></i></button>
           
       </div>
   </div>
 
 `
           boxCargas.style.backgroundColor = "rgb(223, 226, 228)";
            let contVisuProd = document.createElement("div")
            contVisuProd.setAttribute("class", "contVisuProd z-n1 row mt-5  gx-5")
           contVisuProd.appendChild(boxImg);
           contVisuProd.appendChild(datProd);
           boxCargas.appendChild(Prod);
           boxCargas.appendChild(contVisuProd);
 
          
           const datosProd = document.querySelector(".img-prod");
           let miniImg = document.querySelector(".img_cont");
           let imgZoom = document.querySelector(".image_zoom");
           let foto = document.querySelector(".MinImg");
           let ProdStock = document.querySelector(".con_Stock");
            interes = document.querySelector(".int");
           let Cant = document.querySelector(".cantidad");
           const btn = document.querySelector(".comprar");
 
             
 
           
           
           imgZoom.src = imagenObjectURL;
           console.log(miniImg);
 
       miniImg.addEventListener("mousedown", (e)=>{
           foto = e.target;
            
           let imgSrc = foto.getAttribute("src");
           imgZoom.setAttribute("src", imgSrc);
 
           document.addEventListener("mousedown", (e) =>{
               if(e.target != foto || imgZoom.getAttribute("src") == null){
                   imgZoom.setAttribute("src", imgSrc)
               }
           })
       });
 
 
       if (el.stock >= 5) {
           ProdStock.innerHTML = "stock disponible";
         } else if (el.stock > 0 && el.stock <= 4) {
           ProdStock.classList.remove("con_Stock");
           ProdStock.classList.add("sin_Stock");
           ProdStock.innerHTML = "Ultimos disponible";
         } else if (el.stock == 0) {
           ProdStock.classList.remove("con_Stock");
           ProdStock.classList.add("sin_Stock");
           ProdStock.innerHTML = "sin stock";
         };
          
         let cuo = el.cuotas;
         let cuoNum = Number(cuo);
 let preNum = Number(rebajadoDe);
 if(cuoNum === 1){
   interes.textContent = `cuota sin interes de ${rebajadoDe.toFixed(2)}`;
 }else{
 
   interes.value = preNum / cuoNum;
   interes.textContent = interes.textContent + interes.value.toFixed(2);
 }
 
 for (let i = 0; i < el.stock; i++) {
   let valor = document.createElement("option");
   valor.innerHTML = `${i + 1}/u de ${el.stock} disp`
   Cant.appendChild(valor);
 }
 

let link = document.querySelector(".med_pago");

 link.addEventListener("click", (e)=>{
  e.preventDefault();
  if(e.target){
 modalcontainer.innerHTML = "";

  const urls = ["https://http2.mlstatic.com/storage/logos-api-admin/fe827370-f3be-11eb-8e0d-6f4af49bf82e-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/27764c60-ed7a-11ec-87df-cb682e3b026f-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/ba8b96a0-cd41-11ea-a668-0563a89e00fd-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/c9f71470-6f07-11ec-9b23-071a218bbe35-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg"];

   const modtabi = document.createElement("div");
   const modDialog = document.createElement("div");
   const modContent = document.createElement("div")
   const modHeader = document.createElement("div");
   let titulo = document.createElement("h5");
   const btnClose = document.createElement("button");
   const modBody = document.createElement("div");
   const contCards = document.createElement("div");
  
   modtabi.setAttribute("class","modal");
   modtabi.setAttribute("tabindex","-1");
   modDialog.setAttribute("class","modal-dialog");
   modContent.setAttribute("class","modal-content");
   modHeader.setAttribute("class","modal-header text-bg-primary");
   titulo.setAttribute("class","modal-title");
   btnClose.setAttribute("class","btn-close");
   btnClose.setAttribute("type","button");
   btnClose.setAttribute("data-bs-dismiss","modal");
   btnClose.setAttribute("aria-label","Close");
   contCards.setAttribute("class", "row p-5 text-center justify-content-center");
  titulo.innerHTML = "Medios de pago";
   modtabi.appendChild(modDialog);
   modDialog.appendChild(modContent);
   modContent.appendChild(modHeader);
   modContent.appendChild(modBody);

   modHeader.appendChild(titulo);
   modHeader.appendChild(btnClose);

   modBody.appendChild(contCards);
   urls.forEach(url => {
     const divCards = document.createElement("div");
     divCards.setAttribute("class", "col-lg-4 col p-3")
     let imgCard = document.createElement("img");
     imgCard.src = url;
     contCards.appendChild(divCards);
     divCards.appendChild(imgCard);
    })
    
 modalcontainer.innerHTML = "";
modalcontainer.appendChild(modtabi);

modtabi.removeAttribute("inert");
modtabi.removeAttribute("aria-hidden");
    const bootstrapModal = new bootstrap.Modal(modtabi);
            bootstrapModal.show();
       
    modtabi.addEventListener("hidden.bs.modal", ()=>{
      modalcontainer.innerHTML = "";
      modtabi.setAttribute("aria-hidden", "true");
      modtabi.setAttribute("inert", "");
    })

  }
});

 const pagar = async (bestPrecio) => {
   const precio = document.querySelector(".bestprecio");
   const precnmb = precio.innerHTML;
   const Elnum = precnmb.slice(1, 8);
   const EnNumeros = Number(Elnum);


 
 
 
 
   
 
   if (typeof MercadoPago === 'undefined') {
     console.error('El SDK de MercadoPago no está definido. Verifica que se haya cargado correctamente.');
     return;
   }
   const mp = new MercadoPago('TEST-cda8ecd5-5002-43a8-a7d3-172588165057', {
     locale: 'es-AR'
   });
   const bricksBuilder = mp.bricks();
   if (window.paymentBrickController) {
     // Opcional: elimina el Brick previo para evitar duplicados
     window.paymentBrickController.unmount();
   }
   const renderPaymentBrick = async (bricksBuilder) => {
     const settings = {
       initialization: {
         /*
           "amount" es el monto total a pagar por todos los medios de pago con excepción de la Cuenta de Mercado Pago y Cuotas sin tarjeta de crédito, las cuales tienen su valor de procesamiento determinado en el backend a través del "preferenceId"
         */
         amount: EnNumeros,
         description: el.producto,
         preferenceId: "15967463",
         payer: {
           firstName: "",
             lastName: "",
           email: "",
           
           
         },
         
       },
       customization: {
         visual: {
           style: {
             theme: "default",
           },
         },
         paymentMethods: {
           creditCard: "all",
           debitCard: "all",
           ticket: "all",
           bankTransfer: "all",
           atm: "all",
           onboarding_credits: "all",
           wallet_purchase: "all",
           maxInstallments: 12, 
         },
       },
       callbacks: {
         onReady: () => {
   
         },
         onSubmit: ({ selectedPaymentMethod, formData }) => {
           // callback llamado al hacer clic en el botón de envío de datos
           return new Promise(  (resolve, reject) => {
             fetch("/process_payment", {
               method: "POST",
               headers: {
                 "Content-Type": "application/json",
               },
               body: JSON.stringify(formData),
             })
 
               .then((response) =>  response.json())
               .then((response) => {
                 console.log("despues del post , dentro de then, despues de response");
 
                 console.log("El response",response);
                   const url = window.location.href;
                 resolve(response)
 
                 
                
                 const mp = new MercadoPago('TEST-cda8ecd5-5002-43a8-a7d3-172588165057', { // Add your public key credential
                   locale: 'es-AR'
                 })
               
                 const bricksStatus = mp.bricks();
                 const renderStatusScreenBrick = async (bricksStatus) => {
                   
 
                     const settings = {
                       initialization: {
                       paymentId:  response, // Payment identifier, from which the status will be checked
                     },
                     customization: {
                       visual: {
                         hideStatusDetails: true,
                         hideTransactionDate: true,
                         style: {
                           theme: 'default', // 'default' | 'dark' | 'bootstrap' | 'flat'
                         }
                       },
                       backUrls: {
                         'error': `${url}`,
                         'return': `${url}`,
                       }
                     },
                     callbacks: {
                       onReady: () => {
 
                       },
                       onError: (error) => {
                         // Callback called for all Brick error cases
                       },
                     },
                   };
 
                   window.statusScreenBrickController = await bricksStatus.create('statusScreen', 'statusScreenBrick_container', settings);
                 };
                 
                 
                 const statusScreen = document.createElement("div");
                 statusScreen.setAttribute("id", "statusScreenBrick_container");
                 
                 
                 
                 boxCargas.removeChild(PayBrinck);
                 renderStatusScreenBrick(bricksStatus);
                 boxCargas.appendChild(statusScreen);
                 
               })
             
               .catch((error) => {
                 // manejar la respuesta de error al intentar crear el pago
                 reject(error);
               });
           });
         },
         onError: (error) => {
           // callback llamado para todos los casos de error de Brick
           console.error(error);
         },
       },
     };
 
     window.paymentBrickController = await bricksBuilder.create(
       "payment",
       "paymentBrick_container",
       settings,
 
     );
   };
   const PayBrinck = document.createElement("div");
   PayBrinck.setAttribute("id", "paymentBrick_container");
   PayBrinck.setAttribute("class","m-5 p-5 gy-4 border")
   renderPaymentBrick(bricksBuilder);
   boxCargas.innerHTML = "";
   boxCargas.appendChild(PayBrinck)
 }
 
 btn.addEventListener("click", pagar);
  
 }


search.addEventListener("search", async (e) => {
   e.preventDefault()
   if (e.target) {
         
      const valor = search.value;
      
      
      const response = await fetch("/search", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({valor})
      });
      const result = await response.json();
    
      search.addEventListener("focus", ()=>{
         if(search.value.trim() === ""){
            Prod.classList.add("product", "d-none");
            Prod.classList.remove("product_search","row" , "gy-sm-3" , "gx-sm-5" ,"gx-0", "gy-0" ,  "mt-5", "text-center", "justify-content-center","fixed-top", "z-3", "border","border-2" ,"text-bg-success", "bg-opacity-75", "p-5");
         }
      });

      search.addEventListener("input", ()=>{
         if(search.value.trim() === ""){
            Prod.classList.add("product", "d-none");
      Prod.classList.remove("product_search","row" , "gy-sm-3" , "gx-sm-5" ,"gx-0", "gy-0" ,  "mt-5", "text-center", "justify-content-center","fixed-top", "z-3", "border","border-2" ,"text-bg-success", "bg-opacity-75", "p-5");
         }
      });
      
      if( response.status === 400 ){
               
             
         Prod.classList.add("product", "d-none");
         Prod.classList.remove("product_search","row" , "gy-sm-3" , "gx-sm-5" ,"gx-0", "gy-0" ,  "mt-5", "text-center", "justify-content-center","fixed-top", "z-3", "border","border-2" ,"text-bg-success", "bg-opacity-75", "p-5");
              
            
            
         }
         
         else if( response.status === 404 ){  

            
            Prod.classList.remove("product", "d-none");
            Prod.classList.add("product_search","row" , "gy-sm-3" , "gx-sm-5" ,"gx-0", "gy-0" ,  "mt-5", "text-center", "justify-content-center","fixed-top", "z-3", "border","border-2" ,"text-bg-success", "bg-opacity-75", "p-5");
            
            Prod.innerHTML = "";
              textH1.innerHTML = result.mensaje;
              Prod.appendChild(textH1);
            
         }else if(response.status === 200){
            
          
            textH1.innerHTML = "Resultado de la Busqueda";
      Prod.classList.remove("product", "d-none");
      Prod.classList.add("product_search","row" , "gy-sm-3" , "gx-sm-5" ,"gx-0", "gy-0" ,  "mt-5", "text-center", "justify-content-center","fixed-top", "z-3", "border","border-2" ,"text-bg-success", "bg-opacity-75", "p-5", "overflow-y-auto");
       
      for (let el of result) {
          
          
         let bestPrecio = Number(el.precio);
         let desc = Number(el.descuento);
         let porcentaje = (bestPrecio * desc) / 100;
         let rebajadoDe = bestPrecio - porcentaje;

         let img1 = el.imagen.split(",")[0];
         let imgURl = `http://localhost:3000/uploads/${img1}`;
         let imagenResponse = await fetch(imgURl);
         let imgBlob = await imagenResponse.blob();
         let imagenObjectURL = URL.createObjectURL(imgBlob);
         const valorNormal = valor.toLowerCase();
         
         
         if (el.producto.toLowerCase().includes(valorNormal)) {
            
            template.querySelector("h3").textContent = el.producto;
            template.querySelector("h3").style.fontSize = "16px";
            template.querySelector("h3").setAttribute("class", "card-title text-truncate");
            template.querySelector("img").src = imagenObjectURL;
            template.querySelector("img").setAttribute("class", "img_search card-img-top");
            template.querySelector("button").textContent = "Ver";
            template.querySelector("button").setAttribute("class", "ver_prod card-text btn btn-outline-success py-0");
            template.querySelector("button").setAttribute("type", "button");
            
            
            
            let clone = document.importNode(template, true);
            let button = clone.querySelector("button");

            button.addEventListener("click", (e)=>{
               e.preventDefault();
               if(e.target){

                  return   verProd(el, bestPrecio, rebajadoDe, imagenObjectURL);
                  
               }
            })
            fragment.appendChild(clone);
         }
         
         
         
         
         
         
         
      }
      
   }
   
   Prod.innerHTML = "";
   Prod.appendChild(textH1);
   Prod.appendChild(fragment);
}
      
   

});




window.addEventListener("keyup", e =>{
if(e.key.trim() === "Escape" || search.value.trim() === "") {
   
   Prod.classList.add("product", "d-none");
   Prod.classList.remove("product_search","row" , "gy-sm-3" , "gx-sm-5" ,"gx-0", "gy-0" ,  "mt-5", "text-center", "justify-content-center","fixed-top", "z-3", "border","border-2" ,"text-bg-success", "bg-opacity-75", "p-5");
   
   
   
}
})

     



   


    










