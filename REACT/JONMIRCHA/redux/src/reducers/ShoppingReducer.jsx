import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART, TOTAL_AMOUNT } from "../types";

export const InitialState = {
  products: [
    {
      id: 1,
      name: "Producto 1",
      price: 100,
    },
    {
      id: 2,
      name: "Producto 2",
      price: 200,
    },
    {
      id: 3,
      name: "Producto 3",
      price: 300,
    },
    {
      id: 4,
      name: "Producto 4",
      price: 400,
    },
    {
      id: 5,
      name: "Producto 5",
      price: 500,
    },
    {
      id: 6,
      name: "Producto 6",
      price: 600,
    },
  ],
  cart: [],
};

export default function shoppingReducer(state = InitialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      // console.log({...state});

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
    }
    case REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find(
        (product) => product.id === action.payload
      );

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case CLEAR_CART: {
      return InitialState;
    }
    case TOTAL_AMOUNT: {
      const subTotal = state.cart.map((el) => el.price * el.quantity);
      const total = subTotal.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      return {
        ...state,
        total: total,
      };
    }
    default:
      return state;
  }
}
