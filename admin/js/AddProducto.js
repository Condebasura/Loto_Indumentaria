const form = document.querySelector(".formAdd");
let nombre = document.querySelector(".ProductName"),
stock = document.querySelector(".stock"),
descuento = document.querySelector(".Desc"),
precio = document.querySelector(".bestprecio"),
cuotas = document.querySelector(".cuotas"),
seccion = document.querySelector(".seccion"),
subSeccion = document.querySelector(".sub_seccion"),
archivos = document.querySelector(".image");

// ya se muestra cuantos archivos se seleccionan, ahora hay que agregar el por defecto si no se selecciona otro en los campos que sobran
archivos.addEventListener("change", (e)=>{
   const ElArchivo = e.target.files;
   console.log(`se seleccionaron ${ElArchivo.length} archivos`)
})

form.addEventListener("submit",async (e)=>{
    e.preventDefault();
    
        let fromData = new FormData(e.target);
        fromData.append("nombre", nombre.value);
        fromData.append("stock", stock.value);
        fromData.append("descuento", descuento.value);
        fromData.append("precio", precio.value);
        fromData.append("cuotas", cuotas.option);
        fromData.append("seccion",seccion.option);
        fromData.append("subSeccion", subSeccion.option);
        try{
            const res = await fetch("/addProducto", {
                method: "POST",
                body: fromData
            });
            
            const data = await res.json();
            
            if(res.ok){
                let modal = document.getElementById("modal");
                let parrafo = document.createElement("p");
                modal.innerHTML = "";
                parrafo.innerHTML = data.mensaje;
                modal.appendChild(parrafo);
                modal.showModal();
            }else if(res.status === 209){
                let modal = document.getElementById("modal");
                let parrafo = document.createElement("p");
                modal.innerHTML = "";
                parrafo.innerHTML = data.mensaje;
                modal.appendChild(parrafo);
                modal.showModal();
            }
        }catch(err){
            console.log("Error", err)
        }
    });
