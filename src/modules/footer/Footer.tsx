import Container from '@/components/container/Container'
import React from 'react'
import FooterColumn from './FooterColumn'
import { explore, navigate, shop, socialLinks } from '@/configs/footer'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white">
      <Container>
        <div className="flex flex-col">
          <div className="border-b border-opacity-20 border-white pb-8 grid grid-cols-4 gap-5 pt-20">
            <FooterColumn columnTitle="navigate" items={navigate} />
            <FooterColumn columnTitle="shop" items={shop} />
            <FooterColumn columnTitle="explore" items={explore} />
            <div className="space-y-9">
              <Link href="/">
                <Image
                  src="/images/logo-white.png"
                  alt="logo"
                  width={200}
                  height={52}
                />
              </Link>
              <div className="flex flex-col text-neutral-300">
                <span>60-49 Road 11378 New York</span>
                <span>
                  <a href="tel:+65 11 188 888">+65 11 188 888</a>
                </span>
                <span>
                  <a href="mailto:chicseduire@gmail.com">
                    chicseduire@gmail.com
                  </a>
                </span>
              </div>
              <div>
                <ul>
                  {socialLinks?.map((item) => (
                    <li key={item?.title} className="inline-block mr-4">
                      <a
                        href={item?.path}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <item.icon />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="py-10 text-center">
            <p className="text-sm">
              Copyright © {new Date()?.getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
