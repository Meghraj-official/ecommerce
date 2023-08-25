import { CartType } from '@/typings/cart'

export const getCartFromLocal = () => {
  const cart: CartType[] = JSON.parse(localStorage?.getItem('cart') as string)
  return cart
}

export const addCartToLocal = (cartItem: CartType[]) => {
  localStorage.setItem('cart', JSON.stringify(cartItem))
}
