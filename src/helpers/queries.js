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