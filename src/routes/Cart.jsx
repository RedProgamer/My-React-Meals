import { Fragment } from "react/cjs/react.production.min";
import CartMenu from "../components/CartMenu";
import CartNavbar from "../components/UI/CartNavbar";

function Cart() {
    return (
        <div className="bg-gray-50">
            <CartNavbar />
            <CartMenu />
        </div>
    );
}

export default Cart;