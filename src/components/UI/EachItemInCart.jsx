function EachItemInCart({ id, name, price, quantity, decreaseQuantity, increaseQuantity }) {

    const clickedMinus = () => {
        decreaseQuantity(id);
    };

    const clickedPlus = () => {
        increaseQuantity(id);
    };
 
    return (
        <li key={id} className="flex justify-between border-b-2 py-5 items-center">
            <div className="flex flex-col">
                <div className="flex items-center">
                    <span className="font-bold">{name}</span>
                    <span className="ml-1 border-2 px-3 py-1 rounded-xl text-xl">x{quantity}</span>
                </div>
                <span className="text-2xl text-gray-600">${price}</span>
            </div>
            <div className="space-x-2">
                <button onClick={clickedMinus} className="rounded-2xl px-5 py-3 hover:border-2 focus:ring-2 focus: ring-gray-500 focus: ring-offset-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                </button>
                <button onClick={clickedPlus} className="rounded-2xl px-5 py-3 hover:border-2 focus:ring-2 focus: ring-gray-500 focus: ring-offset-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                </button>
            </div>
        </li>
    );
}

export default EachItemInCart;