"use client"
import { createContext, useState } from "react"
export const CartContext = createContext()

function CartProvider({ children }) {

const [cart, setCart] = useState([])

const addToCard = (product) => {
    setCart(prev => {
        const selectProduct = prev.find(item => item.id == product.id)
        if (!selectProduct) {
            return [...prev, { ...product, quantity: 1 }]
        } else {
            return prev.map(item => item.id == product.id ? { ...item, quantity: item.quantity + 1 } : item)
        }

    })
}
const removeFromCard = (product) => {
    setCart(prev => {
        return prev.filter(item => item.id != product.id)
    })
}
const updateQuantity = (productId, newQuantity) => {
    setCart(prev => {
        return prev.map(item => item.id == productId) ? { ...item, quantity: newQuantity } : item
    })
}
const total = () => {
    let allTotal = 0;
    cart.map(item => {
        allTotal += item.price * item.quantity
    })
    return allTotal
}


    return (
        <CartContext.Provider value={{ cart, addToCard, removeFromCard, updateQuantity, total }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider