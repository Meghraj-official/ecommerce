import Rating from '@/components/common/Rating'
import { CartContext, CartContextType } from '@/context/CartContext'
import { CartType } from '@/typings/cart'
import { addCartToLocal } from '@/utils/cartLocalstorage'
import Image from 'next/image'
import React, { useContext } from 'react'

interface CartCardProps {
  cartData: CartType
}

const CartCard: React.FC<CartCardProps> = (props) => {
  const { cartData } = props
  const [quantity, setQuantity] = React.useState(cartData?.quantity)
  const { cart, setCart } = useContext<CartContextType>(CartContext)

  const handleQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.valueAsNumber > cartData?.stock) {
      return
    }

    setQuantity(event.target.valueAsNumber)
    const tempCart = [...cart]
    if (tempCart && tempCart.length > 0) {
      const index = tempCart.findIndex(
        (item: CartType) => item?.id === cartData?.id
      )
      if (index !== -1) {
        tempCart[index].quantity = event.target.valueAsNumber
      }
    }
    addCartToLocal(tempCart)
    setCart(tempCart)
  }

  const handleRemove = () => {
    const tempCart = [...cart]
    if (tempCart && tempCart.length > 0) {
      const index = tempCart.findIndex(
        (item: CartType) => item?.id === cartData?.id
      )
      if (index !== -1) {
        tempCart.splice(index, 1)
      }
    }

    addCartToLocal(tempCart)
    setCart(tempCart)
  }

  return (
    <>
      <td className="flex flex-col md:space-x-4 w-fit py-2">
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
        <input
          type="number"
          value={quantity}
          onChange={handleQuantity}
          className="border w-16 pl-2 text-gray-500 font-normal"
          min={1}
          max={cartData?.stock}
        />
        <div className="text-sm font-thin mt-4"> Max: {cartData?.stock}</div>
      </td>
      <td className="text-sm md:text-lg font-medium text-center space-y-6">
        <div> ${cartData?.price * quantity}</div>
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
