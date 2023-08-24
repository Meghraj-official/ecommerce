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

  //   console.log(categories)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-w-[250px] h-fit bg-white shadow">
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
  )
}

export default Filter
