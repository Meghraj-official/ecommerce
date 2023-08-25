import { CartType } from '@/typings/cart'
import { getCartFromLocal } from '@/utils/cartLocalstorage'
import React, { useEffect, useState } from 'react'

export interface CartContextType {
  cart: CartType[] | []
  setCart: React.Dispatch<React.SetStateAction<CartType[] | []>>
}

export const CartContext = React.createContext<CartContextType>(
  [] as unknown as CartContextType
)

interface CartContextProviderProps {
  children: React.ReactNode
}

const CartContextProvider = (props: CartContextProviderProps) => {
  const { children } = props

  const [cart, setCart] = useState<CartType[] | []>([])

  useEffect(() => {
    const cartData = getCartFromLocal()
    if (cartData) {
      setCart(cartData)
    }
  }, [])

  const value = {
    cart,
    setCart
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartContextProvider
