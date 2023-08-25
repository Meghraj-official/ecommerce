import Container from '@/components/container/Container'
import { CartContext, CartContextType } from '@/context/CartContext'
import CartCard from '@/modules/cart/CartCard'
import { CartType } from '@/typings/cart'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'

const Cart = () => {
  const { cart } = useContext<CartContextType>(CartContext)
  const subTotal = cart
    ?.map((item: CartType) => item?.price * item?.quantity)
    .reduce((a, b) => a + b, 0)

  const shippingCharge = ((10 / 100) * subTotal).toFixed(2)

  return (
    <div>
      <Container>
        <h2 className="text-3xl font-bold">Shopping Bag</h2>
        {cart?.length === 0 ? (
          <div className="text-center text-lg">Your cart is empty</div>
        ) : (
          <>
            <table className="w-full table-fixed  mt-4">
              <thead>
                <tr className="border-y border-neutral-300 leading-10">
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart?.map((item: CartType) => (
                  <tr key={item?.id} className="border-b">
                    <CartCard key={item.id} cartData={item} />
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end mt-4">
              <div className="w-1/2">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">Subtotal</span>
                  <span className="text-lg font-medium text-gray-500">
                    ${subTotal}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">Shipping</span>
                  <span className="text-lg font-medium text-gray-500">
                    ${shippingCharge}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-medium text-gray-500">
                    ${Number(subTotal) + Number(shippingCharge)}
                  </span>
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => {
                      toast('Checkout Feature is not available yet', {
                        position: 'top-center'
                      })
                    }}
                    className="w-fit px-6 rounded-full bg-primary-800 text-white py-2 mt-4"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </Container>
    </div>
  )
}

export default Cart
