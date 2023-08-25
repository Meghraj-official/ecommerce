import Container from '@/components/container/Container'
import BagIcon from '@/components/icons/BagIcon'
import HeartIcon from '@/components/icons/HeartIcon'
import SearchIcon from '@/components/icons/SearchIcon'
import { headerNavigations } from '@/configs/header'
import { CartContext, CartContextType } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const { cart } = React.useContext<CartContextType>(CartContext)
  return (
    <nav>
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={200}
                height={52}
              />
            </Link>
          </div>
          <div>
            <ul className="hidden lg:flex items-center space-x-6">
              {headerNavigations?.map((item) => (
                <li key={item?.title}>
                  <Link
                    className="py-2 px-4 capitalize text-primary-900  hover:bg-primary-800 hover:text-white transition-all duration-300"
                    href={item?.path}
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex space-x-4 items-center">
            <div className="hidden lg:block">
              <SearchIcon />
            </div>
            <Link href="/cart">
              <div className="relative">
                {cart?.length > 0 && (
                  <span className="absolute bg-primary-800 text-white -right-1 -top-1 text-xs font-medium h-fit min-w-[16px] min-h-4 grid place-items-center rounded-full">
                    {cart?.length}
                  </span>
                )}
                <BagIcon />
              </div>
            </Link>
            <div className="hidden lg:block">
              <HeartIcon />
            </div>
            <Image
              src="/images/profile.png"
              className="rounded-full"
              alt="avatar"
              width={40}
              height={40}
            />
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Header
