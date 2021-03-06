const initialState = {
  chooseClient: null,
  mayorista: false,
  modalChooseCliente: null,
  showPagoVenta: null
};

const chooseClient = (state, action) => {
  return { ...state, chooseClient: action.client, modalChooseCliente: true };
};

const removeChooseClient = (state) => {
  return { ...state, chooseClient: null };
};

const hideChooseClientModal = (state) => {
  return { ...state, modalChooseCliente: null };
};

const chooseMayorista = (state) => {
  return { ...state, mayorista: true };
};

const chooseMinorista = (state) => {
  return { ...state, mayorista: false };
};

const removeTypeOfSale = (state) => {
  return { ...state, mayorista: false };
};

const showPagoVenta = (state) => {
  return { ...state, showPagoVenta: true };
};

const hidePagoVenta = (state) => {
  return { ...state, showPagoVenta: false };
};

const reducerVenta = (state = initialState, action) => {
  switch (action.type) {
    case "CHOOSE_CLIENT":
      return chooseClient(state, action);
    case "REMOVE_CHOOSE_CLIENT":
      return removeChooseClient(state);
    case "CHOOSE_MAYORISTA":
      return chooseMayorista(state);
    case "CHOOSE_MINORISTA":
      return chooseMinorista(state);
    case "REMOVE_TYPE_OF_SALE":
      return removeTypeOfSale(state);
    case "HIDE_CHOOSE_CLIENT_MODAL":
      return hideChooseClientModal(state);
    case "SHOW_PAGO_VENTA":
      console.log("show pago venta");
      return showPagoVenta(state);
    case "HIDE_PAGO_VENTA":
      return hidePagoVenta(state);
    default:
      return state;
  }
};

export default reducerVenta;
