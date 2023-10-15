const producto = document.querySelector(".name");
   const precio = document.querySelector(".bestprecio");
   const cuotas = document.querySelector(".cuotas");
   const interes = document.querySelector(".int");
   let archivo = document.querySelector(".image");

const   CodeError = (data) =>{
if(data.status >= 400 ){
    const dialog = document.createElement("dialog");
    dialog.getAttribute("id", "modal");
    const modal = document.getElementById("modal");
    const spanTriengle = document.createElement("span");
    spanTriengle.getAttribute("class", "fa-solid fa-triangle-exclamation");
    const Mensaje = document.createElement("h1");
    Mensaje.getAttribute("class", "text_prin");
    Mensaje.textContent = "Ocurrio un Error, Pruebe denuevo";
    dialog.appendChild(spanTriengle);
    dialog.appendChild(Mensaje);
    modal.showModal();

}
};

const listaProductosH_R = () => fetch(`http://localhost:3000/Hom_Remeras`)
    .then(res => res.json()
    )
    
     
    
        


const detalleProductoH_R = (id) => {
    return fetch(`http://localhost:3000/Hom_Remeras/${id}`).then((res) =>  res.json()
            
        )
}

const actualizarProductoH_R = (producto, precio, cuotas, interes, archivo, id) => {
    return fetch(`http://localhost:3000/Hom_Remeras/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas, interes, archivo })
    })
        .then(res =>{
            res.json();
        
        } )
        .catch(err => console.error(err));
};


const listaProductosH_P = () => fetch(`http://localhost:3000/Hom_Pantalones`)
    .then(res => res.json())


const detalleProductoH_P = (id) => {
    return fetch(`http://localhost:3000/Hom_Pantalones/${id}`)
        .then((res) =>
            res.json()

        )
}

const actualizarProductoH_P = (producto, precio, cuotas, interes, archivo, id) => {
    return fetch(`http://localhost:3000/Hom_Pantalones/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas, interes, archivo })
    })
        .then(res => res.json())
        .catch(err => console.error(err));
};


const listaProductosH_A = () => fetch(`http://localhost:3000/Hom_Accesorios`)
    .then(res => res.json())


const detalleProductoH_A = (id) => {
    return fetch(`http://localhost:3000/Hom_Accesorios/${id}`)
        .then((res) =>
            res.json()

        )
}

const actualizarProductoH_A = (producto, precio, cuotas, interes, archivo, id) => {
    return fetch(`http://localhost:3000/Hom_Accesorios/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas, interes, archivo })
    })
        .then(res => res.json())
        .catch(err => console.error(err));
}


const listaProductosW_R = () => fetch(`http://localhost:3000/Wom_Remeras`)
    .then(res => res.json())


const detalleProductoW_R = (id) => {
    return fetch(`http://localhost:3000/Wom_Remeras/${id}`)
        .then((res) =>
            res.json()

        )
}

const actualizarProductoW_R = (producto, precio, cuotas, interes, archivo, id) => {
    return fetch(`http://localhost:3000/Wom_Remeras/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas, interes, archivo })
    })
        .then(res => res.json())
        .catch(err => console.error(err));
}


const listaProductosW_P = () => fetch(`http://localhost:3000/Wom_Pantalones`)
    .then(res => res.json())


const detalleProductoW_P = (id) => {
    return fetch(`http://localhost:3000/Wom_Pantalones/${id}`)
        .then((res) =>
            res.json()

        )
}

const actualizarProductoW_P = (producto, precio, cuotas, interes, archivo, id) => {
    return fetch(`http://localhost:3000/Wom_Pantalones/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas, interes, archivo })
    })
        .then(res => res.json())
        .catch(err => console.error(err));
}


const listaProductosW_V = () => fetch(`http://localhost:3000/Wom_Vestidos`)
    .then(res => res.json())


const detalleProductoW_V = (id) => {
    return fetch(`http://localhost:3000/Wom_Vestidos/${id}`)
        .then((res) =>
            res.json()

        )
}

const actualizarProductoW_V = (producto, precio, cuotas, interes, archivo, id) => {
    return fetch(`http://localhost:3000/Wom_Vestidos/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas, interes, archivo })
    })
        .then(res => res.json())
        .catch(err => console.error(err));
}


const listaProductosW_A = () => fetch(`http://localhost:3000/Wom_Accesorios`)
    .then(res => res.json())


const detalleProductoW_A = (id) => {
    return fetch(`http://localhost:3000/Wom_Accesorios/${id}`)
        .then((res) =>
            res.json()

        )
}

const actualizarProductoW_A = (producto, precio, cuotas, interes, archivo, id) => {
    return fetch(`http://localhost:3000/Wom_Accesorios/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas, interes, archivo })
    })
        .then(res => res.json())
        .catch(err => console.error(err));
}

const listaProductosN_R = () => fetch(`http://localhost:3000/Nena_Remeras`)
    .then(res => res.json())


const detalleProductoN_R = (id) => {
    return fetch(`http://localhost:3000/Nena_Remeras/${id}`)
        .then((res) =>
            res.json()

        )
}

const actualizarProductoN_R = (producto, precio, cuotas, interes, archivo, id) => {
    return fetch(`http://localhost:3000/Nena_Remeras/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas, interes, archivo })
    })
        .then(res => res.json())
        .catch(err => console.error(err));
}



const listaProductosN_P = () => fetch(`http://localhost:3000/Nena_Pantalones`)
    .then(res => res.json())


const detalleProductoN_P = (id) => {
    return fetch(`http://localhost:3000/Nena_Pantalones/${id}`)
        .then((res) =>
            res.json()

        )
}

const actualizarProductoN_P = (producto, precio, cuotas, interes, archivo, id) => {
    return fetch(`http://localhost:3000/Nena_Pantalones/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas, interes, archivo })
    })
        .then(res => res.json())
        .catch(err => console.error(err));
}




const listaProductosN_V = () => fetch(`http://localhost:3000/Nena_Vestidos`)
    .then(res => res.json())


const detalleProductoN_V = (id) => {
    return fetch(`http://localhost:3000/Nena_Vestidos/${id}`)
        .then((res) =>
            res.json()

        )
}

const actualizarProductoN_V = (producto, precio, cuotas, interes, archivo, id) => {
    return fetch(`http://localhost:3000/Nena_Vestidos/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas, interes, archivo })
    })
        .then(res => res.json())
        .catch(err => console.error(err));
}




const listaProductosCH_R = () => fetch(`http://localhost:3000/Nene_Remeras`)
    .then(res => res.json())


const detalleProductoCH_R = (id) => {
    return fetch(`http://localhost:3000/Nene_Remeras/${id}`)
        .then((res) =>
            res.json()

        )
}

const actualizarProductoCH_R = (producto, precio, cuotas, interes, archivo, id) => {
    return fetch(`http://localhost:3000/Nene_Remeras/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas, interes, archivo })
    })
        .then(res => res.json())
        .catch(err => console.error(err));
}





const listaProductosCH_P = () => fetch(`http://localhost:3000/Nene_Pantalones`)
    .then(res => res.json())


const detalleProductoCH_P = (id) => {
    return fetch(`http://localhost:3000/Nene_Pantalones/${id}`)
        .then((res) =>
            res.json()

        )
}

const actualizarProductoCH_P = (producto, precio, cuotas, interes, archivo, id) => {
    return fetch(`http://localhost:3000/Nene_Pantalones/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ producto, precio, cuotas, interes, archivo })
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
    CodeError
};

