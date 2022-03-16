import Card from "./UI/Card";
import MenuItems from "./Menu/MenuItems";
import axios from "axios";
import { useState, useEffect } from "react";

function FoodMenu() {

    const [menu, setMenu] = useState([]);
    useEffect(() => {
        axios
        .get('http://localhost:3000/menu')
        .then(response => setMenu(response.data))
    }, []);

    return (
        <section className="bg-gray-50 pt-5 flex flex-col justify-center" id="menu">
            <h1 className="text-3xl text-center">
                Menu
            </h1>
            <Card className="flex justify-evenly mt-5">
                <div className="flex w-full sm:w-[90%] lg:w-3/5 justify-center bg-white rounded-lg">
                    <MenuItems menu={menu} />
                </div>
            </Card>
        </section>
    );
}

export default FoodMenu;