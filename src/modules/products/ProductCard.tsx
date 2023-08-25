import React from 'react'
import BagIcon from '@/components/icons/BagIcon'
import Image from 'next/image'
import { ProductType } from '@/typings/products'
import HeartIcon from '@/components/icons/HeartIcon'
import { addCartToLocal } from '@/utils/cartLocalstorage'
import Rating from '@/components/common/Rating'
import { CartType } from '@/typings/cart'
import { CartContext, CartContextType } from '@/context/CartContext'
import { toast } from 'react-toastify'

interface ProductCardProps {
  product: ProductType
}

const ProductCard = (props: ProductCardProps) => {
  const { product } = props
  const [isHover, setIsHover] = React.useState(false)
  const { cart, setCart } = React.useContext<CartContextType>(CartContext)

  const toggleHover = () => {
    setIsHover(!isHover)
  }

  const handleCart = () => {
    const cartData = {
      ...product,
      quantity: 1
    }
    const tempCart = [...cart]
    if (tempCart && tempCart.length > 0) {
      const index = tempCart.findIndex(
        (item: CartType) => item.id === product.id
      )
      if (index !== -1) {
        tempCart[index].quantity += 1
      } else {
        tempCart.push(cartData)
      }
    } else {
      tempCart.push(cartData)
    }
    setCart(tempCart)
    addCartToLocal(tempCart)
    toast.success('Added to cart successfully', {
      position: 'top-center'
    })
  }
  return (
    <div className="capitalize cursor-pointer border shadow-sm bg-gray-50 transition-all duration-300 text-primary-900 ">
      <div
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        className="bg-white relative  "
      >
        <div className="h-48 min-w-[128px] w-32 relative  mx-auto">
          <Image
            src={product?.images[0]}
            alt={product?.title}
            fill
            className="w-auto h-auto object-contain"
          />
        </div>
        <div
          className={` absolute inset-0 bg-black bg-opacity-60 ${
            isHover ? 'flex flex-col justify-between' : 'hidden'
          }  transition-all duration-300 `}
        >
          <button className="self-end mt-2 mr-2">
            <HeartIcon fill="#ffffff" />
          </button>
          <button
            onClick={handleCart}
            type="button"
            className="text-white mx-4 mb-8 bg-primary-800 rounded-full px-4 py-2 flex space-x-3"
          >
            <BagIcon fill="#ffffff" />
            <span> Add to bag </span>
          </button>
        </div>
      </div>
      <div className=" px-4 py-[10px] bg-gray-50 space-y-2">
        <div className="font-semibold line-clamp-2">{product?.title}</div>
        <div className="">${product?.price}</div>
        <Rating rating={product?.rating} />
      </div>
    </div>
  )
}

export default ProductCard
