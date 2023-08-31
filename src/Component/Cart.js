import { useContext, useEffect, useState } from "react";
import { Button, ListGroup , Col ,Row ,  Image, Form} from "react-bootstrap";
import CartContext from "./Context/Cart/CartContext";
import './Cart.css';
import Rating from "./Rating";
import { AiFillDelete } from "react-icons/ai";


const Cart = () => {
  const { cartItems , removeItem} = useContext(CartContext);

  const[total , setTotal] = useState();

  useEffect(()=>{
    setTotal(cartItems.reduce((acc, curr)=> Number(acc+curr.price)*curr.count,0));
  },[cartItems]);

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          { cartItems.map((prod)=>
          <ListGroup.Item key = {prod.id}>
          <Row>
            <Col md={2}>
            <Image src={prod.image} alt={prod.title} fluid rounded/>
            </Col>
            <Col md={2}>
            <span>{prod.title}</span>
            </Col>
            <Col md={2}>
            <span>{prod.price}</span>
            </Col>
            <Col md={2}>
            <Rating rating={prod.rating.rate}/>
            </Col>
            <Col md={2}>
            <Form.Control
                    as="select"
                    value={prod.count}
                  >
                    {[...Array(prod.count).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
            </Col>
            <Col md ={2}>
            <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      removeItem(prod.id) 
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
            </Col>
          </Row>
          </ListGroup.Item>
          )}
        </ListGroup>
      </div>
    <div className="filters summary">
      <span className="title">Subtotal({cartItems.length}) items</span>
      <span style={{ fontWeight:700 ,fontSize:20 }}>Total: ${total}</span>
      <Button type="button" disabled={cartItems.length === 0}>
        Proceed to checkout
      </Button>

    </div>

    </div>
  )
}

export default Cart




















