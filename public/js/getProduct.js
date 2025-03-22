const hombre = document.querySelector(".hombre");
const boxCargas = document.querySelector(".boxCargas");
const contUltimas = document.querySelector(".contUltimas");
const boxNavbarNav = document.querySelector(".navbar-nav");
const boxRutas = document.createElement("li");
const searching = document.querySelector(".sech");
const prodSearch = document.querySelector(".product");
const caja = document.createElement("div");
const texto = document.createElement("h3");
const footer = document.querySelector("footer");
const cajaUltimas = document.querySelector(".cajaUltimas");
const spiner = document.createElement("div");
const span = document.createElement("span");
let modalcontainer = document.getElementById("modalContainer");
const $fragment = document.createDocumentFragment();


const verProd = async (el ,bestPrecio,rebajadoDe, imagenObjectURL , interes) =>{

          
       
  boxCargas.innerHTML = "";
  contUltimas.classList.add("d-none");
  

  
     
 let lasImgs = el.imagen.split(",");

const loadImage = async (imgName) => {
let imgURL = `https://loto.hopto.org/uploads/${imgName}`;
let response = await fetch(imgURL);
let blob = await response.blob();
return URL.createObjectURL(blob);
};


let imagenes = await Promise.all(lasImgs.slice(0, 5).map(loadImage));
 

   



 const boxImg = document.createElement("div");
 boxImg.setAttribute("class", "content  col-lg-7 ms-0 ms-lg-5 mt-5 p-2 me-2 bg-light text-dark border");
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
          <figure class="cont_zoom mt-5 mt-md-0 col-md-10 col">
              <div class="box_img__zoom">
                  <img class="image_zoom img-fluid pt-3" src="" alt="">

              </div>
          </figure>
          </div>
          </div> `;

          let datProd = document.createElement("div");
          datProd.setAttribute("class", "datos col-lg-3 mt-5 p-2 ms-0 ms-lg-2 bg-light text-dark text-center text-lg-start justify-content-center justify-content-lg-start  border");
          datProd.innerHTML = ` <div class="Stock_nombre ">
          <span class=" con_Stock text-center text-lg-start justify-content-center justify-content-lg-start "></span>
          
          <h1 class="name">${el.producto}</h1>
      </div>
      <div class="precio_cuotas">
          <span class="bestprecio">$ ${rebajadoDe} </span>
          <div class="cuo-in">
              <span class="cuotas">${el.cuotas} </span>
              <small class="int">cuotas sin interes de $ </small>
          </div>
         <div class="cards  text-center text-lg-start justify-content-center justify-content-lg-start">
               <img class="card m-2 p-1" decoding="async"
                   src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg"
                   alt="visa">
               <img class="card m-2 p-1" decoding="async"
                   src="https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg"
                   alt="American Express">
               <img class="card m-2 p-1" decoding="async"
                   src="https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg"
                   alt="Naranja">
               <img class="card m-2 p-1" decoding="async"
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
           contVisuProd.setAttribute("class", "contVisuProd z-n1 row mt-5 m-1 gx-5")
          contVisuProd.appendChild(boxImg);
          contVisuProd.appendChild(datProd);
          boxCargas.appendChild(prodSearch);
          boxCargas.appendChild(contVisuProd);

         
          const datosProd = document.querySelector(".img-prod");
          let miniImg = document.querySelector(".img_cont");
          let imgZoom = document.querySelector(".image_zoom");
          let foto = document.querySelector(".MinImg");
          let ProdStock = document.querySelector(".con_Stock");
           interes = document.querySelector(".int");
          let Cant = document.querySelector(".cantidad");
          let btn = document.querySelector(".comprar");

            

          
          
          imgZoom.src = imagenObjectURL;
          console.log(miniImg);

      miniImg.addEventListener("mousedown", (e)=>{
          foto = e.target;
           
          let imgSrc = foto.getAttribute("src");
          imgZoom.setAttribute("src", imgSrc);

          document.addEventListener("mousedown", (e) =>{
              if(e.target != foto || imgZoom.getAttribute("src") == "null"){
                  imgZoom.setAttribute("src", imagenObjectURL)
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
          btn.setAttribute("disabled", "");
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

for (let i = 1; i < el.stock; i++) {
  let valor = document.createElement("option");
  valor.innerHTML = `${i} de ${el.stock} disp`;
  Cant.appendChild(valor);
 
}



let CantSelec = 1;
const CantSelecEnNumeros = ()=>{
  Cant.addEventListener("change", (e)=>{
    
        let cant = e.target.value;
        let PrimerosCaracteres = cant.substring(0,2);
        CantSelec = Number(PrimerosCaracteres);
  
  })
};
CantSelecEnNumeros();


let link = document.querySelector(".med_pago");

link.addEventListener("click", (e)=>{
  e.preventDefault();
  if(e.target){
 modalcontainer.innerHTML = "";

  const urls = ["https://http2.mlstatic.com/storage/logos-api-admin/fe827370-f3be-11eb-8e0d-6f4af49bf82e-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/27764c60-ed7a-11ec-87df-cb682e3b026f-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/ba8b96a0-cd41-11ea-a668-0563a89e00fd-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/c9f71470-6f07-11ec-9b23-071a218bbe35-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-xl.svg"];

 

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
   contCards.setAttribute("class", "row p-5 text-center justify-content-center gx-2 gy-2");
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
     divCards.setAttribute("class", "col-3 p-3 border m-2 ")
     let imgCard = document.createElement("img");
     imgCard.setAttribute("class", "img-fluid");
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

const funcModal = (textBody, titulo)=>{
  modalcontainer.innerHTML = "";
  
   const modtabi = document.createElement("div");
   const modDialog = document.createElement("div");
   const modContent = document.createElement("div")
   const modHeader = document.createElement("div");
  
   const btnClose = document.createElement("button");
   const modBody = document.createElement("div");
   
  
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
   textBody.setAttribute("class", "row p-5 justify-content-center");
  
   modtabi.appendChild(modDialog);
   modDialog.appendChild(modContent);
   modContent.appendChild(modHeader);
   modContent.appendChild(modBody);

   modHeader.appendChild(titulo);
   modHeader.appendChild(btnClose);

   modBody.appendChild(textBody);
 
    
 modalcontainer.innerHTML = "";
modalcontainer.appendChild(modtabi);

modtabi.removeAttribute("inert");
modtabi.removeAttribute("aria-hidden");
    const bootstrapModal = new bootstrap.Modal(modtabi);
            bootstrapModal.show();
       
    modtabi.addEventListener("hidden.bs.modal", ()=>{
      modalcontainer.innerHTML = "";
      modtabi.setAttribute("aria-hidden", "true");
      modtabi.setAttribute("inert", "")
    })
  }
  
  let formEnv = document.querySelector(".form_Env");
  let polit = document.querySelector(".polit");

formEnv.addEventListener("click",(e)=>{
  e.preventDefault();
  if(e.target){
    let titulo = document.createElement("h4");
    titulo.innerHTML = "Formas de envio";
    let textBody = document.createElement("div");
    textBody.innerHTML ="<p class='mb-4'><strong> realizamos envíos a todo el país con las siguientes opciones:</strong></p><br><p><i class='fa-solid fa-truck link-success'></i> <strong>Envío Estándar</strong> (3 a 7 días hábiles) - A través de correo postal. El costo varía según la ubicación.</p><br><p><i class='fa-solid fa-truck-fast link-danger'></i> <strong> Envío Rápido</strong> (24 a 48 horas hábiles) - Disponible en ciertas zonas. Consulta disponibilidad antes de comprar.</p><br><p><i class='fa-solid fa-cube link-warning'></i> <strong> Envíos Gratis</strong> En compras mayores a $150000 ofrecemos envío gratuito.</p>"
  
    funcModal(textBody, titulo);
  
  }
});



polit.addEventListener("click",(e)=>{
  e.preventDefault();
  if(e.target){
    let titulo = document.createElement("h4");
    titulo.innerHTML = "Politicas de Devolución";
    let textBody = document.createElement("div");
    textBody.innerHTML ="<p>Si no estás satisfecho con tu compra, puedes solicitar un cambio o devolución dentro de los 7 días posteriores a la recepción del pedido</p><br><p>•La prenda debe estar en su estado original, sin uso y con etiquetas.</p><br><p>•No aceptamos devoluciones en productos en oferta o personalizados.</p><br><p>•El costo del envío en devoluciones es a cargo del cliente, salvo por productos con defectos de fábrica.</p><br><p>•Para gestionar una devolución, contáctanos a través de nuestro email o WhatsApp.</p>"
  
    funcModal(textBody, titulo);
  
  }
})
const pagar = async (bestPrecio) => {
  const precio = document.querySelector(".bestprecio");
  const precnmb = precio.innerHTML;
  const Elnum = precnmb.slice(1, 8);
  let EnNumeros = Number(Elnum);
  
  let total =  CantSelec * EnNumeros;
  

  const modal = document.getElementById("modal");

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
        amount: total,
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
            theme: "bootstrap",
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
                          theme: 'bootstrap', // 'default' | 'dark' | 'bootstrap' | 'flat'
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
                console.log(statusScreen)
                statusScreen.setAttribute("class", "d-flex text-center justify-content-center m-5")
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


const DatosProdClient = async (data) =>{
    let datos = JSON.stringify(data);
    let obj = JSON.parse(datos);
    if (obj.length === 0) {
        boxCargas.innerHTML = "";
        caja.innerHTML = "";
        contUltimas.innerHTML = "";
       // prodSearch.classList.remove("product_search")
        prodSearch.classList.add("product", "d-none");
        
    
          

        texto.innerHTML = "No hay productos!!";
        $fragment.appendChild(texto);

    } else {
        
      for(let el of obj){
          
          boxCargas.innerHTML = "";
        contUltimas.innerHTML = "";
          caja.innerHTML = "";
          
     
           //prodSearch.classList.add("product_search");
         prodSearch.classList.add("product", "d-none");

          const box = document.createElement("div");
        let datosProducto = document.createElement("div");
      let img = document.createElement("img");
       let nombreProducto = document.createElement("h5");
       let hr = document.createElement("hr");
       const cardUl = document.createElement("ul");
       let descuento = document.createElement("li");
       let precio = document.createElement("li");
       let stock = document.createElement("li");
       let cuotas = document.createElement("li");
       let liCompFav = document.createElement("li");
       let car = document.createElement("i");
       let fav = document.createElement("i");
       const  cardFotter = document.createElement("div");
       let bestPrecio = Number(el.precio);
       let desc = Number(el.descuento);
       let porcentaje = (bestPrecio * desc) / 100;
       let rebajadoDe = bestPrecio - porcentaje;
       
       if (el.stock >= 5) {
        stock.innerHTML = `<small class="link-success"> stock disponible </small>`;
    } else if (el.stock > 0 && el.stock <= 4) {
        stock.innerHTML = ` <small class="link-danger"> Ultimos disponible </small>`;
    } else if (el.stock === 0) {
        stock.innerHTML = `<small class="link-secondary"> sin stock </small>`;
    }  
       caja.setAttribute("class", "cont-ul z-n1 justify-content-center text-center row gy-sm-3  gx-sm-5 gx-0 gy-0  ps-0 mt-5");
       box.setAttribute("class", "box_pilcha card col-sm-6 col m-3");
       img.setAttribute("class", "image card-img-top");
        
        
       nombreProducto.setAttribute("class", "name card-title text-truncate");
       cardUl.setAttribute("class", "list-group list-group-flush m-0 p-0 text-start text-md-center")
       datosProducto.setAttribute("class","datos card-body");
       descuento.setAttribute("class", "precio list-group-item link-danger");
       precio.setAttribute("class", "list-group-item ");
       cuotas.setAttribute("class", "list-group-item");
       stock.setAttribute("class", "list-group-item");
       liCompFav.setAttribute("class", " row justify-content-center");
       car.setAttribute("class", "fas fa-shopping-cart car mt-2 col-3");
       fav.setAttribute("class", "fa-solid fa-heart heart mt-2 col-3");
       cardFotter.setAttribute("class", "card-footer text-center");
       let img1 = el.imagen.split(",")[0];
       let imgURl = `https://loto.hopto.org/uploads/${img1}`;
       let imagenResponse = await fetch(imgURl);
       let imgBlob = await imagenResponse.blob();
       let imagenObjectURL = URL.createObjectURL(imgBlob);
       img.src = imagenObjectURL;
       

       
       
       descuento.innerHTML = `Antes: $ ${el.precio}`
       precio.innerHTML = `$ ${rebajadoDe} <small class="text-bg-success p-1 rounded">   ${el.descuento}  %OFF </small>`;
       nombreProducto.innerHTML = el.producto;
       cuotas.innerHTML = `<small> ${el.cuotas} cuotas sin interes </small>`;
      
      
       img.addEventListener("click", async (e)=>{
       e.preventDefault();
       if(e.target){
        verProd(el, bestPrecio, rebajadoDe, imagenObjectURL);
       }
      })
   
       $fragment.appendChild(box);
       box.appendChild(img);
       box.appendChild(datosProducto);
       box.appendChild(cardFotter);
       datosProducto.appendChild(hr);
       datosProducto.appendChild(nombreProducto);
       datosProducto.appendChild(cardUl)

       cardUl.appendChild(descuento);

       if (desc === 0) {

        cardUl.removeChild(descuento);
        precio.innerHTML = `$ ${rebajadoDe} `;
    }
       cardUl.appendChild(precio);
       cardUl.appendChild(cuotas);
       cardUl.appendChild(stock);
       liCompFav.appendChild(fav);
       liCompFav.appendChild(car);
       cardFotter.appendChild(liCompFav);
   
   
   }
}
boxCargas.appendChild(prodSearch);
boxCargas.appendChild(caja);

caja.appendChild($fragment);
   
};



hombre.addEventListener("click", async(e)=>{
 e.preventDefault();
 if(e.target){
boxRutas.innerHTML = "";

const HRem = document.createElement("a");
const HPant = document.createElement("a");
const HAcce = document.createElement("a");
HRem.innerHTML = "Remeras";
HPant.innerHTML = "Pantalones";
HAcce.innerHTML = "Accesorios";
boxRutas.setAttribute("class", "nav-item ms-lg-5 ms-0 m-2 d-flex flex-column flex-lg-row");
HRem.setAttribute("class", "link-success link-offset-2  link-underline-opacity-0 link-underline-opacity-50-hover ms-2");
HPant.setAttribute("class", "link-primary link-offset-2  link-underline-opacity-0 link-underline-opacity-50-hover ms-2");
HAcce.setAttribute("class", "link-danger link-offset-2  link-underline-opacity-0 link-underline-opacity-50-hover ms-2");

        boxRutas.appendChild(HRem);
        boxRutas.appendChild(HPant);
        boxRutas.appendChild(HAcce);
        boxNavbarNav.appendChild(boxRutas)
        
          
        
    


    HRem.addEventListener("click",async (e)=>{
        e.preventDefault();
       
     if(e.target){
     
        const res = await fetch("/Hombres/Remeras").then(res =>  res.json()).then(async data=>{
           
    
          DatosProdClient(data);
        
            }).catch(err => console.log("error", err))
                    
    }
    
});

HPant.addEventListener("click",async (e)=>{
    e.preventDefault();
   
 if(e.target){
  
    const res = await fetch("/Hombres/Pantalones").then(res =>  res.json()).then(async data=>{
        
       DatosProdClient(data);
        }).catch(err => console.log("error", err))
                
}

});


HAcce.addEventListener("click",async (e)=>{
    e.preventDefault();
   
 if(e.target){
  
    const res = await fetch("/Hombres/Accesorios").then(res =>  res.json()).then(async data=>{
        
       DatosProdClient(data);
        
        }).catch(err => console.log("error", err))
                
}

});
 }

});

const mujer = document.querySelector(".mujer");

mujer.addEventListener("click", (e)=>{
    e.preventDefault();

    if(e.target){
        boxRutas.innerHTML = "";

        const MRem = document.createElement("a");
        const MPant = document.createElement("a");
        const MVest = document.createElement("a");
        const MAcce = document.createElement("a");
        MRem.innerHTML = "Remeras";
        MPant.innerHTML = "Pantalones";
        MVest.innerHTML = "Vestidos";
        MAcce.innerHTML = "Accesorios";

        boxRutas.setAttribute("class", "nav-item ms-lg-5  ms-0 m-2 d-flex flex-column flex-lg-row");
        MRem.setAttribute("class", "link-success link-underline-opacity-0 link-underline-opacity-50-hover ms-2");
        MPant.setAttribute("class", "link-primary link-underline-opacity-0 link-underline-opacity-50-hover ms-2");
        MVest.setAttribute("class", "link-danger link-underline-opacity-0 link-underline-opacity-50-hover ms-2");
        MAcce.setAttribute("class", "link-warning link-underline-opacity-0 link-underline-opacity-50-hover ms-2");
        boxRutas.appendChild(MRem);
        boxRutas.appendChild(MPant);
        boxRutas.appendChild(MVest);
        boxRutas.appendChild(MAcce);
        boxNavbarNav.appendChild(boxRutas);
 

MRem.addEventListener("click",async (e)=>{
    e.preventDefault();
   
 if(e.target){
   
    const res = await fetch("/Mujeres/Remeras").then(res =>  res.json()).then(async data=>{
        
      DatosProdClient(data);
    
});
  
 } 

});

MPant.addEventListener("click",async (e)=>{
    e.preventDefault();
   
 if(e.target){
  
    const res = await fetch("/Mujeres/Pantalones").then(res =>  res.json()).then(async data=>{
        
        DatosProdClient(data);
                
    });
}
});


MVest.addEventListener("click",async (e)=>{
    e.preventDefault();
   
 if(e.target){
  
    const res = await fetch("/Mujeres/Vestidos").then(res =>  res.json()).then(async data=>{
        
        DatosProdClient(data)
    })
    }

});

MAcce.addEventListener("click",async (e)=>{
    e.preventDefault();
   
 if(e.target){
  
    const res = await fetch("/Mujeres/Accesorios").then(res =>  res.json()).then(async data=>{
        
        DatosProdClient(data);
     
})
 }
})

}
});

const Nena = document.querySelector(".niña");

Nena.addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target){
    boxRutas.innerHTML = "";

        const NRem = document.createElement("a");
        const NPant = document.createElement("a");
        const NVest = document.createElement("a");
         NRem.innerHTML = "Remeras";
         NPant.innerHTML = "Pantalones";
         NVest.innerHTML = "Vestidos";
         
         boxRutas.setAttribute("class", "nav-item ms-lg-5 ms-0 m-2 d-flex flex-column flex-lg-row");
         NRem.setAttribute("class", "link-success link-offset-2  link-underline-opacity-0 link-underline-opacity-50-hover ms-2");
         NPant.setAttribute("class", "link-primary link-offset-2  link-underline-opacity-0 link-underline-opacity-50-hover ms-2");
         NVest.setAttribute("class", "link-danger link-offset-2  link-underline-opacity-0 link-underline-opacity-50-hover ms-2");

         boxRutas.appendChild(NRem);
         boxRutas.appendChild(NPant);
         boxRutas.appendChild(NVest);
         boxNavbarNav.appendChild(boxRutas);


        NRem.addEventListener("click",async (e)=>{
    e.preventDefault();
   
 if(e.target){
  
    const res = await fetch("/Nena/Remeras").then(res =>  res.json()).then(async data=>{
        
        DatosProdClient(data);
       
        }).catch(err => console.log("error", err))
                
    }

});


NPant.addEventListener("click",async (e)=>{
    e.preventDefault();
   
 if(e.target){
  
    const res = await fetch("/Nena/Pantalones").then(res =>  res.json()).then(async data=>{
        
        DatosProdClient(data);
       
        }).catch(err => console.log("error", err))
                
}

});

NVest.addEventListener("click",async (e)=>{
    e.preventDefault();
   
 if(e.target){
  
    const res = await fetch("/Nena/Vestidos").then(res =>  res.json()).then(async data=>{
        
        DatosProdClient(data);
       
        }).catch(err => console.log("error", err))
                
}

});

}
});

const Child = document.querySelector(".niño");

Child.addEventListener("click", (e)=>{
e.preventDefault();

if(e.target){

     boxRutas.innerHTML = "";


     const ChRem =  document.createElement("a");
     const ChPant =  document.createElement("a");
     ChRem.innerHTML = "Remeras";
     ChPant.innerHTML = "Pantalones";
      
     boxRutas.setAttribute("class", "nav-item ms-lg-5 ms-0 m-2 d-flex flex-column flex-lg-row");
     ChRem.setAttribute("class","link-success link-offset-2  link-underline-opacity-0 link-underline-opacity-50-hover ms-2");
     ChPant.setAttribute("class", "link-primary link-offset-2  link-underline-opacity-0 link-underline-opacity-50-hover ms-2")

     boxRutas.appendChild(ChRem);
     boxRutas.appendChild(ChPant);
     boxNavbarNav.appendChild(boxRutas);

    ChRem.addEventListener("click",async (e)=>{
        e.preventDefault();
        
 if(e.target){
  
    const res = await fetch("/Nene/Remeras").then(res =>  res.json()).then(async data=>{
        
        DatosProdClient(data)
       
        }).catch(err => console.log("error", err))
                
}


});


ChPant.addEventListener("click",async (e)=>{
    e.preventDefault();
    
    if(e.target){
        
        const res = await fetch("/Nene/Pantalones").then(res =>  res.json()).then(async data=>{
            DatosProdClient(data);
            
        }).catch(err => console.log("error", err))
        
    }
    
});
}

});


const UltimasEntradasH  = async ()=>{

    const titulo = document.createElement("h3");
    titulo.setAttribute("class", "titulo col-12 mb-3 text-bg-success bg-opacity-75 p-3");
    titulo.innerHTML = "Ultimas entradas";

    cajaUltimas.appendChild(titulo);

try {

    let Hombres = ["/Hombres/Remeras", "/Hombres/Pantalones", "/Hombres/Accesorios"];
 let HombresIndex = Math.floor(Math.random()* Hombres.length);
 let HombresAleatorio = Hombres[HombresIndex];
 
 const res = await fetch(HombresAleatorio).then(res => res.json()).then(async data=>{
   let dataRandom = data.at(-1);
   

    
    
    const boxCard = document.createElement("div");
    const card = document.createElement("div");
    boxCard.setAttribute("class", "boxCard text-center col-lg-3 col-sm-6 m-3");
    card.setAttribute("class", "card cardUltimas mx-auto  border-2 col-12 ");
    let Imgtop = document.createElement("img");
    Imgtop.setAttribute("class", "image card-img-top");
    
    
    let bestPrecio = Number(dataRandom.precio);
    let desc = Number(dataRandom.descuento);
       let porcentaje = (bestPrecio * desc) / 100;
       let rebajadoDe = bestPrecio - porcentaje;

    
    let img1 = dataRandom.imagen.split(",")[0];
    let imgURl = `https://loto.hopto.org/uploads/${img1}`;
    let imagenResponse = await fetch(imgURl);
    let imgBlob = await imagenResponse.blob();
    let imagenObjectURL = URL.createObjectURL(imgBlob);
    Imgtop.src = imagenObjectURL;
    Imgtop.addEventListener("click", (e)=>{
        e.preventDefault();
        if(e.target){
          let datos = JSON.stringify(dataRandom);
    let obj = JSON.parse(datos);
        let el = obj;
        console.log(el)
          
        
          verProd(el,bestPrecio, rebajadoDe,imagenObjectURL );
        
      }
       }) 

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
   const cardTitulo = document.createElement("h5");
    cardTitulo.setAttribute("class", "card-title tituloUltimas");
    cardTitulo.innerHTML = "HOMBRES";
     
    boxCard.appendChild(card);
    boxCard.appendChild(cardTitulo);
    card.appendChild(Imgtop);
    
    cajaUltimas.appendChild(boxCard);




    })
    
} catch (error) {
    console.log(error)
}


}

const UltimasEntradasM = async ()=>{

    try {
    
        let Mujeres = ["/Mujeres/Remeras", "/Mujeres/Pantalones","/Mujeres/Vestidos" ,"/Mujeres/Accesorios"];
     let MujeresIndex = Math.floor(Math.random()* Mujeres.length);
    let MujeresAleatorio = Mujeres[MujeresIndex];
    
        const res = await fetch(MujeresAleatorio).then(res => res.json()).then(async data=>{
        let dataRandom = data.at(-1);
    
        
        
        const boxCard = document.createElement("div");
        const card = document.createElement("div");
        boxCard.setAttribute("class", "boxCard text-center col-lg-3 col-sm-6 m-3");
        card.setAttribute("class", "card cardUltimas mx-auto border-2 col-12 ");
        let Imgtop = document.createElement("img");
        Imgtop.setAttribute("class", "image card-img-top");
        
        
        let bestPrecio = Number(dataRandom.precio);
        let desc = Number(dataRandom.descuento);
           let porcentaje = (bestPrecio * desc) / 100;
           let rebajadoDe = bestPrecio - porcentaje;
    
        
        let img1 = dataRandom.imagen.split(",")[0];
        let imgURl = `https://loto.hopto.org/uploads/${img1}`;
        let imagenResponse = await fetch(imgURl);
        let imgBlob = await imagenResponse.blob();
        let imagenObjectURL = URL.createObjectURL(imgBlob);
        Imgtop.src = imagenObjectURL;
        Imgtop.addEventListener("click", (e)=>{
            e.preventDefault();
            if(e.target){
              let datos = JSON.stringify(dataRandom);
              let obj = JSON.parse(datos);
                    let el = obj
                    verProd(el,bestPrecio, rebajadoDe,imagenObjectURL);
            }
           }) ;
    
        const cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");
       const cardTitulo = document.createElement("h5");
        cardTitulo.setAttribute("class", "card-title tituloUltimas");
        cardTitulo.innerHTML = "MUJERES";
         
        boxCard.appendChild(card);
        boxCard.appendChild(cardTitulo);
        card.appendChild(Imgtop);
        
        cajaUltimas.appendChild(boxCard);
    
    
    
    
        })
        
    } catch (error) {
        console.log(error)
    }
    
    
    };


    const UltimasEntradasN = async ()=>{

        try {
        
            let NenasEs = ["/Nena/Remeras", "/Nena/Pantalones", "/Nena/Vestidos", "/Nene/Remeras", "/Nene/Pantalones"];
         let NenasEsIndex = Math.floor(Math.random()* NenasEs.length);
        let NenasEsAleatorio = NenasEs[NenasEsIndex];
        
            const res = await fetch(NenasEsAleatorio).then(res => res.json()).then(async data=>{
            let dataRandom = data.at(-1);
        
            
            
            const boxCard = document.createElement("div");
            const card = document.createElement("div");
            boxCard.setAttribute("class", "boxCard text-center col-lg-3 col-sm-6 m-3");
            card.setAttribute("class", "card cardUltimas mx-auto border-2 col-12");
            let Imgtop = document.createElement("img");
            Imgtop.setAttribute("class", "image card-img-top");
            
            
            let bestPrecio = Number(dataRandom.precio);
            let desc = Number(dataRandom.descuento);
               let porcentaje = (bestPrecio * desc) / 100;
               let rebajadoDe = bestPrecio - porcentaje;
        
          
            let img1 = dataRandom.imagen.split(",")[0];
            let imgURl = `https://loto.hopto.org/uploads/${img1}`;
            let imagenResponse = await fetch(imgURl);
            let imgBlob = await imagenResponse.blob();
            let imagenObjectURL = URL.createObjectURL(imgBlob);
            Imgtop.src = imagenObjectURL;
            Imgtop.addEventListener("click", (e)=>{
                e.preventDefault();
                if(e.target){
                  let datos = JSON.stringify(dataRandom);
                  let obj = JSON.parse(datos);
                        let el = obj;
                        verProd(el,bestPrecio, rebajadoDe,imagenObjectURL);
                }
               }) 
        
            const cardBody = document.createElement("div");
            cardBody.setAttribute("class", "card-body");
           const cardTitulo = document.createElement("h5");
            cardTitulo.setAttribute("class", "card-title tituloUltimas");
            cardTitulo.innerHTML = "NENAS/ES";
             
            boxCard.appendChild(card);
            boxCard.appendChild(cardTitulo);
            card.appendChild(Imgtop);
            
            cajaUltimas.appendChild(boxCard);
        
        
        
        
            })
            
        } catch (error) {
            console.log(error)
        }
        
        
        }

UltimasEntradasH();
UltimasEntradasM();
UltimasEntradasN();
