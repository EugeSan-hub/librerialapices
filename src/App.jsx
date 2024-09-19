import Menu from "./components/common/Menu.jsx";
import Index from "./components/pages/Index.jsx";
import Footer from "./components/common/Footer.jsx";
import CardProducto from "./components/pages/CardProducto.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Administrador from "./components/pages/Administrador.jsx";
import FormularioProducto from "./components/pages/FormularioProducto.jsx";


function App() {
  

  return (
    <>
      <Menu></Menu>
      {/* <Index></Index> */}
            <Administrador></Administrador>
      {/* <FormularioProducto></FormularioProducto> */}
      <Footer></Footer>
          </>
  )
}

export default App
