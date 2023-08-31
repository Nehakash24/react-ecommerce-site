import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import CartContext from "./Context/Cart/CartContext";
import "./Filter.css";
import Rating from "./Rating";

const Filter = () => {

  const { 
    productState : { sort , byRating },
    productDispatch,
   } = useContext(CartContext);
  console.log( sort , byRating );

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating rating ={byRating} onClick={(i) =>
        {
          console.log(i)
       return  productDispatch({
          type : "FILTER_BY_RATING",
          payload : i+1,
        
        }) 
        } }
      style={{ cursor: "pointer"}} />
      </span>
      <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filter;
