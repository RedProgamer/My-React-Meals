import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartProvider from '../Context/cart-provider';

function Navbar() {

    const ctx = useContext(CartProvider);
    
    const totalAmount = ctx.items.reduce((prev, curr) => {
        return prev + curr.quantity;
    }, 0);

    return (
            <header className="flex justify-evenly items-center p-2 fixed border-b-[1px solid rgba( 255, 255, 255, 0.37 )] bg-[rgba( 255, 255, 255, 0.8 )] shadow-[0 8px 32px 0 rgba( 31, 38, 135, 0.37 )] backdrop-blur-[8px] z-101 w-full">
                <div className="flex-intial w-1/2 text-center text-2xl">
                    <h1>Foods</h1>
                </div>
                <div className="flex flex-1 w-1/2 items-center space-x-5 justify-center">
                    <button className="flex w-10 mr-3 text-white">
                        <a href="#menu">Menu</a>
                    </button>
                    <Link to="/cart" className="flex border-3 px-5 py-3 rounded-md bg-zinc-800 text-white hover:bg-black hover:text-white focus:ring-2 focus:ring-gray-700 focus:ring-offset-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <span to="/cart" className="text-semibold">Cart</span>
                        <span className="border-2 ml-2 px-3 rounded-2xl border-x-gray-200 text-white">{totalAmount}</span>
                    </Link>
                    <button className="flex hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </button>
                </div>
        </header>
    );
}

export default Navbar;