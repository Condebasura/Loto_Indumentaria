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


const Eliminar = async (el) => {
    const res = await fetch("/Product/delete", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: el.id })
    });
    const data = await res.json();
    let modal = document.getElementById("modal");
    let parrafo = document.createElement("h2");
    let cajaBtn = document.createElement("div");
    let aceptar = document.createElement("button");
    let cancelar = document.createElement("button");
    parrafo.setAttribute("class", "p_delete");
    cajaBtn.setAttribute("class", "cajabtn");
    aceptar.setAttribute("class", "aceptar");
    cancelar.setAttribute("class", "cancelar");
    parrafo.innerHTML = `Se va a eliminar de su lista el producto: <h1>${el.producto}</h1>`;
    aceptar.textContent = "Aceptar";
    cancelar.textContent = "Cancelar";
    modal.showModal();
    modal.innerHTML = "";
    modal.appendChild(parrafo);
    cajaBtn.appendChild(aceptar);
    cajaBtn.appendChild(cancelar);
    modal.appendChild(cajaBtn);

    aceptar.addEventListener("click", async (e) => {
        e.preventDefault();
        try {

            let id = el.id;
            let img = el.imagen;
            let modalDelete = document.getElementById("modal");
            let parrafoDelete = document.createElement("p");
            parrafoDelete.innerHTML = `El producto ${el.producto} fue eliminado con exito`;
            modalDelete.showModal();
            modalDelete.innerHTML = "";
            setTimeout(() => { modalDelete.appendChild(parrafoDelete), location.reload(), 100000 });
            await fetch(`/product/delete/${id}/${img}`, {
                method: "DELETE",
            });
        } catch (error) {
            console.log("Error al enviar la solicitud DELETE", error);
        }

    });

    cancelar.addEventListener("click", () => {
        modal.close();
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
   formEdit.setAttribute("class", "formEdit form mt-3 mb-3");
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

   btn.setAttribute("class", "button btn btn-primary pb-2");
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

    const titulo = document.createElement("h3");
    const NameProd = document.createElement("li");
    const NStock = document.createElement("li");
    const NDesc = document.createElement("li");
    const NPrecio = document.createElement("li");
    const NInt = document.createElement("li");
    const EstImg = el.imagen.split(",");

   MinEdit.classList.add("Min_Edit" ,"card"
,"mb-5");
   
   MinEdit.classList.remove("d-none");
   cardHeader.setAttribute("class", "card-header");
   cardBody.setAttribute("class", "card-body");
   ulCard.setAttribute("class", "list-group list-group-flush");
   NameProd.setAttribute("class", "list-group-item m-0"); 
   NStock.setAttribute("class", "list-group-item ");
   NDesc.setAttribute("class", "list-group-item "); 
   NPrecio.setAttribute("class", "list-group-item "); 
    NInt.setAttribute("class", "list-group-item ");
   cardFooter.setAttribute("class", "card-footer");

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
                let modal = document.getElementById("modal");
                console.log(modal)
                let parrafo = document.createElement("p");
                modal.innerHTML = "";
                parrafo.innerHTML = data.mensaje;
                modal.appendChild(parrafo);
                modal.showModal();
                setTimeout(() => {
                    return location.reload();
                }, 3000);
            } else if (res.status === 200) {
                let modal = document.getElementById("modal");
                let parrafo = document.createElement("p");
                modal.innerHTML = "";
                parrafo.innerHTML = data.mensaje;
                modal.appendChild(parrafo);
                modal.showModal();
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
,"mb-5");
                
                MinEdit.classList.add("d-none");
              }
            boxContent.innerHTML = "";
            boxCargas.innerHTML = "";
            texto.innerHTML = "";
            const box = document.createElement("div");
            let datosProducto = document.createElement("div");
            let img = document.createElement("img");
            let nombreProducto = document.createElement("h3");
            let hr = document.createElement("hr");
            let descuento = document.createElement("p");
            let precio = document.createElement("span");
            let stock = document.createElement("p");
            let cuotas = document.createElement("p");
            let edit = document.createElement("a");
            let delet = document.createElement("a");

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
            boxContent.classList.add("boxContent");
            boxContent.classList.remove("text-center","row", "justify-content-center");
            

            box.setAttribute("class", "box_pilcha");
            img.setAttribute("class", "image");
            nombreProducto.setAttribute("class", "name");
            datosProducto.setAttribute("class", "datos");
            descuento.setAttribute("class", "precio");
            edit.setAttribute("class", "fa-solid fa-pen-to-square");
            delet.setAttribute("class", "fa-solid fa-trash-can");

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
            if (desc === 0) {

                datosProducto.removeChild(descuento);
                precio.innerHTML = `$ ${rebajadoDe} `;
            }
            datosProducto.appendChild(precio);
            datosProducto.appendChild(cuotas);
            datosProducto.appendChild(stock);
            datosProducto.appendChild(edit);
            datosProducto.appendChild(delet);


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
        formAdd.style.display = "none";
        boxNames.innerHTML = "";
        boxContent.innerHTML = "";
        if(!MinEdit.classList.contains("d-none")){

            MinEdit.classList.remove("Min_Edit");
            MinEdit.classList.remove("card");
            MinEdit.classList.remove("mb-5");
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
               
                const res = await fetch("/Hombres/Remeras").then(res => res.json()).then(async data => {
                    DataProductos(data);

                }).catch(err => console.log("error", err))

            }

        });
        pantalones.addEventListener("click", async (e) => {
            e.preventDefault();

            if (e.target) {

                const res = await fetch("/Hombres/Pantalones").then(res => res.json()).then(async data => {
                    DataProductos(data);

                }).catch(err => console.log("error", err))

            }

        });
        accesorios.addEventListener("click", async (e) => {
            e.preventDefault();

            if (e.target) {

                const res = await fetch("/Hombres/Accesorios").then(res => res.json()).then(async data => {

                    DataProductos(data);
                }).catch(err => console.log("error", err))

            }

        });

    }
});