const producto = document.querySelector(".name");
   const precio = document.querySelector(".bestprecio");
   const cuotas = document.querySelector(".cuotas");
   let archivo = document.querySelector(".image");



const listaProductosH_R = () => fetch(`http://localhost:3000/H-Rem`)
    .then(res => res.json()
    ).catch(err => console.log(err))
    
     
    
        


const detalleProductoH_R = (id) => {
    return fetch(`http://localhost:3000/H-Rem/${id}`).then((res) =>  res.json()
            
        )
}

const actualizarProductoH_R = (producto, precio, cuotas, archivo, id) => {
    return fetch(`http://localhost:3000/H-Rem/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas, archivo })
    })
        .then(res =>{
            res.json();
        
        } )
        .catch(err => console.error(err));
};


const listaProductosH_P = () => fetch(`http://localhost:3000/H-Pant`)
    .then(res => res.json())


const detalleProductoH_P = (id) => {
    return fetch(`http://localhost:3000/H-Pant/${id}`)
        .then((res) =>
            res.json()

        )
}

const actualizarProductoH_P = (producto, precio, cuotas, archivo, id) => {
    return fetch(`http://localhost:3000/H-Pant/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas, archivo })
    })
        .then(res => res.json())
        .catch(err => console.error(err));
};


const listaProductosH_A = () => fetch(`http://localhost:3000/H-Acce`)
    .then(res => res.json())


const detalleProductoH_A = (id) => {
    return fetch(`http://localhost:3000/H-Acce/${id}`)
        .then((res) =>
            res.json()

        )
}

const actualizarProductoH_A = (producto, precio, cuotas,  archivo, id) => {
    return fetch(`http://localhost:3000/H-Acce/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas,  archivo })
    })
        .then(res => res.json())
        .catch(err => console.error(err));
}


const listaProductosW_R = () => fetch(`http://localhost:3000/M-Rem`)
    .then(res => res.json())


const detalleProductoW_R = (id) => {
    return fetch(`http://localhost:3000/M-Rem/${id}`)
        .then((res) =>
            res.json()

        )
}

const actualizarProductoW_R = (producto, precio, cuotas,  archivo, id) => {
    return fetch(`http://localhost:3000/M-Rem/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas, archivo })
    })
        .then(res => res.json())
        .catch(err => console.error(err));
}


const listaProductosW_P = () => fetch(`http://localhost:3000/M-Pant`)
    .then(res => res.json())


const detalleProductoW_P = (id) => {
    return fetch(`http://localhost:3000/M-Pant/${id}`)
        .then((res) =>
            res.json()

        )
}

const actualizarProductoW_P = (producto, precio, cuotas,  archivo, id) => {
    return fetch(`http://localhost:3000/M-Pant/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas,  archivo })
    })
        .then(res => res.json())
        .catch(err => console.error(err));
}


const listaProductosW_V = () => fetch(`http://localhost:3000/M-Vest`)
    .then(res => res.json())


const detalleProductoW_V = (id) => {
    return fetch(`http://localhost:3000/M-Vest/${id}`)
        .then((res) =>
            res.json()

        )
}

const actualizarProductoW_V = (producto, precio, cuotas,  archivo, id) => {
    return fetch(`http://localhost:3000/M-Vest/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas,  archivo })
    })
        .then(res => res.json())
        .catch(err => console.error(err));
}


const listaProductosW_A = () => fetch(`http://localhost:3000/M-Acce`)
    .then(res => res.json())


const detalleProductoW_A = (id) => {
    return fetch(`http://localhost:3000/M-Acce/${id}`)
        .then((res) =>
            res.json()

        )
}

const actualizarProductoW_A = (producto, precio, cuotas, archivo, id) => {
    return fetch(`http://localhost:3000/M-Acce/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas,  archivo })
    })
        .then(res => res.json())
        .catch(err => console.error(err));
}

const listaProductosN_R = () => fetch(`http://localhost:3000/N-Rem`)
    .then(res => res.json())


const detalleProductoN_R = (id) => {
    return fetch(`http://localhost:3000/N-Rem/${id}`)
        .then((res) =>
            res.json()

        )
}

const actualizarProductoN_R = (producto, precio, cuotas,  archivo, id) => {
    return fetch(`http://localhost:3000/N-Rem/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas,  archivo })
    })
        .then(res => res.json())
        .catch(err => console.error(err));
}



const listaProductosN_P = () => fetch(`http://localhost:3000/N-Pant`)
    .then(res => res.json())


const detalleProductoN_P = (id) => {
    return fetch(`http://localhost:3000/N-Pant/${id}`)
        .then((res) =>
            res.json()

        )
}

const actualizarProductoN_P = (producto, precio, cuotas,  archivo, id) => {
    return fetch(`http://localhost:3000/N-Pant/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas,  archivo })
    })
        .then(res => res.json())
        .catch(err => console.error(err));
}




const listaProductosN_V = () => fetch(`http://localhost:3000/N-Vest`)
    .then(res => res.json())


const detalleProductoN_V = (id) => {
    return fetch(`http://localhost:3000/N-Vest/${id}`)
        .then((res) =>
            res.json()

        )
}

const actualizarProductoN_V = (producto, precio, cuotas,  archivo, id) => {
    return fetch(`http://localhost:3000/N-Vest/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas,  archivo })
    })
        .then(res => res.json())
        .catch(err => console.error(err));
}




const listaProductosCH_R = () => fetch(`http://localhost:3000/Ch-Rem`)
    .then(res => res.json())


const detalleProductoCH_R = (id) => {
    return fetch(`http://localhost:3000/Ch-Rem/${id}`)
        .then((res) =>
            res.json()

        )
}

const actualizarProductoCH_R = (producto, precio, cuotas,  archivo, id) => {
    return fetch(`http://localhost:3000/Ch-Rem/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas,  archivo })
    })
        .then(res => res.json())
        .catch(err => console.error(err));
}





const listaProductosCH_P = () => fetch(`http://localhost:3000/Ch-Pant`)
    .then(res => res.json())


const detalleProductoCH_P = (id) => {
    return fetch(`http://localhost:3000/Ch-Pant/${id}`)
        .then((res) =>
            res.json()

        )
}

const actualizarProductoCH_P = (producto, precio, cuotas, archivo, id) => {
    return fetch(`http://localhost:3000/Ch-Pant/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas,  archivo })
    })
        .then(res => res.json())
        .catch(err => console.error(err));
}



export const inService = {
    listaProductosH_R,
    detalleProductoH_R,
    actualizarProductoH_R,
    listaProductosH_P,
    detalleProductoH_P,
    actualizarProductoH_P,
    listaProductosH_A,
    detalleProductoH_A,
    actualizarProductoH_A,
    listaProductosW_R,
    detalleProductoW_R,
    actualizarProductoW_R,
    listaProductosW_P,
     detalleProductoW_P,
    actualizarProductoW_P,
    listaProductosW_V,
    detalleProductoW_V,
    actualizarProductoW_V,
    listaProductosW_A,
    detalleProductoW_A,
    actualizarProductoW_A,
    listaProductosN_R,
    detalleProductoN_R,
    actualizarProductoN_R,
    listaProductosN_P,
    detalleProductoN_P,
    actualizarProductoN_P,
    listaProductosN_V,
    detalleProductoN_V,
    actualizarProductoN_V,
    listaProductosCH_R,
    detalleProductoCH_R,
    actualizarProductoCH_R,
    listaProductosCH_P,
    detalleProductoCH_P,
    actualizarProductoCH_P,
    
};

