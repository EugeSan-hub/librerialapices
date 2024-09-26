import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemProducto = ({producto,fila}
  
) => {
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
          <Button variant="danger" >
            <i className="bi bi-trash"></i>
          </Button>
        </td>
      </tr>
    );
};

export default ItemProducto;
