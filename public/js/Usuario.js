let modalcontainer = document.getElementById("modalContainer");
const DivUser = document.querySelector(".Login_Regis");
const Create = document.querySelector(".Create");
const Login = document.querySelector(".Login");
const boxCargas = document.querySelector(".boxCargas");
const cajaUltimas = document.querySelector(".cajaUltimas");
const contUltimas = document.querySelector(".contUltimas");
const prodSearch = document.querySelector(".product");

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

const verProd = async (el, bestPrecio, rebajadoDe, imagenObjectURL, interes) => {



    boxCargas.innerHTML = "";
    contUltimas.classList.add("d-none");




    let lasImgs = el.imagen.split(",");

    const loadImage = async (imgName) => {
        let imgURL = `http://localhost:3000/uploads/${imgName}`;
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
    boxCargas.classList.remove("boxCargas", "conteiner-fluid");
    boxCargas.classList.add("boxCargasVisu", "conteiner-fluid");
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

    miniImg.addEventListener("mousedown", (e) => {
        foto = e.target;

        let imgSrc = foto.getAttribute("src");
        imgZoom.setAttribute("src", imgSrc);

        document.addEventListener("mousedown", (e) => {
            if (e.target != foto || imgZoom.getAttribute("src") == "null") {
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
        btn.setAttribute("disabled", "");
    };

    let cuo = el.cuotas;
    let cuoNum = Number(cuo);
    let preNum = Number(rebajadoDe);
    if (cuoNum === 1) {
        interes.textContent = `cuota sin interes de ${rebajadoDe.toFixed(2)}`;
    } else {

        interes.value = preNum / cuoNum;
        interes.textContent = interes.textContent + interes.value.toFixed(2);
    }

    for (let i = 0; i < el.stock; i++) {
        let valor = document.createElement("option");
        valor.innerHTML = `${i + 1} de ${el.stock} disp`;
        Cant.appendChild(valor);

    }



    let CantSelec = 1;
    const CantSelecEnNumeros = () => {
        Cant.addEventListener("change", (e) => {

            let cant = e.target.value;
            let PrimerosCaracteres = cant.substring(0, 2);
            CantSelec = Number(PrimerosCaracteres);

        })
    };
    CantSelecEnNumeros();


    let link = document.querySelector(".med_pago");

    link.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target) {
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

            modtabi.setAttribute("class", "modal");
            modtabi.setAttribute("tabindex", "-1");
            modDialog.setAttribute("class", "modal-dialog");
            modContent.setAttribute("class", "modal-content");
            modHeader.setAttribute("class", "modal-header text-bg-primary");
            titulo.setAttribute("class", "modal-title");
            btnClose.setAttribute("class", "btn-close");
            btnClose.setAttribute("type", "button");
            btnClose.setAttribute("data-bs-dismiss", "modal");
            btnClose.setAttribute("aria-label", "Close");
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

            modtabi.addEventListener("hidden.bs.modal", () => {
                modalcontainer.innerHTML = "";
                modtabi.setAttribute("aria-hidden", "true");
                modtabi.setAttribute("inert", "");
            })

        }
    });


    let formEnv = document.querySelector(".form_Env");
    let polit = document.querySelector(".polit");

    formEnv.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target) {
            let titulo = document.createElement("h4");
            titulo.innerHTML = "Formas de envio";
            let textBody = document.createElement("div");
            textBody.innerHTML = "<p class='mb-4'><strong> realizamos envíos a todo el país con las siguientes opciones:</strong></p><br><p><i class='fa-solid fa-truck link-success'></i> <strong>Envío Estándar</strong> (3 a 7 días hábiles) - A través de correo postal. El costo varía según la ubicación.</p><br><p><i class='fa-solid fa-truck-fast link-danger'></i> <strong> Envío Rápido</strong> (24 a 48 horas hábiles) - Disponible en ciertas zonas. Consulta disponibilidad antes de comprar.</p><br><p><i class='fa-solid fa-cube link-warning'></i> <strong> Envíos Gratis</strong> En compras mayores a $150000 ofrecemos envío gratuito.</p>"

            funcModal(textBody, titulo);

        }
    });



    polit.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target) {
            let titulo = document.createElement("h4");
            titulo.innerHTML = "Politicas de Devolución";
            let textBody = document.createElement("div");
            textBody.innerHTML = "<p>Si no estás satisfecho con tu compra, puedes solicitar un cambio o devolución dentro de los 7 días posteriores a la recepción del pedido</p><br><p>•La prenda debe estar en su estado original, sin uso y con etiquetas.</p><br><p>•No aceptamos devoluciones en productos en oferta o personalizados.</p><br><p>•El costo del envío en devoluciones es a cargo del cliente, salvo por productos con defectos de fábrica.</p><br><p>•Para gestionar una devolución, contáctanos a través de nuestro email o WhatsApp.</p>"

            funcModal(textBody, titulo);

        }
    })
    const pagar = async (bestPrecio) => {
        const precio = document.querySelector(".bestprecio");
        const precnmb = precio.innerHTML;
        const Elnum = precnmb.slice(1, 8);
        let EnNumeros = Number(Elnum);

        let total = CantSelec * EnNumeros;


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



                                    const url = window.location.href;
                                    resolve(response)



                                    const mp = new MercadoPago('TEST-cda8ecd5-5002-43a8-a7d3-172588165057', { // Add your public key credential
                                        locale: 'es-AR'
                                    })

                                    const bricksStatus = mp.bricks();
                                    const renderStatusScreenBrick = async (bricksStatus) => {


                                        const settings = {
                                            initialization: {
                                                paymentId: response, // Payment identifier, from which the status will be checked
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
        PayBrinck.setAttribute("class", "m-5 p-5 gy-4 border")
        renderPaymentBrick(bricksBuilder);
        boxCargas.innerHTML = "";
        boxCargas.appendChild(PayBrinck)
    }

    btn.addEventListener("click", pagar);

}
// Carga los datos del usuario al logearse
const dataUsuario = async () => {

    const tokenName = 'mitoken';
    const cookies = document.cookie.split(';').map(cookie => cookie.trim().split('='));

    const cookie = cookies.find(([name, value]) => name === tokenName);
    const tokenValue = cookie[1];
    const tokenPayload = tokenValue.split('.')[1];
    const decodedPayload = JSON.parse(window.atob(tokenPayload));
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    const res = await fetch('usuario', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${getCookie('token')}`,
        }
    });

    if (!res.ok) {
        const data = await res.json();
        return data.mensaje;


    } else {
        let datos = decodedPayload;

        const Logout = document.createElement("button");
        const editPerfil = document.createElement("a");
        const CajaCanvas = document.createElement("div");
        const canHeader = document.createElement("div");
        let title = document.createElement("h5");
        const btnClose = document.createElement("button");
        const canBody = document.createElement("div");
        const canFooter = document.createElement("div");
        const ulFavComp = document.createElement("ul");

        const perfil = document.createElement("li");
        const LogoPerfil = document.createElement("i");
        const spanPerfil = document.createElement("span");


        const accordion = document.createElement("div");
        const accItem = document.createElement("div");
        const accHeader = document.createElement("h4");
        const accColapse = document.createElement("div");
        const accBody = document.createElement("div");
        const favoritos = document.createElement("button");
        const LogoFav = document.createElement("i");
        const spanFav = document.createElement("span");


        const compras = document.createElement("li");
        const LogoComp = document.createElement("i");
        const spanCompras = document.createElement("span");


        Logout.setAttribute("class", "Logout  btn btn-danger");

        editPerfil.setAttribute("class", "btn btn-outline-success rounded-circle");
        editPerfil.setAttribute("data-bs-toggle", "offcanvas");
        editPerfil.setAttribute("href", "#offcanvasExample");
        editPerfil.setAttribute("role", "button");
        editPerfil.setAttribute("aria-controls", "offcanvasExample");
        editPerfil.setAttribute("data-bs-target", "#offcanvasExample");

        CajaCanvas.setAttribute("class", "offcanvas offcanvas-start");
        CajaCanvas.setAttribute("tabindex", "-1");
        CajaCanvas.setAttribute("id", "offcanvasExample");
        CajaCanvas.setAttribute("aria-labelledby", "offcanvasExampleLabel");


        canHeader.setAttribute("class", "offcanvas-header border-bottom text-bg-primary");
        title.setAttribute("class", "offcanvas-title");
        title.setAttribute("id", "offcanvasExampleLabel");
        btnClose.setAttribute("type", "button");
        btnClose.setAttribute("class", "btn-close");
        btnClose.setAttribute("data-bs-dismiss", "offcanvas");
        btnClose.setAttribute("aria-label", "Close");

        accordion.setAttribute("class","accordion");
        accordion.setAttribute("id","accordionExample");
        accItem.setAttribute("class", "accordion-item");
        accHeader.setAttribute("class", "accordion-header");
        accColapse.setAttribute("id","colapseOne");
        accColapse.setAttribute("class","accordion-collapse collapse");
        accColapse.setAttribute("data-bs-parent","#accordionExample");
        accBody.setAttribute("class", "accordion-body ps-1 pe-1  text bg-secondary ");

        canBody.setAttribute("class", "offcanvas-body p-0");
        ulFavComp.setAttribute("class", "list-group border-1 mt-5");
        favoritos.setAttribute("class", "fav list-group-item accordion-button");
        favoritos.setAttribute("type", "button");
        favoritos.setAttribute("data-bs-toggle", "collapse");
        favoritos.setAttribute("data-bs-target", "#colapseOne");
        favoritos.setAttribute("aria-expanded", "true");
        favoritos.setAttribute("aria-controls", "colapseOne");
        LogoFav.setAttribute("class", "fa-solid fa-heart me-1");

        compras.setAttribute("class", "list-group-item comp");
        LogoComp.setAttribute("class", "fa-solid fa-cart-shopping ");


        perfil.setAttribute("class", "list-group-item per");
        LogoPerfil.setAttribute("class", "fa-solid fa-address-card");

        canFooter.setAttribute("class", "offcanvas-footer  text-end justify-content-end text-bg-dark p-3");


        Logout.innerHTML = "Logout";
        editPerfil.innerHTML = `${datos.nombre[0]}`;
        title.innerHTML = `${datos.nombre}`;
        spanPerfil.innerHTML = "  Perfil";
        spanFav.innerHTML = "  Favoritos";
        spanCompras.innerHTML = "  Compras";

        canHeader.appendChild(title);
        canHeader.appendChild(btnClose);
        perfil.appendChild(LogoPerfil);
        perfil.appendChild(spanPerfil);
        ulFavComp.appendChild(perfil);

        compras.appendChild(LogoComp);
        compras.appendChild(spanCompras);
         
        
       accordion.appendChild(accItem);
       accItem.appendChild(accHeader);
       accHeader.appendChild(favoritos);
       accItem.appendChild(accColapse);
        accColapse.appendChild(accBody);
        favoritos.appendChild(LogoFav);
        favoritos.appendChild(spanFav);
         
        ulFavComp.appendChild(compras);
        ulFavComp.appendChild(accordion)
        canBody.appendChild(ulFavComp);

        canFooter.appendChild(Logout);

        CajaCanvas.appendChild(canHeader)
        CajaCanvas.appendChild(canBody);
        CajaCanvas.appendChild(canFooter);
        document.body.appendChild(CajaCanvas);

        DivUser.removeChild(Login);
        DivUser.removeChild(Create);
        DivUser.appendChild(editPerfil);

        perfil.addEventListener("click", (e) => {
            modalcontainer.innerHTML = "";




            if (e.target) {

                const modalPerf = document.createElement("div");
                modalPerf.setAttribute("class", "modal  modalPerf");
                modalPerf.setAttribute("tabindex", "-1");




                modalPerf.innerHTML = `<div class="modal-dialog">
            <div class="modal-content contenido">
            <div class="modal-header border-0 text-bg-primary p-3">
            <h5 class="modal-title border-bottom">Datos personales</h5>
            </div>

            <div class="modal-body">
            <form class="form m-3 " id="form-Actualizar">
            <div class="row g-3 ">
            <div class="col-6 form-floating">
             <input
             name="nombre"
             id="name floatingInput"
             class="form-control Nombre"
             type="text"
             placeholder=
             />
             <label class="input-label" for="floatingInput">Nombre
             </label>

            </div>
            <div class="col-6 form-floating">
             <input
             name="apellido"
             id="floatingInput"
             class="form-control Apellido"
             type="text"
             placeholder=
             />
             <label class="input-label" for="floatingInput">Apellido
             </label>

            </div>

            <div class="col-6 form-floating text-truncate">
             <input
             name="correo"
             id="email floatingInput"
             class="form-control email"
             type="email"
             placeholder= "email"
             disabled
             />
             <label class="input-label" for="floatingInput">email
             </label>

            </div>
             <div class="col-6 form-floating">
             <input
             name="password"
             id=" pass floatingInput"
             class="form-control Password"
             type="password"
             placeholder="password"
             />
             <label class="input-label" for="floatingInput">password
             </label>

            </div>

            </div>
            </form>
            </div>
            <div class="modal-footer text-bg-dark p-3">
            <button type="button" class="btn btn-outline-warning Cancelar  " id="Cancelar">Cancelar
            </button>
            <button type="submit" class="btn btn-outline-success "form="form-Actualizar" id="Guardar">Guardar
            </button>
            </div>
            
            
            </div>
            </div>`
                    ;

                modalcontainer.innerHTML = "";

                modalcontainer.appendChild(modalPerf);


                modalPerf.removeAttribute("inert");
                modalPerf.removeAttribute("aria-hidden");
                const bootstrapModal = new bootstrap.Modal(modalPerf);
                bootstrapModal.show();

                modalPerf.addEventListener("hidden.bs.modal", () => {
                    modalcontainer.innerHTML = "";
                    modalPerf.setAttribute("aria-hidden", "true");
                    modalPerf.setAttribute("inert", "");
                })

                const form = document.querySelector("form");
                let nombre = document.querySelector('[name="nombre"]');
                let apellido = document.querySelector('[name="apellido"]');
                let correo = document.querySelector('[name="correo"]');
                correo.setAttribute("disabled", "");
                let password = document.querySelector('[name="password"]')

                nombre.value = `${datos.nombre}`;
                apellido.value = `${datos.apellido}`;
                correo.value = `${datos.email}`;




                form.addEventListener("submit", async (e) => {
                    e.preventDefault();

                    const Actdata = async (nombre, apellido, correo, password) => {

                        try {
                            const res = await fetch('/usuario/update', {
                                method: "PUT",
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ nombre, apellido, correo, password })
                            });
                            if (!res.ok) {
                                console.log("Ocurrio un error al actualizar los datos");
                            }
                            else if (password.value === "") {
                                password.value = `${datos.password}`;
                            }
                            else {

                                const dat = await res.json();

                                let newToken = dat.token;

                                const newtokens = `${tokenName}=${newToken}`.split(';').map(cookie => cookie.trim().split('='));
                                ;
                                const lecokie = newtokens.find(([name, value]) => name === tokenName);
                                const tokVlue = lecokie[1];


                                const toquepayloda = tokVlue.split('.')[0];
                                const delcodepaylodad = JSON.parse(window.atob(toquepayloda));


                                let newdatos = delcodepaylodad;


                                document.cookie = `${tokenName}=${newToken}`;
                                return window.location.reload();
                            }


                        } catch (error) {

                        }
                    }

                    Actdata(nombre.value, apellido.value, correo.value, password.value)
                })

                document.getElementById("Cancelar").addEventListener("click", () => {
                    modalcontainer.innerHTML = "";
                    modalPerf.setAttribute("aria-hidden", "true");
                    modalPerf.setAttribute("inert", "");
                    bootstrapModal.hide();
                });




            }
        });
              // agrega y visualiza favoritos
        favoritos.addEventListener("click", (e) => {
            e.preventDefault();
           
             accBody.innerHTML = "";
             
             
            let usuario = datos.email;

            const verFavoritos = async (usuario) => {

                const res = await fetch("/usuario/getFavoritos", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ usuario })
                });

                let DatosFavoritos = await res.json();
                let DatFav = DatosFavoritos.productosFavoritos;

                let LosFavoritos = [];

                for (let dFav of DatFav) {
                    let inFav = dFav[0];
                    LosFavoritos.push(inFav);
                };

               

                const ulFav = document.createElement("ul");

                ulFav.setAttribute("class", "list-group border-1");
                LosFavoritos.forEach(async (el) => {
                    let spFav = document.createElement("span");
                    let deleteFav = document.createElement("i");
                    let fav = document.createElement("li");

                    spFav.setAttribute("class", "ms-2 ")
                    deleteFav.setAttribute("class", "fa-solid fa-trash-can link-danger");
                    fav.setAttribute("class", "list-group-item favo mb-1 text-truncate border-0");
                    spFav.innerHTML = el.producto;
                    fav.appendChild(deleteFav);
                    fav.appendChild(spFav);
                    
                    ulFav.appendChild(fav);
                    
                    let bestPrecio = Number(el.precio);
                    let desc = Number(el.descuento);
                    let porcentaje = (bestPrecio * desc) / 100;
                    let rebajadoDe = bestPrecio - porcentaje;

                    let img1 = el.imagen.split(",")[0];
                    let imgURl = `http://localhost:3000/uploads/${img1}`;
                    let imagenResponse = await fetch(imgURl);
                    let imgBlob = await imagenResponse.blob();
                    let imagenObjectURL = URL.createObjectURL(imgBlob);
                    
                    fav.addEventListener("click", (e) => {
                        e.preventDefault();

                        verProd(el, bestPrecio, rebajadoDe, imagenObjectURL)
                    })

                })

                accBody.appendChild(ulFav);

            }
            verFavoritos(usuario);


        })

        Logout.addEventListener("click", async (e) => {
            e.preventDefault();
            try {
                if (e.target) {
                    const res = await fetch("/logout", {
                        method: "GET",
                    });


                    const offcanvasInstance = bootstrap.Offcanvas.getInstance(CajaCanvas)
                    offcanvasInstance.hide();
                    DivUser.removeChild(editPerfil);
                    DivUser.appendChild(Login);
                    DivUser.appendChild(Create);


                }
            } catch (error) {
                console.log(error)
            }
        })
    }
}


dataUsuario();