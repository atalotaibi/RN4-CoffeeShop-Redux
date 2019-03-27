import * as actionTypes from "../actions/types";

const initialState = {
  items: [
    {
      drink: "Latte",
      option: "Small",
      quantity: 2
    },
    {
      drink: "Espresso",
      option: "Large",
      quantity: 1
    }
  ],
  totalItems: 3
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      let total = state.totalItems + 1;
      let item = action.payload;
      let flag = false;
      state.items.forEach(cartItem => {
        if (item.drink === cartItem.drink && item.option === cartItem.option) {
          cartItem.quantity += 1;
          flag = true;
        }
      });

      if (flag) {
        return {
          ...state,
          items: [...state.items],
          totalItems: total
        };
      } else {
        return {
          ...state,
          items: state.items.concat(action.payload),
          totalItems: total
        };
      }
    case actionTypes.REMOVE_ITEM:
      let item1 = action.payload;
      let total1 = state.totalItems - item1.quantity;
      return {
        ...state,
        items: state.items.filter(item => {
          return item !== action.payload;
        }),
        totalItems: total1
      };
    case actionTypes.CHECKOUT:
      return {
        ...state,
        items: action.payload,
        totalItems: 0
      };
    default:
      return state;
  }
};

export default cartReducer;
