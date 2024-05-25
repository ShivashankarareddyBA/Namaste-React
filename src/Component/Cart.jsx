import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import {clearCart} from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart =()=>{
        dispatch(clearCart());
    };

    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            <button className="rounded-lg bg-black text-white m-2 p-1" 
            onClick={handleClearCart}>Clear </button>

            {cartItems.length ===0 && <h1>Your Cart is empty please add some items to it.</h1>}

            <div className="w-5/12 m-auto border-black">
                
                <ItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;
