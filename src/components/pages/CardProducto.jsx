import { Col, Card, Button } from "react-bootstrap";

const CardProducto = () => {
    return (
        <Col md={4} lg={3} className="mb-3">
        <Card className="h-100">
          <div>
            <img  src="https://images.pexels.com/photos/230514/pexels-photo-230514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cafe" className="card-img-top-nueva" />
          </div>
          <Card.Body>
          <Card.Title className="primary-font">Lapices Faber Castell</Card.Title>
          <Card.Text>
            Descripción: Caja de 12 lápices <br className="mb-2"/> 
            <span className="fw-bold">Precio: $4500</span></Card.Text>
          </Card.Body>
          <Card.Footer className="text-end">
          <Button className='btn btn-success me-2' to='/detalleProducto' >Ver más</Button>
        </Card.Footer>
        </Card>
      </Col>
    );
};

export default CardProducto;
