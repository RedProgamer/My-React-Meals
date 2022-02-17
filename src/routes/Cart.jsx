import { Fragment } from "react/cjs/react.production.min";
import CartMenu from "../components/CartMenu";
import CartNavbar from "../components/UI/CartNavbar";

function Cart() {
    return (
        <Fragment>
            <CartNavbar />
            <CartMenu />
        </Fragment>
    );
}

export default Cart;