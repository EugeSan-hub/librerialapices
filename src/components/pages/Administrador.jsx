import { Button, Table } from "react-bootstrap";
import ItemProducto from "./ItemProducto";
import { useEffect, useState } from "react";
import { leerProductosAPI, URLProductos } from "../../helpers/queries";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    try {
      const respuesta = await leerProductosAPI(); // Call to API function
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setProductos(datos);
      } else {
        Swal.fire({
          title: "Ocurrió un error",
          text: "No se pudo obtener el listado de productos, intente nuevamente más tarde",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "No se pudo conectar con el servidor",
        icon: "error",
      });
    }
  };
  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Link className="btn btn-primary" to={"/administrador/crear"}>
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
