import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, CHANGE_CART_QTY } from "../Type";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
    //   console.log(action.payload);
    //   return {
    //     ...state,
    //     cartItems: [...state.cartItems, action.payload],
    //   };
    // }
        console.log("hello");
      const existingItemIndex = state.cartItems.findIndex(
      item => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        console.log("hello sir");
      const updatedCartItems = [...state.cartItems];
      updatedCartItems[existingItemIndex].count += 0.5;
      return {
      ...state,
      cartItems: updatedCartItems,
      };
      } else 
      return {
      ...state,
      cartItems: [...state.cartItems, { ...action.payload, count: 1 }],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    }
    case CHANGE_CART_QTY:{
      return {
        ...state,
        cart: state.cartItems.filter((item) =>
        item.id === action.payload.id ? (item.qty = action.payload.qty) : item.c
        ),
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
