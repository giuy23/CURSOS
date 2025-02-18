import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
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

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
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
    case TYPES.REMOVE_ONE_FROM_CART: {
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
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART: {
      return shoppingInitialState;
    }
    case TYPES.TOTAL_AMOUNT: {
      // MY FORMA

      // let total = 0,
      //   subTotal = [];
      // state.cart.length != 0
      //   ? (subTotal = state.cart.map((el) => el.price * el.quantity))
      //   : total;
      // for (const num of subTotal) {
      //   total += num;
      // }
      // console.log(total);
      // return {
      //   ...state,
      //   total: total,
      // };

      // FORMA DE CHAT GPT
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
