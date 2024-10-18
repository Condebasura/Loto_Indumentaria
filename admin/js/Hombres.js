const Add = document.querySelector(".AddProducto");
const formAdd = document.querySelector(".container_flex");
const btnsForm = document.querySelector(".input-container_flex");
const boxCargas = document.querySelector(".box_cargas");
const btnAdd = document.querySelector(".button");
const hombre = document.querySelector(".Hombres");
const boxNames = document.createElement("div");
const boxContent = document.createElement("div");
const $fragment = document.createDocumentFragment();



hombre.addEventListener("click", (e)=>{
    e.preventDefault();

    if(e.target){
        formAdd.style.display = "none";
        btnAdd.style.display = "none";
        btnsForm.style.display = "none";
        boxNames.innerHTML = "";
        boxContent.innerHTML = "";
        const remeras = document.createElement("a");
        const pantalones = document.createElement("a");
        const accesorios = document.createElement("a");
        remeras.innerHTML = "Remeras";
        pantalones.innerHTML = "Pantalones";
         accesorios.innerHTML = "Accesorios";
        boxNames.appendChild(remeras);
        boxNames.appendChild(pantalones);
        boxNames.appendChild(accesorios);
        boxCargas.appendChild(boxNames);
        Add.addEventListener("click", (e)=>{
            e.preventDefault();
            if(e.target){
             formAdd.style.display = "block";
                btnAdd.style.display = "block";
                btnsForm.style.display = "block";
                // el boxCarga en "" me queta el formulario para ingresar productos , intentarlo con css mejor.
                boxNames.innerHTML = "";
                boxContent.innerHTML = "";
            }
        })
        remeras.addEventListener("click",async (e)=>{
            e.preventDefault();
           
         if(e.target){
          
            const res = await fetch("/Hombres.html/producto").then(res =>  res.json()).then(async data=>{
                
                let datos = JSON.stringify(data);
     let obj = JSON.parse(datos);
    
     for(let el of obj){
        
       if(el.seccion == "Hombre" && el.subSeccion == "Remeras") {
        boxContent.innerHTML = "";
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
        
        if(el.stock >= 5){
            stock.innerHTML = "stock disponible";
        }else if(el.stock > 0 && el.stock <= 4){
            stock.innerHTML = "Ultimos disponible";
        }else if(el.stock === 0){
            stock.innerHTML = "sin stock";
        }
    
        box.setAttribute("class", "box_pilcha");
        img.setAttribute("class", "image");
        nombreProducto.setAttribute("class", "name");
        datosProducto.setAttribute("class","datos");
        descuento.setAttribute("class", "precio");
        edit.setAttribute("class", "fa-solid fa-pen-to-square");
        delet.setAttribute( "class","fa-solid fa-trash-can");

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
       img.addEventListener("click", (e)=>{
        e.preventDefault();
        if(e.target){
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
        datosProducto.appendChild(edit);
        datosProducto.appendChild(delet);
       

        delet.addEventListener("click",async (e)=>{
            e.preventDefault();
            if(e.target){
                const res = await fetch("/Product/delete", {
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({id:el.id})
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
                     try{
                      
                      let id = el.id;
                      let img = el.imagen;
                      let modalDelete = document.getElementById("modal");
                      let parrafoDelete = document.createElement("p");
                      parrafoDelete.innerHTML = `El producto ${el.producto} fue eliminado con exito`;
                      modalDelete.showModal();
                      modalDelete.innerHTML = "";
                      setTimeout(() => { modalDelete.appendChild(parrafoDelete), location.reload(), 100000 });  
                        await fetch(`/product/delete/${id}/${img}`,{
                           method: "DELETE",
                         }); 
                     }catch(error){
                      console.log("Error al enviar la solicitud DELETE", error);
                     }
                   
                    });
                    
                cancelar.addEventListener("click", () => {
                  modal.close();
                }) 
            }
        
        });


        edit.addEventListener("click", (e)=>{
            e.preventDefault();
            if(e.target){
                const form = document.createElement("form");
                const Nombre = document.createElement("h2");
                const LabelProd = document.createElement("label");
               const nomProd = document.createElement("input");
               const LabelStock = document.createElement("label");
               const InpStock = document.createElement("input");
               const LabelDesc = document.createElement("label")
               const InpDesc = document.createElement("input");
               const LabPrecio = document.createElement("label");
               const InpPrecio = document.createElement("input");
               const LabSInt = document.createElement("label");
               const InpSInt = document.createElement("select")
               const archivo = document.createElement("input");
               const btn = document.createElement("button");

               Nombre.innerHTML = "Editar Producto";
               LabelProd.innerHTML = "Nombre del Producto";
               LabelStock.innerHTML = "Stock";
               LabelDesc.innerHTML = "Descuento del";
               LabPrecio.innerHTML = "Precio";
               LabSInt.innerHTML = "Cuotas(Sin interes)";
                archivo.innerHTML = "Seleccionar imagenes";
                btn.innerHTML = "Finalizar Edicion";

               nomProd.value = el.producto;
               InpStock.value = el.stock;
               InpDesc.value = el.descuento;
               InpPrecio.value = el.precio;
        
               archivo.setAttribute("type", "file");
               btn.setAttribute("type", "submit");
               
               form.appendChild(Nombre);
               form.appendChild(LabelProd);
               form.appendChild(nomProd);
               form.appendChild(LabelStock);
               form.appendChild(InpStock);
               form.appendChild(LabelDesc)
               form.appendChild(InpDesc)
               form.appendChild(LabPrecio)
               form.appendChild(InpPrecio)
               form.appendChild(LabSInt)
               form.appendChild(InpSInt)
               let Nums = ["1","2","3","6","9","12"];
              for(let i of Nums){
                  if(i.length > 0){
                      const valor = document.createElement("option");
                      valor.innerHTML = i;
                      valor.value = i;
                      InpSInt.appendChild(valor);
           
               }
              } 
               form.appendChild(archivo);
               form.appendChild(btn);
            
               $fragment.appendChild(form);
               
               boxCargas.appendChild(boxContent);
               boxContent.appendChild($fragment);
               boxContent.removeChild(box);
               

            }
        })
    }
    }
   boxCargas.appendChild(boxContent);
    boxContent.appendChild($fragment);
                }).catch(err => console.log("error", err))
                        
        }
        
    });
    pantalones.addEventListener("click",async (e )=>{
        e.preventDefault();
       
     if(e.target){
      
        const res = await fetch("/Hombres.html/producto").then(res =>  res.json()).then(async data=>{
            
            let datos = JSON.stringify(data);
    let obj = JSON.parse(datos);
    
    for(let el of obj){
    
    if(el.seccion == "Hombre" && el.subSeccion == "Pantalones") {
    boxContent.innerHTML = "";
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
    
    if(el.stock > 1){
        stock.innerHTML = "stock disponible";
    }else if(el.stock === 1){
        stock.innerHTML = "Ultimo disponible";
    }else if(el.stock < 1){
        stock.innerHTML = "sin stock";
    }
    
    box.setAttribute("class", "box_pilcha");
    img.setAttribute("class", "image");
    nombreProducto.setAttribute("class", "name");
    datosProducto.setAttribute("class","datos");
    descuento.setAttribute("class", "precio");
    edit.setAttribute("class","fa-solid fa-pen-to-square");
    delet.setAttribute( "class","fa-solid fa-trash-can");

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
    img.addEventListener("click", (e)=>{
        e.preventDefault();
        if(e.target){
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
    datosProducto.appendChild(edit);
    datosProducto.appendChild(delet);
     
    delet.addEventListener("click",async (e)=>{
        e.preventDefault();
        if(e.target){
            const res = await fetch("/Product/delete", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({id:el.id})
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
                 try{
                  
                  let id = el.id;
                  let img = el.imagen;
                  let modalDelete = document.getElementById("modal");
                  let parrafoDelete = document.createElement("p");
                  parrafoDelete.innerHTML = `El producto ${el.producto} fue eliminado con exito`;
                  modalDelete.showModal();
                  modalDelete.innerHTML = "";
                  setTimeout(() => { modalDelete.appendChild(parrafoDelete), location.reload(), 100000 });  
                    await fetch(`/product/delete/${id}/${img}`,{
                       method: "DELETE",
                     }); 
                 }catch(error){
                  console.log("Error al enviar la solicitud DELETE", error);
                 }
               
                });
                
            cancelar.addEventListener("click", () => {
              modal.close();
            }) 
        }
    
    });
    
    }
    }
    boxCargas.appendChild(boxContent);
    boxContent.appendChild($fragment);
            }).catch(err => console.log("error", err))
                    
    }
    
    });
    accesorios.addEventListener("click",async (e)=>{
        e.preventDefault();
       
     if(e.target){
      
        const res = await fetch("/Hombres.html/producto").then(res =>  res.json()).then(async data=>{
            
            let datos = JSON.stringify(data);
    let obj = JSON.parse(datos);
    
    for(let el of obj){
    
    if(el.seccion == "Hombre" && el.subSeccion == "Accesorios") {
    boxContent.innerHTML = "";
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

    //descuento
    let bestPrecio = Number(el.precio);
    let desc = Number(el.descuento);
    let porcentaje = (bestPrecio * desc) / 100;
    let rebajadoDe = bestPrecio - porcentaje;
    
    if(el.stock > 1){
        stock.innerHTML = "stock disponible";
    }else if(el.stock === 1){
        stock.innerHTML = "Ultimo disponible";
    }else if(el.stock < 1){
        stock.innerHTML = "sin stock";
    }
    
    box.setAttribute("class", "box_pilcha");
    img.setAttribute("class", "image");
    nombreProducto.setAttribute("class", "name");
    datosProducto.setAttribute("class","datos");
    descuento.setAttribute("class", "precio");
    edit.setAttribute("class","fa-solid fa-pen-to-square");        delet.setAttribute( "class","fa-solid fa-trash-can");
    delet.setAttribute( "class","fa-solid fa-trash-can");

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
    img.addEventListener("click", (e)=>{
        e.preventDefault();
        if(e.target){
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
    datosProducto.appendChild(edit);
    datosProducto.appendChild(delet);

    delet.addEventListener("click",async (e)=>{
        e.preventDefault();
        if(e.target){
            const res = await fetch("/Product/delete", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({id:el.id})
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
                 try{
                  
                  let id = el.id;
                  let img = el.imagen;
                  let modalDelete = document.getElementById("modal");
                  let parrafoDelete = document.createElement("p");
                  parrafoDelete.innerHTML = `El producto ${el.producto} fue eliminado con exito`;
                  modalDelete.showModal();
                  modalDelete.innerHTML = "";
                  setTimeout(() => { modalDelete.appendChild(parrafoDelete), location.reload(), 100000 });  
                    await fetch(`/product/delete/${id}/${img}`,{
                       method: "DELETE",
                     }); 
                 }catch(error){
                  console.log("Error al enviar la solicitud DELETE", error);
                 }
               
                });
                
            cancelar.addEventListener("click", () => {
              modal.close();
            }) 
        }
    
    });
    
    }
    }
    boxCargas.appendChild(boxContent);
    boxContent.appendChild($fragment);
            }).catch(err => console.log("error", err))
                    
    }
    
    });

    }
});