const listaProductos = () => fetch(`http://localhost:3000/Hom_Remeras`)
.then(res => res.json())


const detalleProducto = ( id) =>{
   return  fetch(`http://localhost:3000/Hom_Remeras/${id}`)
    .then((respuesta)=>
    respuesta.json()
    
    )}

    const actualizarProducto =(producto, precio,cuotas, interes, id)=>{
        return fetch(`http://localhost:3000/Hom_Remeras/${id}`,{
            method: "PUT", 
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify({producto, precio, cuotas, interes})
        })
        .then(respuesta => respuesta)
        .catch(err => console.error(err));
    }

    export const inService = {
 listaProductos,

detalleProducto,
actualizarProducto,
    };