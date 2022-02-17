import { createContext } from "react";

const CartProvider = createContext({
        items: [],
        totalAmount: 0,
        addItem: (item) => {},
        removeItem: (id) => {},
});

export default CartProvider;