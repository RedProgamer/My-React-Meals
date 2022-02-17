import { useContext } from 'react';
import CartProvider from '../Context/cart-provider';
import EachItem from './EachItem';

function MenuItems({ menu }) {
    const ctx = useContext(CartProvider);

    const newItemHandler = (item) => {
        ctx.addItem(item);
    };
    
    const menuItemsList = menu.map(item => {
        return <EachItem key={item.id} data={[item.name, item.description, item.price, item.id]} addNewItem={newItemHandler}/>
    });

    return (
        <ul className="flex-1 w-full">
            {menuItemsList}
        </ul>
    );
}

export default MenuItems;