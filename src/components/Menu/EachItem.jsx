import { useState } from "react";

function EachItem(props) {
    const [amount, setAmount] = useState(1);

    const changeHandler = (event) => {
        event.preventDefault();
        setAmount(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const item = {
            id: props.data[3],
            name: props.data[0],
            quantity: parseInt(amount),
            price: props.data[2]
        };
        props.addNewItem(item);
    };
    return (
        <li className="flex px-8 py-4 rounded-lg shadow-2xl mb-5 justify-between">
            <div>
                <h1 className="font-bold text-lg">{props.data[0]}</h1>
                <p className="italic">{props.data[1]}</p>
                <span className="text-2xl text-gray-600">${props.data[2]}</span>
            </div>
            <form onSubmit={submitHandler} className="flex flex-col items-center justify-evenly">
                <input type="number" min="1" max="5" value={amount} onChange={changeHandler} className="w-16 pl-2 border-2 rounded-md"/>
                <button className="flex items-center border-2 rounded-3xl bg-zinc-800 hover:bg-black px-5 py-2">
                    <span className="text-white mr-2">Add</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                </button>
            </form>
        </li>
    );
}

export default EachItem;