const listaProductos = () => fetch("http://localhost:3000/perfil").then(respuesta => respuesta.json());

const addProducto = (producto , precio, cuotas, interes, archivo)=>{
 return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers:{
        "Content-Type": "application/json"},
        body: JSON.stringify({producto, precio ,cuotas, interes, archivo, id: uuid.v4()})
 })
}

const eliminarProducto = (id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method: "DELETE"
    })
}

const detalleProducto = (id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta)=>
    respuesta.json()
    
    )}

    const actualizarProducto =(producto, precio,cuotas,interes, archivo, id)=>{
        return fetch(`http://localhost:3000/perfil/${id}`,{
            method: "PUT", 
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify({producto, precio, cuotas, interes, archivo})
        })
        .then(respuesta => respuesta)
        .catch(err => console.error(err));
    }

    export const inService = {
 listaProductos,
addProducto,
eliminarProducto,
detalleProducto,
actualizarProducto,
    };