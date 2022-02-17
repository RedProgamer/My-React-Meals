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
        <section className="mt-10 flex flex-col justify-center" id="menu">
            <h1 className="text-5xl text-center">
                Menu
            </h1>
            <Card className="flex justify-evenly mt-8">
                <div className="flex lg:w-4/6 sm:w-screen justify-center p-4 mb:w-full">
                    <MenuItems menu={menu} />
                </div>
            </Card>
        </section>
    );
}

export default FoodMenu;