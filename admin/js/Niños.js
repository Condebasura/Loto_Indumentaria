const nenes = document.querySelector(".Nenes");


nenes.addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target){
        boxCargas.innerHTML = "";
        formAdd.style.display = "none";
        btnAdd.style.display = "none";
        btnsForm.style.display = "none";
        const remeras = document.createElement("a");
        const pantalones = document.createElement("a");
        
        remeras.innerHTML = "Remeras";
        pantalones.innerHTML = "Pantalones";
        
        boxCargas.appendChild(remeras);
        boxCargas.appendChild(pantalones);
        
       

        remeras.addEventListener("click",async (e)=>{
            e.preventDefault();
           
         if(e.target){
          
            const res = await fetch("/Child.html/producto").then(res =>  res.json()).then(async data=>{
                
                let datos = JSON.stringify(data);
        let obj = JSON.parse(datos);
        
        for(let el of obj){
        
        if(el.seccion == "Niño" && el.subSeccion == "Remeras") {
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
        let car = document.createElement("a");
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
        datosProducto.appendChild(car);
        
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
          
            const res = await fetch("/Child.html/producto").then(res =>  res.json()).then(async data=>{
                
                let datos = JSON.stringify(data);
        let obj = JSON.parse(datos);
        
        for(let el of obj){
        
        if(el.seccion == "Niño" && el.subSeccion == "Pantalones") {
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
        let car = document.createElement("a");
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
        datosProducto.appendChild(car);
        
        }
        }
        boxCargas.appendChild(boxContent);
        boxContent.appendChild($fragment);
                }).catch(err => console.log("error", err))
                        
        }
        
        });
        
        
    }
    })