import { imgZoom } from "./visual.js";
const producto = document.querySelector(".name");
let archivo = document.querySelector(".image");
let archivo1 = document.querySelector(".image1");
let archivo2 = document.querySelector(".image2");
let archivo3 = document.querySelector(".image3");
let archivo4 = document.querySelector(".image4");
const precio = document.querySelector(".bestprecio");
const cuotas = document.querySelector(".cuotas");
const interes = document.querySelector(".int");
let ProdStock = document.querySelector(".con_Stock");
let Cant = document.querySelector(".cantidad");
const hombre = document.querySelector(".hombre");
const mujer = document.querySelector(".mujer");
const boxRutas = document.createElement("div");
const caja = document.createElement("div");
const texto = document.createElement("h3");
const boxCargas = document.querySelector(".content");
const datosProd = document.querySelector(".img-prod");
const datos = document.querySelector(".datos")
const btn = document.querySelector(".comprar");
const $fragment = document.createDocumentFragment();


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
        description: producto,
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
          return new Promise((resolve, reject) => {
            fetch("/process_payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            })

              .then((response) => response.json())
              .then((response) => {
                console.log("despues del post , dentro de then, despues de response");

                  const url = window.location.href;
                resolve(response);

                const mp = new MercadoPago('TEST-cda8ecd5-5002-43a8-a7d3-172588165057', { // Add your public key credential
                  locale: 'es-AR'
                });
                const bricksStatus = mp.bricks();
                const renderStatusScreenBrick = async (bricksStatus) => {
                  const settings = {
                    initialization: {
                      paymentId: response.paymentid, // Payment identifier, from which the status will be checked
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


                const statusScreen = document.createElement("div")
                statusScreen.setAttribute("id", "statusScreenBrick_container");
                
                

                boxCargas.removeChild(PayBrinck);
                renderStatusScreenBrick(bricksStatus);
                boxCargas.appendChild(statusScreen);
                








              })

              .catch((error) => {
                // manejar la respuesta de error al intentar crear el pago
                reject();
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
  renderPaymentBrick(bricksBuilder);
  boxCargas.removeChild(datosProd);
  boxCargas.removeChild(datos);
  boxCargas.appendChild(PayBrinck)
}



const DatosProdClient = async (data) => {
  let datos = JSON.stringify(data);
  let obj = JSON.parse(datos);
  if (obj.length === 0) {
    caja.innerHTML = "";

    texto.innerHTML = "No hay productos!!";
    $fragment.appendChild(texto);

  } else {
    for (let el of obj) {



      caja.innerHTML = "";
      const box = document.createElement("div");
      let datosProducto = document.createElement("div");
      let img = document.createElement("img");
      let nombreProducto = document.createElement("h3");
      let hr = document.createElement("hr");
      let descuento = document.createElement("p");
      let precio = document.createElement("span");
      let stock = document.createElement("p");
      let cuotas = document.createElement("p");
      let car = document.createElement("a");
      //descuento
      let bestPrecio = Number(el.precio);
      let desc = Number(el.descuento);
      let porcentaje = (bestPrecio * desc) / 100;
      let rebajadoDe = bestPrecio - porcentaje;

      if (el.stock >= 5) {
        stock.innerHTML = "stock disponible";
      } else if (el.stock > 0 && el.stock <= 4) {
        stock.innerHTML = "Ultimos disponible";
      } else if (el.stock === 0) {
        stock.innerHTML = "sin stock";
      }
      caja.setAttribute("class", "cont-ul");
      box.setAttribute("class", "box_pilcha");
      img.setAttribute("class", "image");
      nombreProducto.setAttribute("class", "name");
      datosProducto.setAttribute("class", "datos");
      descuento.setAttribute("class", "precio");
      car.setAttribute("class", "fas fa-shopping-cart");
      let img1 = el.imagen.split(",")[0];
      let imgURl = `http://localhost:3000/uploads/${img1}`;
      let imagenResponse = await fetch(imgURl);
      let imgBlob = await imagenResponse.blob();
      let imagenObjectURL = URL.createObjectURL(imgBlob);
      img.src = imagenObjectURL;
      descuento.innerHTML = `Antes: $ ${el.precio}`
      precio.innerHTML = `$ ${rebajadoDe}    ${el.descuento}  %OFF`;
      nombreProducto.innerHTML = el.producto;
      cuotas.innerHTML = `${el.cuotas} cuotas sin interes`;
      img.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target) {
          return window.location.href = `/visualProducto.html?id=${el.id}&estaimg=${el.imagen}&producto=${el.producto}&precio=${rebajadoDe}&descuento=${el.descuento}&cuotas=${el.cuotas}&stock=${el.stock}`
        }
      })

      $fragment.appendChild(box);
      box.appendChild(img);
      box.appendChild(datosProducto);
      datosProducto.appendChild(hr);
      datosProducto.appendChild(nombreProducto);
      datosProducto.appendChild(descuento);
      datosProducto.appendChild(precio);
      datosProducto.appendChild(cuotas);
      datosProducto.appendChild(stock);
      datosProducto.appendChild(car);


    }
  }
  boxCargas.appendChild(caja);
  caja.appendChild($fragment);
};



hombre.addEventListener("click", async (e) => {
  e.preventDefault();
  if (e.target) {
    boxCargas.innerHTML = "";
    boxRutas.innerHTML = "";
    caja.innerHTML = "";
    const HRem = document.createElement("a");
    const HPant = document.createElement("a");
    const HAcce = document.createElement("a");
    HRem.innerHTML = "Remeras";
    HPant.innerHTML = "Pantalones";
    HAcce.innerHTML = "Accesorios";
    boxRutas.appendChild(HRem);
    boxRutas.appendChild(HPant);
    boxRutas.appendChild(HAcce);
    boxCargas.appendChild(boxRutas);



    HRem.addEventListener("click", async (e) => {
      e.preventDefault();

      if (e.target) {

        const res = await fetch("/Hombres/Remeras").then(res => res.json()).then(async data => {

          DatosProdClient(data);
        }).catch(err => console.log("error", err))

      }

    });

    HPant.addEventListener("click", async (e) => {
      e.preventDefault();

      if (e.target) {

        const res = await fetch("/Hombres/Pantalones").then(res => res.json()).then(async data => {

          DatosProdClient(data);
        }).catch(err => console.log("error", err))

      }

    });


    HAcce.addEventListener("click", async (e) => {
      e.preventDefault();

      if (e.target) {

        const res = await fetch("/Hombres/Accesorios").then(res => res.json()).then(async data => {

          DatosProdClient(data);

        }).catch(err => console.log("error", err))

      }

    });
  }

});


mujer.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target) {
    boxCargas.innerHTML = "";
    boxRutas.innerHTML = "";
    caja.innerHTML = "";
    const MRem = document.createElement("a");
    const MPant = document.createElement("a");
    const MVest = document.createElement("a");
    const MAcce = document.createElement("a");
    MRem.innerHTML = "Remeras";
    MPant.innerHTML = "Pantalones";
    MVest.innerHTML = "Vestidos";
    MAcce.innerHTML = "Accesorios";
    boxRutas.appendChild(MRem);
    boxRutas.appendChild(MPant);
    boxRutas.appendChild(MVest);
    boxRutas.appendChild(MAcce);
    boxCargas.appendChild(boxRutas);



    MRem.addEventListener("click", async (e) => {
      e.preventDefault();

      if (e.target) {

        const res = await fetch("/Mujeres/Remeras").then(res => res.json()).then(async data => {

          DatosProdClient(data);

        });
      }

    });

    MPant.addEventListener("click", async (e) => {
      e.preventDefault();

      if (e.target) {

        const res = await fetch("/Mujeres/Pantalones").then(res => res.json()).then(async data => {

          DatosProdClient(data);

        });
      }
    });


    MVest.addEventListener("click", async (e) => {
      e.preventDefault();

      if (e.target) {

        const res = await fetch("/Mujeres/Vestidos").then(res => res.json()).then(async data => {

          DatosProdClient(data)
        })
      }

    });

    MAcce.addEventListener("click", async (e) => {
      e.preventDefault();

      if (e.target) {

        const res = await fetch("/Mujeres/Accesorios").then(res => res.json()).then(async data => {

          DatosProdClient(data);

        })
      }
    })

  }
})


const Nena = document.querySelector(".niña");

Nena.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target) {
    boxCargas.innerHTML = "";
    boxRutas.innerHTML = "";
    caja.innerHTML = "";
    const NRem = document.createElement("a");
    const NPant = document.createElement("a");
    const NVest = document.createElement("a");
    NRem.innerHTML = "Remeras";
    NPant.innerHTML = "Pantalones";
    NVest.innerHTML = "Vestidos";
    boxRutas.appendChild(NRem);
    boxRutas.appendChild(NPant);
    boxRutas.appendChild(NVest);
    boxCargas.appendChild(boxRutas);


    NRem.addEventListener("click", async (e) => {
      e.preventDefault();

      if (e.target) {

        const res = await fetch("/Nena/Remeras").then(res => res.json()).then(async data => {

          DatosProdClient(data);

        }).catch(err => console.log("error", err))

      }

    });


    NPant.addEventListener("click", async (e) => {
      e.preventDefault();

      if (e.target) {

        const res = await fetch("/Nena/Pantalones").then(res => res.json()).then(async data => {

          DatosProdClient(data);

        }).catch(err => console.log("error", err))

      }

    });

    NVest.addEventListener("click", async (e) => {
      e.preventDefault();

      if (e.target) {

        const res = await fetch("/Nena/Vestidos").then(res => res.json()).then(async data => {

          DatosProdClient(data);

        }).catch(err => console.log("error", err))

      }

    });

  }
})

const Child = document.querySelector(".niño");

Child.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target) {
    boxCargas.innerHTML = "";
    boxRutas.innerHTML = "";
    caja.innerHTML = "";

    const ChRem = document.createElement("a");
    const ChPant = document.createElement("a");
    ChRem.innerHTML = "Remeras";
    ChPant.innerHTML = "Pantalones";
    boxRutas.appendChild(ChRem);
    boxRutas.appendChild(ChPant);
    boxCargas.appendChild(boxRutas);

    ChRem.addEventListener("click", async (e) => {
      e.preventDefault();

      if (e.target) {

        const res = await fetch("/Nene/Remeras").then(res => res.json()).then(async data => {

          DatosProdClient(data)

        }).catch(err => console.log("error", err))

      }


    });


    ChPant.addEventListener("click", async (e) => {
      e.preventDefault();

      if (e.target) {

        const res = await fetch("/Nene/Pantalones").then(res => res.json()).then(async data => {
          DatosProdClient(data);

        }).catch(err => console.log("error", err))

      }

    });
  }

})



const link = document.querySelector(".med_pago");
link.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.matches(".med_pago")) {
    const urls = ["https://http2.mlstatic.com/storage/logos-api-admin/fe827370-f3be-11eb-8e0d-6f4af49bf82e-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/27764c60-ed7a-11ec-87df-cb682e3b026f-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/ba8b96a0-cd41-11ea-a668-0563a89e00fd-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/c9f71470-6f07-11ec-9b23-071a218bbe35-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg", "https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg"
    ];
    const modal = document.getElementById("modal");
    modal.innerHTML = "";
    const salir = document.createElement("i");
    const titulo = document.createElement("h1");
    const cards = document.createElement("div");
    const cuote = document.createElement("span");

    cards.setAttribute("class", "cards");
    titulo.setAttribute("class", "titulo");
    cuote.setAttribute("class", "cuote");
    salir.setAttribute("class", "fa-solid fa-circle-xmark");


    titulo.textContent = "Medios de pago y promociones";
    cuote.textContent = "Hasta 3 cuotas sin interes";

    modal.showModal();
    modal.appendChild(salir);
    modal.appendChild(titulo);
    modal.appendChild(cuote);

    modal.appendChild(cards);

    urls.forEach(url => {
      const divCard = document.createElement("div");
      const imgCard = document.createElement("img")
      imgCard.src = url;
      console.log(url);
      divCard.setAttribute("class", "card_cuo");
      imgCard.setAttribute("class", "t_cards");

      // modal.appendChild(divCard); 
      cards.appendChild(divCard);
      divCard.appendChild(imgCard);
    })



    salir.addEventListener("click", (e) => {
      if (e.target) {
        modal.close();
        modal.innerHTML = "";

      }

    })
  }

});





// Creamos una funcion para que se muestre un cuadro de dialogo al producirse un error.
const CodeError = () => {

  const modal = document.getElementById("modal");
  const volver = document.createElement("button");
  volver.setAttribute("class", "boton_volver");
  volver.textContent = "Aceptar";
  modal.getElementsByClassName("cont_error");
  const spanTriengle = document.createElement("span");
  spanTriengle.setAttribute("class", "fa-solid fa-triangle-exclamation");
  const Mensaje = document.createElement("h1");
  Mensaje.getAttribute("class", "text_prin");
  Mensaje.classList.toggle("text_prin");
  Mensaje.textContent = "Ocurrio un Error!! Pruebe denuevo";
  modal.showModal();
  modal.appendChild(spanTriengle);
  modal.appendChild(Mensaje);
  modal.appendChild(volver);



  volver.addEventListener("click", (e) => {
    modal.close();
    location.reload();

  });
}

const informeImg = async () => {
  // Hacer que si no se ingresan la 5 imagenes para mostrar , se agreguen a la bd como imagenes por defecto, asi se traen, se convierten y se colocan por defecto

  /*let imgDefault = `http:/localhost:3000/img/noimg.jpg`;
  let imagenDefoulRes = await fetch(imgDefault );
  let imgBlobDef = await imagenDefoulRes.blob();
  let imagenObjectDefault = URL.createObjectURL(imgBlobDef);
   console.log(imagenObjectDefault)*/

  let url = new URL(window.location);
  const id = url.searchParams.get("id");
  console.log(id);
  let EstaImg = url.searchParams.get("estaimg");
  let prod = url.searchParams.get("producto");
  let bestPrecio = url.searchParams.get("precio");
  let descuento = url.searchParams.get("descuento");
  let cuo = url.searchParams.get("cuotas");
  let stock = url.searchParams.get("stock");
  let S_tock = Number(stock);
  console.log(S_tock);
  let img = EstaImg.split(",");


  let imgURl = `http://localhost:3000/uploads/${img[0]}`;
  let imagenResponse = await fetch(imgURl);
  let imgBlob = await imagenResponse.blob();
  let imagenObjectURL = URL.createObjectURL(imgBlob);
  archivo.src = imagenObjectURL;
  imgZoom.src = imagenObjectURL;

  imgZoom.addEventListener("click", (e) => {
    e.preventDefault();

  })
  let imgURl1 = `http://localhost:3000/uploads/${img[1]}`;
  let imagenResponse1 = await fetch(imgURl1);
  let imgBlob1 = await imagenResponse1.blob();
  let imagenObjectURL1 = URL.createObjectURL(imgBlob1);
  archivo1.src = imagenObjectURL1;


  let imgURl2 = `http://localhost:3000/uploads/${img[2]}`;
  let imagenResponse2 = await fetch(imgURl2);
  let imgBlob2 = await imagenResponse2.blob();
  let imagenObjectURL2 = URL.createObjectURL(imgBlob2);
  archivo2.src = imagenObjectURL2;


  let imgURl3 = `http://localhost:3000/uploads/${img[3]}`;
  let imagenResponse3 = await fetch(imgURl3);
  let imgBlob3 = await imagenResponse3.blob();
  let imagenObjectURL3 = URL.createObjectURL(imgBlob3);
  archivo3.src = imagenObjectURL3;



  let imgURl4 = `http://localhost:3000/uploads/${img[4]}`;
  let imagenResponse4 = await fetch(imgURl4);
  let imgBlob4 = await imagenResponse4.blob();
  let imagenObjectURL4 = URL.createObjectURL(imgBlob4);
  archivo4.src = imagenObjectURL4;

  if (S_tock >= 5) {
    ProdStock.innerHTML = "stock disponible";
  } else if (S_tock > 0 && S_tock <= 4) {
    ProdStock.classList.remove("con_Stock");
    ProdStock.classList.add("sin_Stock");
    ProdStock.innerHTML = "Ultimos disponible";
  } else if (S_tock == 0) {
    ProdStock.classList.remove("con_Stock");
    ProdStock.classList.add("sin_Stock");
    ProdStock.innerHTML = "sin stock";
  }
  producto.innerHTML = prod;
  precio.innerHTML = `$ ${bestPrecio} <p class="off"> ${descuento}% OFF</p>`;
  cuotas.innerHTML = cuo;
  let cuoNum = Number(cuo);
  let preNum = Number(bestPrecio);
  interes.value = preNum / cuoNum;
  interes.textContent = interes.textContent + interes.value.toFixed(2);

  for (let i = 0; i < S_tock; i++) {
    let valor = document.createElement("option");
    valor.innerHTML = `${i + 1}/u de ${S_tock} disp`
    Cant.appendChild(valor);
  }


  if (id == null) {
    // CodeError();
  }



  if (EstaImg == null) {
    // CodeError();
  }






}

informeImg();



btn.addEventListener("click", pagar);


export { archivo };
