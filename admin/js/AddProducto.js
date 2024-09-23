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
                // Cerar un cuadro de dialogo para que se sepa que ingresaron o no los datos en la bd, borrar el formulario
                let modal = document.getElementById("modal");
                let parrafo = document.createElement("p");
                parrafo.innerHTML = data.mensaje;
            }
        }catch(err){
            console.log("Error", err)
        }
    });
