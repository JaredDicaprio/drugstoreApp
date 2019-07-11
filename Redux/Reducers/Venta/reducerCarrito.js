const initialState = {
  cart: [],
  openCart: false,
  totalCart: 0
};

const calcularTotal = state => {
  let total = 0;
  for (let i = 0; i < state.cart.length; i++) {
    total = total + state.cart[i].subtotal;
  }
  return total;
};

const openCart = state => {
  return { ...state, openCart: true, totalCart: calcularTotal(state) };
};

const closeCart = state => {
  return { ...state, openCart: false };
};

const newCart = (state, action) => {
  return { ...state, cart: action.cart };
};

const emptyCart = state => {
  return { ...state, cart: [], totalCart: 0 };
};

const reducerCarrito = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CART":
      return newCart(state, action);
    case "CLEAN_CART":
      return emptyCart(state);
    case "OPEN_CART":
      return openCart(state);
    case "CLOSE_CART":
      return closeCart(state);
    default:
      return state;
  }
};

export default reducerCarrito;
