import { Button, Table } from "react-bootstrap";
import ItemProducto from "./ItemProducto";
import { useEffect } from "react";
import { URLProductos } from "../../helpers/queries";
import { Link } from "react-router-dom";

const Administrador = () => {
  useEffect(() => {
    console.log(URLProductos);
  }, []);
  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Link className='btn btn-primary'  to={'/administrador/crear'}>
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>{<ItemProducto></ItemProducto>}</tbody>
      </Table>
    </section>
  );
};

export default Administrador;
