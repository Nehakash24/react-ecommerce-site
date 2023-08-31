import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART , ADD_TO_CART , REMOVE_ITEM } from '../Type'
import prodReducer from "../prodReducer";



const CartStates = ({ children }) => {
  const initialState = {
    showCart: false,
    cartItems:[],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item) => {
    // item["count"]=1;
    console.log(item);
    
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (id) => {
    console.log("hii"+id);
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const [productState, productDispatch] = useReducer(prodReducer, {
    byRating: 0,
    searchQuery: "",
  });

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
        productState,
        productDispatch

      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartStates;
