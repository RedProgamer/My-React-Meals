import reactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContextProvider from "./components/Context/CartContextProvider";
import Cart from "./routes/Cart";
import App from "./App";
import "./index.css";

reactDOM.render(
    <CartContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                    <Route path="cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    </CartContextProvider>,
    document.getElementById('root'));