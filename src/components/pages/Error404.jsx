import { Button } from "react-bootstrap";
import error from '../../assets/error404.png'

const Error404 = () => {
    return (
        <section className="text-center">
            <img src={error} alt="iamgen de error 404" className="img-fluid " />
                <Button variant='warning'>Volver al inicio</Button>
    </section>
    );
};

export default Error404;