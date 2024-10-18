const nenas = document.querySelector(".Nenas");


nenas.addEventListener("click", (e)=>{
    e.preventDefault();

    if(e.target){
        formAdd.style.display = "none";
        btnAdd.style.display = "none";
        btnsForm.style.display = "none";
        boxContent.innerHTML = "";
        boxNames.innerHTML = "";
        const remeras = document.createElement("a");
        const pantalones = document.createElement("a");
        const vestidos = document.createElement("a");
        remeras.innerHTML = "Remeras";
        pantalones.innerHTML = "Pantalones";
         vestidos.innerHTML = "Vestidos";
        boxNames.appendChild(remeras);
        boxNames.appendChild(pantalones);
        boxNames.appendChild(vestidos);
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
        });

        remeras.addEventListener("click",async (e)=>{
            e.preventDefault();
           
         if(e.target){
          
            const res = await fetch("/Nenas.html/producto").then(res =>  res.json()).then(async data=>{
                
                let datos = JSON.stringify(data);
        let obj = JSON.parse(datos);
        
        for(let el of obj){
        
        if(el.seccion == "Niña" && el.subSeccion == "Remeras") {
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
        
        
        pantalones.addEventListener("click",async (e)=>{
            e.preventDefault();
           
         if(e.target){
          
            const res = await fetch("/Nenas.html/producto").then(res =>  res.json()).then(async data=>{
                
                let datos = JSON.stringify(data);
        let obj = JSON.parse(datos);
        
        for(let el of obj){
        
        if(el.seccion == "Niña" && el.subSeccion == "Pantalones") {
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
        
        vestidos.addEventListener("click",async (e)=>{
            e.preventDefault();
           
         if(e.target){
          
            const res = await fetch("/Nenas.html/producto").then(res =>  res.json()).then(async data=>{
                
                let datos = JSON.stringify(data);
        let obj = JSON.parse(datos);
        
        for(let el of obj){
        
        if(el.seccion == "Niña" && el.subSeccion == "Vestidos") {
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

    }
    })