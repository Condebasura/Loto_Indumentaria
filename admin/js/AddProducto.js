const form = document.querySelector(".formAdd");
let nombre = document.querySelector(".ProductName"),
descuento = document.querySelector(".Desc"),
precio = document.querySelector(".bestprecio"),
cuotas = document.querySelector(".cuotas"),
seccion = document.querySelector(".seccion"),
subSeccion = document.querySelector(".sub_seccion"),
archivos = document.querySelector(".image");



    form.addEventListener("submit",async (e)=>{
        e.preventDefault();
        
        let fromData = new FormData(e.target);
        fromData.append("nombre", nombre.value);
        fromData.append("descuento", descuento.value);
        fromData.append("precio", precio.value);
        fromData.append("cuotas", cuotas.value);
        fromData.append("seccion",seccion.value);
        fromData.append("subSeccion", subSeccion.value);
        try{
            const res = await fetch("/addProducto", {
                method: "POST",
                body: fromData
            });
            
            const data = await res.json();
            console.log(data)
        }catch(err){
            console.log("Error", err)
        }
    });
