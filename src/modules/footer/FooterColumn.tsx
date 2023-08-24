import { NavigateItemsType } from '@/typings/footer'
import Link from 'next/link'
import React from 'react'

interface FooterColumnProps {
  items: NavigateItemsType[]
  columnTitle: string
}

const FooterColumn: React.FC<FooterColumnProps> = (props) => {
  const { items, columnTitle } = props

  return (
    <div>
      <h3 className="text-xl capitalize font-semibold mb-8">{columnTitle}</h3>
      <ul className="space-y-2">
        {items?.map((item) => (
          <li
            key={item?.title}
            className="text-base hover:underline capitalize text-neutral-300"
          >
            <Link href={item?.path}>{item?.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterColumn
