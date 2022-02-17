import CartProvider from "./cart-provider";
import { useReducer, useEffect } from "react";

const defaultState = {
    items:[],
    totalAmount: 0,
};

const cartReducer = (state, action) => {

    let existingIdx = 0, totalPrice = 0, existingElement = {}, updatedItem = {}, updatedList = [];

    if(action.type === 'ADD') {
        existingIdx = state.items.findIndex(item => item.id === action.item.id);
        totalPrice = state.totalAmount + (action.item.quantity * action.item.price);

        if(existingIdx === -1) {
            //add new item to the item list
            updatedList = state.items.concat(action.item);
        }else {
            //increment the quantity
            existingElement = state.items[existingIdx];
            const quantity = existingElement.quantity + action.item.quantity;

            updatedItem = {...existingElement, quantity: quantity};
            updatedList = [...state.items];

            updatedList[existingIdx] = updatedItem;
        }

        return {
            items: updatedList,
            totalAmount: totalPrice
        }
    }else if(action.type === 'RMV') {
        existingIdx = state.items.findIndex(item => item.id === action.id);
        existingElement = state.items[existingIdx];
        totalPrice = state.totalAmount - existingElement.price;

        if(existingElement.quantity === 1) {
            //remove the item from the list
            updatedList = state.items.filter(item => item.id !== action.id);
        }else {
            //1. Decrement the quanity of the meal by 1
            updatedItem = {
                ...existingElement,
                quantity: existingElement.quantity - 1,
            };
            updatedList = [...state.items];
            updatedList[existingIdx] = updatedItem;
        }
        return {
            items: updatedList,
            totalAmount: totalPrice
        }
    };
};


function CartContextProvider(props) {

    const [cartState, dispatchCart] = useReducer(cartReducer, defaultState);
    
    const addItemsToCart = (item) => {
        dispatchCart({type: 'ADD', item: item});
    };

    const removeItemFromCart = (id) => {
        dispatchCart({type: 'RMV', id: id});
    };

    useEffect(() => {
        console.log(cartState);
    }, [cartState]);

    const cartValues = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemsToCart,
        removeItem: removeItemFromCart
    };
    
    return (
        <CartProvider.Provider value={cartValues}>
            {props.children}
        </CartProvider.Provider>
    );
}

export default CartContextProvider;