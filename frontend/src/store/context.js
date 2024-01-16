import { createContext, useEffect, useState } from "react";

const CartContext = createContext({
    cart: [],
    cartLength: 0,
    addToCart: () => { },
    placeOrder: () => {}
})

export const CartContextProvider = (props) => {
    const [cart, setCart] = useState(JSON.parse(window.localStorage.getItem('cart') || '[]'));
    const addToCart = (newItem) => {
            setCart(() => [...cart, newItem])
    }
    useEffect(() => {
        window.localStorage.setItem('cart',JSON.stringify(cart));
    }, [cart]);

    const context = { cart: cart, cartLength:cart.length, addToCart:addToCart}
    return <CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>
}
export default CartContext