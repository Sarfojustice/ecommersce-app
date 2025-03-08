import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { Row, Col, Card, Placeholder } from "react-bootstrap";

function Item(props) {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulate loading time (Remove this if real API data is used)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Fake loading completion
    }, 1000); // Adjust delay as needed
  }, []);

  return (
    <Card style={{ width: "18rem" }} className="card-container">
      {/* Show Loading Skeleton while content is loading */}
      {loading ? (
        <div className="placeholder-wrapper">
          <Placeholder as={Card.Img} animation="glow" className="placeholder-img" />
        </div>
      ) : (
        <Carousel interval={null}>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src={props.img1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src={props.img2} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
      )}

      <Card.Body className="item-body">
        {/* Title & Price */}
        {loading ? (
          <>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as="p" animation="glow">
              <Placeholder xs={4} />
            </Placeholder>
          </>
        ) : (
          <>
            <Card.Title className="item-name">{props.title}</Card.Title>
            <p className="item-price">{props.price}</p>
          </>
        )}

        {/* Collapsible Details Section */}
        {!loading && expanded && (
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
        {!loading && (
          <Button variant="link" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show Less" : "Show More"}
          </Button>
        )}

        {/* Add to Cart Button */}
        {!loading && (
          <Button variant="warning" onClick={() => props.AddToCart(props.phone)}>
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Item;