import Navbar from "./components/UI/Navbar";
import Home from "./components/Home";
import FoodMenu from "./components/FoodMenu";
import { Fragment } from "react/cjs/react.production.min";

export default function App() {
    return (
        <Fragment>
            <Navbar />
            <Home />
            <FoodMenu />
        </Fragment>
    )
};