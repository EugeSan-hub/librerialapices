import Menu from "./components/common/Menu.jsx";
import Index from "./components/pages/Index.jsx";
import Footer from "./components/common/Footer.jsx";
import Administrador from "./components/pages/Administrador.jsx";
import FormularioProducto from "./components/pages/FormularioProducto.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./components/common/LogIn.jsx";
import { useState } from "react"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Error404 from "./components/pages/Error404.jsx";

function App() {
   // Estado para controlar la visibilidad del modal
   const [showModal, setShowModal] = useState(false);

   // Funciones para abrir y cerrar el modal
   const handleShow = () => setShowModal(true);
   const handleClose = () => setShowModal(false);

   const usuario= JSON.parse(sessionStorage.getItem('libreria101')) || "";
   const [usuarioLogueado, setUsuarioLogueado]= useState(usuario);
  return (
   

    <BrowserRouter>
      <Menu usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado} handleShow={handleShow}></Menu>

      <Routes>
        <Route path="/" element={<Index></Index>}></Route>
        <Route
          path="/Administrador"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          path="/administrador/crear"
          element={<FormularioProducto titulo={'Nuevo producto'} estoyCreando={true}></FormularioProducto>}
        ></Route>
        <Route
          path="/administrador/editar/:id"
          element={<FormularioProducto titulo={'Editar Producto'}  estoyCreando={false}></FormularioProducto>}
        ></Route>
         <Route
          exact
          path="/login"
          element={<LogIn handleShow={handleShow}  setUsuarioLogueado={setUsuarioLogueado}></LogIn>}
        ></Route>
        <Route path="/*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
        {/* Modal para iniciar sesión */}
        <LogIn show={showModal} handleClose={handleClose} />
        
    </BrowserRouter>
  );
}

export default App;
