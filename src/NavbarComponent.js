import React from 'react';
import { Navbar, Nav, Container, Button, FormControl, Dropdown, Badge } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom'
import './NavbarComponent.css'
import CartContext from './Component/Context/Cart/CartContext';


const NavbarComponent=()=> {
    const { cartItems ,removeItem , productDispatch }= useContext(CartContext);


  return (<>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
         <a href='/'><img
            src="./img/logo2.JPG"
            alt="Logo"
            // width="50"
            height="50"
            className="d-inline-block align-top"
          /></a> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link href="/men">Men</Nav.Link>
            <Nav.Link href="/wommen">Women</Nav.Link>
            <Nav.Link href="/jewellary">Jewellery</Nav.Link>
            <Nav.Link href="/electronics">Electronics</Nav.Link>
          
          </Nav>
          <Nav className="d-flex align-items-center">
            <FormControl type="text" placeholder="Search"
            className="mr-2"
            onChange={(e) => {
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
              }}
            />
            <Button variant="outline-success">
              <BiSearch />
            </Button>
          </Nav>
          <span className="mx-2 "></span>    
  <Nav>
    <Dropdown alignRight>
        <Dropdown.Toggle variant='success'>
            <FaShoppingCart color='white' fontSize="25px"/>
            <Badge variant="danger">{cartItems.length}</Badge>
        </Dropdown.Toggle >
        <Dropdown.Menu style={{minWidth:300}}>
        {cartItems.length > 0 ? (
                <>
                  {cartItems.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>count:{prod.count}</span>
                        <span>$ {prod.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() => removeItem(prod.id)  
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
              </Dropdown.Menu>
    </Dropdown>
</Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavbarComponent;
