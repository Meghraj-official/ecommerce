import API from '@/services'
import { useRouter } from 'next/router'
import React from 'react'
import { useQuery } from 'react-query'

const Filter = () => {
  const router = useRouter()

  const { data: categories, isLoading } = useQuery(
    'categories',
    API.categories.getAllCategories
  )

  if (isLoading) {
    return null
  }

  return (
    <>
      <div className="lg:hidden w-fit">
        <select
          onChange={(e) =>
            router.push(`/?category=${e.target.value}`, undefined, {
              shallow: true
            })
          }
          className="w-full border border-gray-300 rounded-md px-4 py-2 capitalize focus:outline-none"
        >
          <option value="">All Categories</option>
          {categories?.map((category: string) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="min-w-[250px] h-fit bg-white shadow hidden lg:block">
        <h4 className="px-4 py-[10px] text-lg font-semibold">All Categories</h4>
        <div>
          <ul>
            {categories && !categories[0] ? (
              <div className="px-4 py-2">No Categories Found</div>
            ) : (
              categories?.map((category: string) => (
                <li
                  onClick={() =>
                    router.push(`/?category=${category}`, undefined, {
                      shallow: true
                    })
                  }
                  key={category}
                  className="capitalize cursor-pointer hover:bg-primary-800 hover:text-white transition-all duration-300 text-primary-900 px-4 py-[10px]"
                >
                  {category}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Filter
