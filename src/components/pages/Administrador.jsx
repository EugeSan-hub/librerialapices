import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import ItemProducto from "./ItemProducto";
import { leerProductosAPI } from "../../helpers/queries";


const Administrador = () => {
  const [productos, setProductos] = useState([])

  useEffect(()=>{
   obtenerProductos();
  },[])

  const obtenerProductos = async()=>{
   const respuesta = await leerProductosAPI();
   if(respuesta.status === 200){
    const datos = await respuesta.json();
    setProductos(datos);
   }else{
    Swal.fire({
      title: "Ocurrio un error",
      text: `No se pudo obtener el listado de productos, intente esta operación en unos minutos.`,
      icon: "error"
    });
   }
  }
  

    return (
        <section className="container mainSection">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 ">Productos disponibles</h1>
          <Link className="btn btn-primary" to={'/administrador/crear'} >
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
          <tbody>
            {
              productos.map((producto, posicion)=>  <ItemProducto key={producto.id} producto={producto} fila={posicion+1} setProductos={setProductos}></ItemProducto>)
             
            }
          </tbody>
        </Table>
      </section>
    );
};

export default Administrador;