import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarProductoAPI } from "../../helpers/queries";
import Swal from "sweetalert2";



const ItemProducto = ({producto, fila, setProductos}) => {
      const borrarProducto = async()=>{
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Quieres eliminar el producto ${producto.nombreProducto}? Esta acción no se puede deshacer.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo!',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma, se procede a borrar el producto
        const respuesta = await borrarProductoAPI(producto.id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: 'Producto eliminado',
            text: `El producto ${producto.nombreProducto}, fue eliminado correctamente`,
            icon: 'success',
          });
          
          const respuestaProductos = await leerProductosAPI();
          if (respuestaProductos.status === 200) {
            const productosActualizados = await respuestaProductos.json();
            setProductos(productosActualizados);
          }
        } else {
          Swal.fire({
            title: 'Ocurrió un error',
            text: `El producto ${producto.nombreProducto} no pudo ser eliminado, intente esta operación en unos minutos.`,
            icon: 'error',
          });
        }
      }
    });
  }
    return (
        <tr>
        <td className="text-center">{fila}</td>
        <td>{producto.nombreProducto}</td>
        <td className="text-end">${producto.precio}</td>
        <td className="text-center">
          <img
            src={producto.imagen}
            className="img-thumbnail"
            alt={producto.nombreProducto}
          ></img>
        </td>
        <td>{producto.categoria}</td>
        <td className="text-center">
          <Link  className="btn btn-warning me-lg-2" to= {`/administrador/editar/${producto.id}`}>
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button variant="danger" onClick={borrarProducto }>
            <i className="bi bi-trash"></i>
          </Button>
        </td>
      </tr>
    );
}
  

export default ItemProducto;
