import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
function Topbar(props) {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary navbar-custom sti"
      sticky="top"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img className="logo" src={"./assets/logo.png"} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" onClick={() => props.NavigateToHome()}>
              Home
            </Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">mobile phones</NavDropdown.Item>
              <NavDropdown.Item href="#action4">cars</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">food</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Flex container for search bar and buttons */}
          <div className="d-flex align-items-center ms-auto gap-3">
            <Form className="d-flex mx-auto">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>

            <Button variant="warning" onClick={() => props.NavigateToCart()}>
              Cart <Badge bg="secondary">{props.numberOfCartItem}</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>

            <NavDropdown title=" Account" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Change profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">coupons</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">logout</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;
