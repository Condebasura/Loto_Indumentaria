const Add = document.querySelector(".AddProducto");
const formAdd = document.querySelector(".formAdd");
const btnsForm = document.querySelector(".input-container_flex");
const boxCargas = document.querySelector(".box_cargas");
const btnAdd = document.querySelector(".button");
const hombre = document.querySelector(".Hombres");
const boxNames = document.createElement("div");
const boxContent = document.createElement("div");
const ulNombres = document.querySelector(".list-group");
const MinEdit = document.querySelector(".Min_Edit");
const texto = document.createElement("h3");
const boxSelect = document.querySelector(".box_select");
const $fragment = document.createDocumentFragment();
const modalContainer = document.getElementById("modalContainer");

const verProd = async (el ,bestPrecio,rebajadoDe, imagenObjectURL , interes) =>{

          
       
    boxCargas.innerHTML = "";
   
       
   let lasImgs = el.imagen.split(",");
  
  const loadImage = async (imgName) => {
  let imgURL = `http://localhost:3000/uploads/${imgName}`;
  let response = await fetch(imgURL);
  let blob = await response.blob();
  return URL.createObjectURL(blob);
  };
  
  
  let imagenes = await Promise.all(lasImgs.slice(0, 5).map(loadImage));
   
  
     
  
  
  
   const boxImg = document.createElement("div");
   boxImg.setAttribute("class", "content col-lg-7 mt-3 ms-0 ms-lg-5 mt-5 p-2  me-2 border bg-white");
   boxImg.innerHTML = `<div class="img-prod conteiner-fluid">
   <div class="contenedor_img row">
   <figure class="img_cont col-md-2 col ms-0 ">
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
            datProd.setAttribute("class", "datos col-lg-3 mt-5 p-2 ms-0 ms-lg-2 border text-center text-lg-start justify-content-center justify-content-lg-start bg-white ");
            console.log(datProd)
            datProd.innerHTML = ` <div class="Stock_nombre">
            <span class=" con_Stock text-center text-lg-start justify-content-center justify-content-lg-start"></span>
            
            <h1 class="name">${el.producto}</h1>
        </div>
        <div class="precio_cuotas">
            <span class="bestprecio">$ ${rebajadoDe} </span>
            <div class="cuo-in">
                <span class="cuotas">${el.cuotas} </span>
                <small class="int">cuotas sin interes de $ </small>
            </div>
            <div class="cards text-center text-lg-start justify-content-center justify-content-lg-start">
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
            
             let contVisuProd = document.createElement("div")
             contVisuProd.setAttribute("class", "contVisuProd row mt-5  gx-5")
            contVisuProd.appendChild(boxImg);
            contVisuProd.appendChild(datProd);
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
          }
           
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
  
  const pagar = async (bestPrecio) => {
    const precio = document.querySelector(".bestprecio");
    const precnmb = precio.innerHTML;
    const Elnum = precnmb.slice(1, 8);
    const EnNumeros = Number(Elnum);
  
  
  
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


const Eliminar = async (el) => {
    const res = await fetch("/Product/delete", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: el.id })
    });
    const data = await res.json();
    let parrafo = document.createElement("h2");
let aceptar = document.createElement("button");
    let cancelar = document.createElement("button");
 parrafo.setAttribute("class", "p_delete");
aceptar.setAttribute("class", "aceptar btn btn-outline-success");
    cancelar.setAttribute("class", "cancelar btn btn-outline-danger");

    const modalTabx = document.createElement("div");
    const modalDialog = document.createElement("div");
    const modalContent = document.createElement("div");
    const modalHeader = document.createElement("div");
    let titulo = document.createElement("h4");
    
    const modalBody = document.createElement("div");
     const modalFooter  = document.createElement("div");
    


modalTabx.setAttribute("tabindex","-1");
modalTabx.setAttribute("class","modal d-flex justify-content-center align-items-center text-center");
modalDialog.setAttribute("class", "modal-dialog");
modalContent.setAttribute("class","modal-content");

titulo.setAttribute("class", "modal-title");

modalHeader.setAttribute("class", "modal-header text-bg-danger");
modalBody.setAttribute("class", "modal-body text-center");
modalFooter.setAttribute("class", "modal-footer");
    
parrafo.innerHTML = `Se va a eliminar de su lista el producto: <h1>${el.producto}</h1>`;
aceptar.textContent = "Aceptar";
  cancelar.textContent = "Cancelar";
   titulo.innerHTML = "Eliminar";


   modalHeader.appendChild(titulo);
   modalBody.appendChild(parrafo);
    modalFooter.appendChild(cancelar);
    modalFooter.appendChild(aceptar);

   modalContent.appendChild(modalHeader);
   modalContent.appendChild(modalBody);
   modalContent.appendChild(modalFooter);
   modalDialog.appendChild(modalContent);
   modalTabx.appendChild(modalDialog);

   modalContainer.innerHTML = "";
   modalContainer.appendChild(modalTabx);

   const bootstrapModal = new bootstrap.Modal(modalTabx);
   bootstrapModal.show();


    


    aceptar.addEventListener("click", async (e) => {
        e.preventDefault();
        try {
            
            let id = el.id;
            let img = el.imagen;
            modalContent.removeChild(modalFooter);
            modalHeader.setAttribute("class", "modal-header text-bg-success");
            titulo.innerHTML = "Exito !!"
            parrafo.innerHTML = `El producto ${el.producto} fue eliminado con exito`;
            setTimeout(() => {  location.reload(), 100000 });
            await fetch(`/product/delete/${id}/${img}`, {
                method: "DELETE",
            });
        } catch (error) {
            console.log("Error al enviar la solicitud DELETE", error);
        }

    });

    cancelar.addEventListener("click", () => {
       modalTabx.setAttribute("class", "d-none");
        bootstrapModal.hide();

    })

};

const Editar = async (el) => {
    const formEdit = document.createElement("form");
    const Nombre = document.createElement("h3");
    
    const divProd = document.createElement("div"); 
    const LabelProd = document.createElement("label");
    const nomProd = document.createElement("input");

    const divStock = document.createElement("div");
    const LabelStock = document.createElement("label");
    const InpStock = document.createElement("input");

    const divDesc = document.createElement("div");
    const LabelDesc = document.createElement("label");
    const InpDesc = document.createElement("input");

    const divPrecio = document.createElement("div");
    const LabPrecio = document.createElement("label");
    const InpPrecio = document.createElement("input");
    
    const divSInt = document.createElement("div");
    const LabSInt = document.createElement("label");
    const InpSInt = document.createElement("select");

    const divContSecYSubSec = document.createElement("div");
    const divSec = document.createElement("div");
    const LabSeccion = document.createElement("label");
    const InpSeccion = document.createElement("input");

    const divSubSec = document.createElement("div");
    const LabsubSeccion = document.createElement("label");
    const InpsubSeccion = document.createElement("input");

    const divArchivo = document.createElement("div");
    const LabelArch = document.createElement("label");
    const archivo = document.createElement("input");
    const btn = document.createElement("button");
   boxContent.setAttribute("class", "text-center   row justify-content-center")
   formEdit.setAttribute("class", "formEdit form mt-3 mb-3 p-5");
   Nombre.setAttribute("class", "tituloEdit");

   divProd.setAttribute("class", "form-floating");
   LabelProd.setAttribute("for", "floatingInput");
   nomProd.setAttribute("class", "form-control");
   nomProd.setAttribute("id", "floatingInput");

   divStock.setAttribute("class", "form-floating");
   LabelStock.setAttribute("for", "floatingInput");
   InpStock.setAttribute("class", "form-control");
   InpStock.setAttribute("id", "floatingInput");

   divDesc.setAttribute("class", "form-floating");
   LabelDesc.setAttribute("for" , "floatingInput");
   InpDesc.setAttribute("class", "form-control");
   InpDesc.setAttribute("id","floatinInput");

   divPrecio.setAttribute("class", "form-floating");
   LabPrecio.setAttribute("for", "floatingInput");
   InpPrecio.setAttribute("class", "form-control");
   InpPrecio.setAttribute("id", "floatingInput");

   divSInt.setAttribute("class", "form-floating");
   LabSInt.setAttribute("class", "floatingSelect");
   InpSInt.setAttribute("id", "floatingSelect");
   InpSInt.setAttribute("class", "form-select");
   InpSInt.setAttribute("aria-label", "Floating label select example");

   divContSecYSubSec.setAttribute("class", "row gx-2")
   divSec.setAttribute("class", "form-floating col");
   LabSeccion.setAttribute("for", "floatingSelect");
   InpSeccion.setAttribute("id", "floatingSelect");
   InpSeccion.setAttribute("class", "form-select");
   InpSeccion.setAttribute("aria-label", "Floating label select example");

   divSubSec.setAttribute("class", "form-floating col");
   LabsubSeccion.setAttribute("for", "floatingSelect");
   InpsubSeccion.setAttribute("id", "floatingSelect");
   InpsubSeccion.setAttribute("class", "form-select");
   InpsubSeccion.setAttribute("aria-label", "Floating label select example");

   divArchivo.setAttribute("class", "inputFile mb-3");
   LabelArch.setAttribute("class" , "input-archivo form-label");
   LabelArch.setAttribute("for", "archivos formFileMultiple");
   archivo.setAttribute("id", "archivos formFileMultiple");
   archivo.setAttribute("class", "imagen form-control");
   archivo.setAttribute("type", "file");
   archivo.setAttribute("accept", "image/*");
   archivo.setAttribute("multiple", "");

   btn.setAttribute("class", "button btn btn-primary pb-1");
   btn.setAttribute("type", "submit");






    Nombre.innerHTML = "Editar Producto";
    LabelProd.innerHTML = "Nombre del Producto";
    LabelStock.innerHTML = "Stock";
    LabelDesc.innerHTML = "Descuento del";
    LabPrecio.innerHTML = "Precio";
    LabSInt.innerHTML = "Cuotas";
    LabSeccion.innerHTML = "Seccion";
    LabsubSeccion.innerHTML = "Prenda";
    archivo.innerHTML = "Seleccionar imagenes";
    btn.innerHTML = "Finalizar Edicion";

    nomProd.value = el.producto;
    InpStock.value = el.stock;
    InpDesc.value = el.descuento;
    InpPrecio.value = el.precio;
    InpSeccion.value = el.seccion;
    InpsubSeccion.value = el.subSeccion;

    InpSeccion.setAttribute("readonly", "")
    InpsubSeccion.setAttribute("readonly", "")
    archivo.setAttribute("type", "file");
    archivo.setAttribute("acept", "image/*");
    archivo.setAttribute("name", "archivos")
    archivo.setAttribute("multiple", "");
    btn.setAttribute("type", "submit");


    formEdit.appendChild(Nombre);
    divProd.appendChild(nomProd);
    divProd.appendChild(LabelProd);
    divStock.appendChild(InpStock);
    divStock.appendChild(LabelStock);
    divDesc.appendChild(InpDesc)
    divDesc.appendChild(LabelDesc)
    divPrecio.appendChild(InpPrecio)
    divPrecio.appendChild(LabPrecio)
    divSInt.appendChild(InpSInt)
    divSInt.appendChild(LabSInt)
    let Nums = ["1", "2", "3", "6", "9", "12"];
    for (let i of Nums) {
        if (i.length > 0) {
            const valor = document.createElement("option");
            valor.innerHTML = i;
            valor.value = i;
            InpSInt.appendChild(valor);

        }
    }
    
    divSec.appendChild(InpSeccion);
    divSec.appendChild(LabSeccion);
    divSubSec.appendChild(InpsubSeccion);
    divSubSec.appendChild(LabsubSeccion);
    divContSecYSubSec.appendChild(divSec);
    divContSecYSubSec.appendChild(divSubSec);
    divArchivo.appendChild(LabelArch);
    divArchivo.appendChild(archivo);

    formEdit.appendChild(divProd);
    formEdit.appendChild(divStock);
    formEdit.appendChild(divDesc);
    formEdit.appendChild(divPrecio);
    formEdit.appendChild(divSInt);
    formEdit.appendChild(divContSecYSubSec);
    formEdit.appendChild(divArchivo);
    formEdit.appendChild(btn);
    boxContent.innerHTML = "";
    boxCargas.innerHTML = "";
    $fragment.appendChild(formEdit);


    boxCargas.appendChild(boxContent);
    boxContent.appendChild($fragment);

    // Seccion del mini editor (Muestra lo que se esta editando)
   const cardHeader = document.createElement("div");
   const cardBody = document.createElement("div");
   const ulCard = document.createElement("ul");
   const cardFooter = document.createElement("div");

    const titulo = document.createElement("h4");
    const NameProd = document.createElement("li");
    const NStock = document.createElement("li");
    const NDesc = document.createElement("li");
    const NPrecio = document.createElement("li");
    const NInt = document.createElement("li");
    const EstImg = el.imagen.split(",");
   boxContent.setAttribute("class", " mt-4 col-md-6 col-12");
   
   MinEdit.classList.add("Min_Edit" ,"card"
,"mb-5" , "me-2", "text-start");
   
   MinEdit.classList.remove("d-none");
   cardHeader.setAttribute("class", " card-header text-bg-secondary text-center");
   cardBody.setAttribute("class", "card-body p-0 text-start");
   ulCard.setAttribute("class", "list-group list-group-flush ");
   NameProd.setAttribute("class", "list-group-item border-bottom border-primary-subtle" ); 
   NStock.setAttribute("class", "list-group-item border-bottom border-primary-subtle");
   NDesc.setAttribute("class", "list-group-item border-bottom border-primary-subtle"); 
   NPrecio.setAttribute("class", "list-group-item border-bottom border-primary-subtle"); 
    NInt.setAttribute("class", "list-group-item border-bottom border-primary-subtle");
   cardFooter.setAttribute("class", "card-footer ");

    MinEdit.innerHTML = "";
    titulo.innerHTML = "Se esta Editando";
    NameProd.innerHTML = `Producto: ${el.producto}`;
    NStock.innerHTML = `Stock: ${el.stock}`;
    NDesc.innerHTML = `Descuento: ${el.descuento}`;
    NPrecio.innerHTML = `Precio: ${el.precio}`;
    NInt.innerHTML = `Interes: ${el.cuotas}`;

  


    cardHeader.appendChild(titulo);
    ulCard.appendChild(NameProd);
    ulCard.appendChild(NStock);
    ulCard.appendChild(NDesc);
    ulCard.appendChild(NPrecio);
    ulCard.appendChild(NInt);
    cardBody.appendChild(ulCard);

    EstImg.forEach(async (imagen) => {
        const ImgDefault = "a4937c6a789a8856d0632422c7af52fa";
        const img = document.createElement("img");
        img.setAttribute("class", "border border-success ms-1")

        let imgURl = `http://localhost:3000/uploads/${imagen}`;
        let imagenResponse = await fetch(imgURl);
        let imgBlob = await imagenResponse.blob();
        let imagenObjectURL = URL.createObjectURL(imgBlob);
        if (imagen === ImgDefault) {
            img.classList.remove("border", "border-success", "ms-1");
            img.src = "";
        } else {

            img.src = imagenObjectURL;
        }

        img.style.maxHeight = "30px";
        img.style.maxWidth = "2em";

        cardFooter.appendChild(img);
    })

     MinEdit.appendChild(cardHeader);
     MinEdit.appendChild(cardBody);
     MinEdit.appendChild(cardFooter);

    const res = await fetch("/Product/edit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }, body: JSON.stringify({ id: el.id })
    })
    const data = await res.json();

    formEdit.addEventListener("submit", async (e) => {
        e.preventDefault();
        let formdata = new FormData(e.target);
        formdata.append("nomProd", nomProd.value);
        formdata.append("InpStock", InpStock.value);
        formdata.append("InpDesc", InpDesc.value);
        formdata.append("InpPrecio", InpPrecio.value);
        Array.from(InpSInt.selectedOptions).forEach(option => {

            formdata.append("InpSInt", option.value);
            for (var pair of formdata.entries()) {
                console.log(pair[0] + ': ' + pair[1]);
            }
        })

        try {
            let id = el.id;
            const res = await fetch(`/Product/Update/${id}`, {
                method: "PUT",
                body: formdata
            });

            const data = await res.json();


            if (res.ok) {
                
                let parrafo = document.createElement("p");
                
                const modalTabx = document.createElement("div");
                const modalDialog = document.createElement("div");
                const modalContent = document.createElement("div");
                const modalHeader = document.createElement("div");
                let titulo = document.createElement("h4");
                const btnClose = document.createElement("button");
                const modalBody = document.createElement("div");
                


           modalTabx.setAttribute("tabindex","-1");
           modalTabx.setAttribute("class","modal d-flex justify-content-center align-items-center text-center");
           modalDialog.setAttribute("class", "modal-dialog");
           modalContent.setAttribute("class","modal-content");
           
           titulo.setAttribute("class", "modal-title");
           btnClose.setAttribute("class", "btn-close");
           modalBody.setAttribute("class", "modal-body text-center");
           
           parrafo.innerHTML = data.mensaje;
               titulo.innerHTML = "Exito!!";

               modalHeader.setAttribute("class", "modal-header text-bg-success");

               modalHeader.appendChild(titulo);
               modalHeader.appendChild(btnClose);
               modalBody.appendChild(parrafo);

               modalContent.appendChild(modalHeader);
               modalContent.appendChild(modalBody);
               modalDialog.appendChild(modalContent);
               modalTabx.appendChild(modalDialog);

               modalContainer.innerHTML = "";
               modalContainer.appendChild(modalTabx);

               const bootstrapModal = new bootstrap.Modal(modalTabx);
               bootstrapModal.show();

                setTimeout(() => {
                    return location.reload();
                }, 1000);
            } else if (res.status === 200) {
                
                let parrafo = document.createElement("p");
                parrafo.innerHTML = data.mensaje;
                modalBody.appendChild(parrafo);
                
            }

        } catch (error) {
            console.log(error.message);
        }
    });


};

const DataProductos = async (data) => {
    let datos = JSON.stringify(data);

    let obj = JSON.parse(datos);

    if (obj.length === 0) {
        MinEdit.classList.display = "none";
        boxContent.innerHTML = "";

        texto.innerHTML = "No hay productos!!";
        $fragment.appendChild(texto);

    } else {

        for (let el of obj) {
            
            if(!MinEdit.classList.contains("d-none")){

          MinEdit.classList.remove("Min_Edit","card"
,"mb-5" , "pe-2");
                
                MinEdit.classList.add("d-none");
              }
            boxContent.innerHTML = "";
            boxCargas.innerHTML = "";
            texto.innerHTML = "";


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
            const cardF = document.createElement("div");
            let edit = document.createElement("a");
            let delet = document.createElement("a");

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
            boxContent.classList.add("boxContent", "row", "gy-sm-3" , "gx-sm-5", "gx-0", "gy-0" , "ps-0" );
            boxContent.classList.remove("text-center", "justify-content-center", "mt-4" ,"col-md-6" ,"col-12");
            

            box.setAttribute("class", "box_pilcha card col-sm-6 col m-3 ");
            img.setAttribute("class", "image card-img-top");

            datosProducto.setAttribute("class", "datos card-body");
            nombreProducto.setAttribute("class", "name card-title");
           
            cardUl.setAttribute("class", "list-group list-group-flush m-0 p-0 text-start text-md-center")
            descuento.setAttribute("class", "precio list-group-item link-danger");
            precio.setAttribute("class", "list-group-item ");
            stock.setAttribute("class", "list-group-item");
            cuotas.setAttribute("class", "list-group-item");


            cardF.setAttribute("class", "card-footer");
            edit.setAttribute("class", "fa-solid fa-pen-to-square");
            delet.setAttribute("class", "fa-solid fa-trash-can");

            let img1 = el.imagen.split(",")[0];
            let imgURl = `http://localhost:3000/uploads/${img1}`;
            let imagenResponse = await fetch(imgURl);
            let imgBlob = await imagenResponse.blob();
            let imagenObjectURL = URL.createObjectURL(imgBlob);
            img.src = imagenObjectURL;
            descuento.innerHTML = `Antes: $ ${el.precio}`
            precio.innerHTML = `$ ${rebajadoDe}   <small class="text-bg-success p-1 rounded"> ${el.descuento}  %OFF </small>`;
            nombreProducto.innerHTML = el.producto;
            cuotas.innerHTML = `<small>${el.cuotas} cuotas sin interes </small>`;
            img.addEventListener("click", (e) => {
                e.preventDefault();
                if (e.target) {
                    verProd(el, bestPrecio, rebajadoDe, imagenObjectURL);
                }
            })

            $fragment.appendChild(box);
            box.appendChild(img);
            box.appendChild(datosProducto);
            datosProducto.appendChild(hr);
            datosProducto.appendChild(nombreProducto);
            nombreProducto.appendChild(hr);
            cardUl.appendChild(descuento);
            if (desc === 0) {

                cardUl.removeChild(descuento);
                precio.innerHTML = `$ ${rebajadoDe} `;
            }
            cardUl.appendChild(precio);
            cardUl.appendChild(cuotas);
            cardUl.appendChild(stock);
            datosProducto.appendChild(cardUl);

            cardF.appendChild(edit);
            cardF.appendChild(delet);
             datosProducto.appendChild(cardF);

            delet.addEventListener("click", async (e) => {
                e.preventDefault();
                Eliminar(el);
            });


            edit.addEventListener("click", async (e) => {
                e.preventDefault();
                ulNombres.removeChild(boxNames);
                Editar(el);
            })

        }
    }
    boxCargas.appendChild(boxContent);
    boxContent.appendChild($fragment);
};

hombre.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target) {
       
        boxNames.innerHTML = "";
        boxContent.innerHTML = "";
        if(!MinEdit.classList.contains("d-none")){

            MinEdit.classList.remove("Min_Edit" ,"card"
,"mb-5", "pe-2");
           
            MinEdit.classList.add("d-none");
          }
        const remeras = document.createElement("a");
        const pantalones = document.createElement("a");
        const accesorios = document.createElement("a");
         remeras.setAttribute("class", "list-group-item mb-2 mt-5 btn btn-outline-secondary");
         pantalones.setAttribute("class", "list-group-item mb-2 btn btn-outline-secondary");
         accesorios.setAttribute("class", "list-group-item mb-2 btn btn-outline-secondary");
        remeras.innerHTML = "Remeras";
        pantalones.innerHTML = "Pantalones";
        accesorios.innerHTML = "Accesorios";
        boxNames.appendChild(remeras);
        boxNames.appendChild(pantalones);
        boxNames.appendChild(accesorios);
        ulNombres.appendChild(boxNames);

        Add.addEventListener("click", (e) => {
            e.preventDefault();
            if (e.target) {

                formAdd.style.display = "flex";
               

                MinEdit.innerHTML = "";
                boxNames.innerHTML = "";
                boxContent.innerHTML = "";
            }
        })
        remeras.addEventListener("click", async (e) => {
            e.preventDefault();

            if (e.target) {
                formAdd.style.display = "none";
                const res = await fetch("/Hombres/Remeras").then(res => res.json()).then(async data => {
                    DataProductos(data);

                }).catch(err => console.log("error", err))

            }

        });
        pantalones.addEventListener("click", async (e) => {
            e.preventDefault();

            if (e.target) {
                formAdd.style.display = "none";
                const res = await fetch("/Hombres/Pantalones").then(res => res.json()).then(async data => {
                    DataProductos(data);

                }).catch(err => console.log("error", err))

            }

        });
        accesorios.addEventListener("click", async (e) => {
            e.preventDefault();

            if (e.target) {
                formAdd.style.display = "none";
                const res = await fetch("/Hombres/Accesorios").then(res => res.json()).then(async data => {

                    DataProductos(data);
                }).catch(err => console.log("error", err))

            }

        });

    }
});