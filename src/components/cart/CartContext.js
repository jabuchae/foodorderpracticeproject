import React, { useReducer } from "react";

const CartContext = React.createContext({
  cart: [
    {
      item: {
        id: 0,
        name: "",
        desc: "",
        price: 0,
      },
      amount: 0,
    },
  ],
  removeItem: (item) => {},
  addItem: (item, amount) => {},
});

const getSavedCart = () => {
  try {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    return savedCart;
  } catch (e) {}
  return [];
};

const cartReducer = (state, action) => {
  const getItemPosition = (c, item) => {
    for (let i = 0; i < c.length; i++) {
      if (item.id == c[i].item.id) {
        return i;
      }
    }

    return -1;
  };

  const removeItem = (item) => {
    let newCartState = [...state];
    const position = getItemPosition(state, item);
    if (position == -1) return newCartState;

    newCartState[position] = {
      ...state[position],
      amount: state[position].amount - 1,
    };

    const retCartState = newCartState.filter((x) => x.amount > 0);

    return retCartState;
  };

  const addItem = (item, amount) => {
    let newCartState = [...state];
    const position = getItemPosition(state, item);
    if (position == -1) {
      newCartState.push({
        item: item,
        amount: amount,
      });
    } else {
      newCartState[position] = {
        ...state[position],
        amount: amount + state[position].amount,
      };
    }

    return newCartState;
  };

  switch (action.type) {
    case "ADDITEM":
      state = addItem(action.item, action.amount);
      break;
    case "REMOVEITEM":
      state = removeItem(action.item);
      break;
  }

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};

export const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    getSavedCart()
  );

  const removeItemHandler = (item) => {
    dispatchCartAction({
      type: "REMOVEITEM",
      item: item,
    });
  };

  const addItemHandler = (item, amount) => {
    dispatchCartAction({
      type: "ADDITEM",
      item: item,
      amount: amount,
    });
  };

  const cartContext = {
    cart: cartState,
    removeItem: removeItemHandler,
    addItem: addItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
