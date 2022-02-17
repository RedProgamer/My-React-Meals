import { useContext, useState, useMemo } from "react";
import CartProvider from "./Context/cart-provider";
import BackToHome from "./UI/BackToHome";
import EachItemInCart from "./UI/EachItemInCart";
import Burger from "./assets/burger3.svg";


function CartMenu() {
    const ctx = useContext(CartProvider);
    const items = ctx.items;
    const totalAmount = ctx.totalAmount;

    const [isEmpty, setIsEmpty] = useState(true);
    
    useMemo(() => {
        if(items.length === 0) {
            setIsEmpty(true);
        }else {
            setIsEmpty(false);
        }
    }, [items]);

    const decreaseQuantity = (id) => {
        ctx.removeItem(id);
    };

    const increaseQuantity = (id) => {
        const elementIdx = items.findIndex(item => item.id === id);
        const item = items[elementIdx];
        ctx.addItem({...item, quantity: 1});
    };

    let list;

    if(isEmpty) {
       list = 
       <div className="flex flex-col justify-center items-center mt-10">
           <img src={Burger} className="opacity-80" width="80px" height="auto" alt="burger svg icon"/>
           <p className="text-gray-600">There is nothing in your cart!</p>
       </div> 
    }else {
        list = 
        <div className="mt-1 pl-4 pr-6">
            <ul>
                {items.map(item => {
                    return <EachItemInCart key={item.id} id={item.id} name={item.name} price={item.price} quantity={item.quantity} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity}/>
                })}
            </ul>
            <div className="mt-7 flex justify-between">
                <h1 className="font-bold text-xl">Total Amount</h1>
                <span className="text-2xl">${totalAmount.toFixed(2)}</span>
            </div>
        </div>
    };

    return (
        <section className="border-2 w-1/2 mt-5 py-6 p-3 rounded-lg">
            <BackToHome />
            {list}
        </section>
    );
}

export default CartMenu;