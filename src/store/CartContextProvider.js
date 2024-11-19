import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {

    if(action.type === "ADD_ITEM"){
        console.log(action.item)
        const updatedTotalPrice =
        +state.totalPrice + +action.item.price * +action.item.amount;
        const existingItemIndex = state.items.findIndex((item) => {
            return item.id === action.item.id
        })

        const existingItem = state.items[existingItemIndex]
        let updatedItems;
        let updatedItem;
        if (existingItem) {
            updatedItem = {
                ...existingItem,
                amount: (+existingItem.amount + +action.item.amount).toString()
            }
            updatedItems = [...state.items]
            updatedItems[existingItemIndex ] = updatedItem
        } else {
            updatedItem = {...action.item};
            updatedItems = state.items.concat(updatedItem)
        }  

      return {
        ...state,
        items: updatedItems,
        totalPrice: +updatedTotalPrice.toFixed(2),
      };
    }
    else if(action.type === "REMOVE_ITEM"){
        const existingItemIndex = state.items.findIndex((item) => {
            return item.id === action.id
          })
          const existingItem = state.items[existingItemIndex]



          let updatedItem;
          let updatedItems;


          if(existingItem.amount <= 1){
            updatedItems = state.items.filter((item) => {
                return item.id !== action.id
            })
          }else {
            updatedItem = {
                ...existingItem,
                amount: +existingItem.amount - 1
            }
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem
          }
          const updatedTotalPrice = state.totalPrice - +existingItem.price

    
          return {
            ...state,
            items: updatedItems,
            totalPrice: +updatedTotalPrice.toFixed(2),
          };
    }

  return state

};

const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const removeItemHandler = (id) => {
    dispatchCartState({ type: "REMOVE_ITEM", id: id });
  };
  const addItemHandler = (item) => {
    dispatchCartState({ type: "ADD_ITEM", item: item });
  };

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
