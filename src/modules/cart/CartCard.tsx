import Rating from '@/components/common/Rating'
import MinusIcon from '@/components/icons/MinusIcon'
import PlusIcon from '@/components/icons/PlusIcon'
import { CartContext, CartContextType } from '@/context/CartContext'
import { CartType } from '@/typings/cart'
import { addCartToLocal } from '@/utils/cartLocalStorage'
import Image from 'next/image'
import React, { useContext } from 'react'

interface CartCardProps {
  cartData: CartType
}

const findCartItemIndex = (cart: CartType[], id: number | undefined) => {
  return cart.findIndex((item) => item?.id === id)
}

const CartCard: React.FC<CartCardProps> = (props) => {
  const { cartData } = props
  const [quantity, setQuantity] = React.useState(cartData?.quantity)
  const { cart, setCart } = useContext<CartContextType>(CartContext)

  // Handles the quantity input
  const handleQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.valueAsNumber > cartData?.stock) {
      return
    }
    if (event.target.value === '') {
      setQuantity(event.target.valueAsNumber)
      return
    }

    setQuantity(event.target.valueAsNumber)
    const tempCart = [...cart]
    if (tempCart && tempCart.length > 0) {
      const index = findCartItemIndex(tempCart, cartData?.id)
      if (index !== -1) {
        tempCart[index].quantity = event.target.valueAsNumber
      }
    }
    addCartToLocal(tempCart)
    setCart(tempCart)
  }

  // Handles the plus and minus button
  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change
    const tempCart = [...cart]
    if (newQuantity >= 1 && newQuantity <= cartData?.stock) {
      setQuantity(newQuantity)
      const index = findCartItemIndex(cart, cartData?.id)
      if (index !== -1) {
        tempCart[index].quantity = newQuantity
      }
    }
    addCartToLocal(cart)
    setCart([...cart])
  }

  // Handles the remove button
  const handleRemove = () => {
    const tempCart = [...cart]
    if (tempCart && tempCart.length > 0) {
      const index = findCartItemIndex(tempCart, cartData?.id)

      if (index !== -1) {
        tempCart.splice(index, 1)
      }
    }

    addCartToLocal(tempCart)
    setCart(tempCart)
  }

  return (
    <>
      <td className="flex flex-col lg:flex-row md:space-x-4 w-fit py-2">
        <div className="relative inline-block h-28 w-20 md:h-36 md:w-28">
          <Image
            src={cartData?.thumbnail}
            alt={cartData?.title}
            fill
            className="w-auto h-auto object-contain"
          />
        </div>

        <div className="flex flex-col w-fit capitalize space-y-1">
          <span className="font-medium text-base md:text-lg line-clamp-2">
            {cartData?.title}
          </span>
          <span className="text-xs md:text-sm">{cartData?.category}</span>
          <Rating rating={cartData?.rating} />
        </div>
      </td>
      <td className="text-sm md:text-lg text-center font-medium">
        ${cartData?.price}
      </td>
      <td className="text-lg font-medium text-center">
        <div className="flex items-center justify-center space-x-1 md:space-x-4">
          <button
            type="button"
            onClick={() => handleQuantityChange(-1)}
            className=""
          >
            <MinusIcon />
          </button>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantity}
            className="border w-12 pl-2 text-gray-500 font-normal"
            min={1}
            max={cartData?.stock}
          />
          <button
            type="button"
            onClick={() => handleQuantityChange(1)}
            className=""
          >
            <PlusIcon />
          </button>
        </div>
        <div className="text-sm font-thin mt-4"> Max: {cartData?.stock}</div>
      </td>
      <td className="text-sm md:text-lg font-medium text-center space-y-6">
        <div> ${quantity ? cartData?.price * quantity : 0}</div>
        <button
          type="button"
          onClick={handleRemove}
          className="border border-red-500 py-1 px-2 rounded-full text-red-500 text-xs md:text-sm"
        >
          Remove{' '}
        </button>
      </td>
    </>
  )
}

export default CartCard
