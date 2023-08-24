import React from 'react'
import BagIcon from '@/components/icons/BagIcon'
import EmptyStarIcon from '@/components/icons/EmptyStarIcon'
import FilledStarIcon from '@/components/icons/FilledStarIcon'
import Image from 'next/image'
import { ProductType } from '@/typings/products'

interface ProductCardProps {
  product: ProductType
}

const ProductCard = (props: ProductCardProps) => {
  const { product } = props
  const [isHover, setIsHover] = React.useState(false)

  const toggleHover = () => {
    setIsHover(!isHover)
  }

  const handleCart = () => {
    console.log('cart')
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
            isHover ? 'grid' : 'hidden'
          } place-items-center transition-all duration-300 `}
        >
          <button
            onClick={handleCart}
            type="button"
            className="text-white bg-primary-800 rounded-full px-4 py-2 flex space-x-3"
          >
            <BagIcon fill="#ffffff" />
            <span> Add to bag </span>
          </button>
        </div>
      </div>
      <div className=" px-4 py-[10px] bg-gray-50 space-y-2">
        <div className="font-semibold line-clamp-2">{product?.title}</div>
        <div className="">${product?.price}</div>
        <div className="flex">
          {Array.from({
            length: parseInt(product?.rating.toString())
          }).map((_, index) => (
            <FilledStarIcon key={index} />
          ))}
          {Array.from({
            length: 5 - parseInt(product?.rating.toString())
          }).map((_, index) => (
            <EmptyStarIcon key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
