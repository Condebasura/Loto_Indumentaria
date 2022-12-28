const listaProductos = () => fetch("http://localhost:3001/perfil").then(respuesta => respuesta.json());

const addProducto = (producto , precio)=>{
 return fetch("http://localhost:3001/perfil", {
    method: "POST",
    headers:{
        "Content-Type": "application/json"},
        body: JSON.stringify({producto, precio , id: uuid.v4()})
 })
}

const eliminarProducto = (id) =>{
    return fetch(`http://localhost:3001/perfil/${id}`,{
        method: "DELETE"
    })
}

const detalleProducto = (id) =>{
    return fetch(`http://localhost:3001/perfil/${id}`).then((respuesta)=>
    respuesta.json()
    
    )}

    const actualizarProducto =(producto, precio, id)=>{
        return fetch(`http://localhost:3001/perfil/${id}`,{
            method: "PUT", 
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify({producto, precio})
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