import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react';

function CartComponent(props) {
 
  const [expanded, setExpanded] = useState(false);

  return (
 
    <Card style={{ width: '18rem' }} className="card-container">
      {/* Image Carousel */}
      <Carousel interval={null}>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={props.img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={props.img2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>

      <Card.Body>
        {/* Title & Price */}
        <Card.Title className='item-name'>{props.title}</Card.Title>
        <p className="item-price">{props.price}</p>

        {/* Collapsible Details Section */}
        {expanded && (
          <Card.Text>
            <Row>
              <Col sm={6} className="mb-2">
                <strong>{props.condition}</strong> <br />
                <small className="text-muted">Condition</small>
              </Col>
              <Col sm={6} className="mb-2">
                <strong>{props.color}</strong> <br />
                <small className="text-muted">Color</small>
              </Col>
              <Col sm={6} className="mb-2">
                <strong>{props.storage}</strong> <br />
                <small className="text-muted">RAM & Storage</small>
              </Col>
              <Col sm={6} className="mb-2">
                <strong>{props.brand}</strong> <br />
                <small className="text-muted">Brand</small>
              </Col>
              <Col sm={6} className="mb-2">
                <strong>{props.screenSize}</strong> <br />
                <small className="text-muted">Screen Size</small>
              </Col>
              <Col sm={6} className="mb-2">
                <strong>{props.os}</strong> <br />
                <small className="text-muted">OS</small>
              </Col>
            </Row>
          </Card.Text>
        )}

        {/* Toggle Button */}
        <Button
          variant="link"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Show More"}
        </Button>

        <div className="d-flex gap-3">
      <Button variant="warning">Buy</Button><span></span>
      <Button variant="warning" onClick={() => props.removeFromCart(props.phone)}>Remove</Button>
      </div>
      </Card.Body>
    </Card>
  );
  
}

export default CartComponent;
