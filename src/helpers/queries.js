export const URLProductos = import.meta.env.VITE_API_PRODUCTOS;

// solicitudes POST
export const crearProductoAPI = async(productoNuevo)=>{
    try {
        const respuesta = await fetch(URLProductos,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(productoNuevo)
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return false;
    }
}
//GET
export const leerProductosAPI = async() =>{
    try {
        const respuesta = await fetch(URLProductos);
      return respuesta;  
    } catch (error) {
        console.error(error)
        return false; 
        
    }
}
// GET que devuelve un producto 
export const obtenerProductoAPI = async(id) =>{
    try {
        const respuesta = await fetch(URLProductos+'/'+id);
      return respuesta;  
    } catch (error) {
        console.error(error)
        return false; 
        
    }
}

//PUT O PATCH 

export const editarProductoAPI = async(productoEditado, id)=>{
    try {
        const respuesta = await fetch(URLProductos+'/'+id,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(productoEditado)
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return false;
    }
}

//DELETE
export const borrarProductoAPI = async(id)=>{
    try {
        const respuesta = await fetch(URLProductos+'/'+id,{
            method: "DELETE"
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return false;
    }
}