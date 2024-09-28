import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarProductoAPI, leerProductosAPI } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemProducto = ({ producto, fila, setProductos }) => {
  const borrarProducto = async () => {
    // Mostrar la ventana de confirmación
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminarlo!",
      cancelButtonText: "Cancelar"
    });

    // Si el usuario confirma, procedemos a eliminar el producto
    if (result.isConfirmed) {
      const respuesta = await borrarProductoAPI(producto.id);
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Producto eliminado",
          text: `El producto ${producto.nombreProducto} fue eliminado correctamente.`,
          icon: "success",
        });

        // Actualizar la tabla de productos
        const respuestaProductos = await leerProductosAPI();
        if (respuestaProductos.status === 200) {
          const productosActualizados = await respuestaProductos.json();
          setProductos(productosActualizados);
        }
      } else {
        Swal.fire({
          title: "Ocurrió un error",
          text: `El producto ${producto.nombreProducto} no pudo ser eliminado, intenta nuevamente más tarde.`,
          icon: "error",
        });
      }
    }
  };
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
        <Link
          className="btn btn-warning me-lg-2"
          to={`/administrador/editar/${producto.id}`}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={borrarProducto}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
