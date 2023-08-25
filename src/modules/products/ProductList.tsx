import API from '@/services'
import { ProductType, ProductsResponseType } from '@/typings/products'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import ProductCard from './ProductCard'

const ProductList = () => {
  const router = useRouter()

  const [page] = React.useState(1)

  const [products, setProducts] = useState<ProductType[] | []>([])

  const { isLoading } = useQuery(
    'products',
    () =>
      API.products.getAllProducts({
        skip: (page - 1) * 10,
        limit: 10
      }),
    {
      onSuccess: (data: ProductsResponseType) => {
        setProducts(data.products)
      }
    }
  )
  const { refetch, isRefetching } = useQuery(
    'productsByCategory',
    () =>
      API.products.getAllProductsByCategory({
        skip: (page - 1) * 10,
        limit: 10,
        category: router.query.category as string
      }),
    {
      enabled: router.query.category ? true : false,
      onSuccess: (data: ProductsResponseType) => {
        setProducts(data.products)
      }
    }
  )

  useEffect(() => {
    if (router.query.category) {
      refetch()
    }
  }, [refetch, router.query.category])

  if (isLoading || isRefetching) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {/* <h4 className="px-4 py-[10px] text-lg font-semibold">All Products</h4> */}
      <div className="grid grid-cols-4 gap-10">
        {products && !products[0] ? (
          <div>No Product Found</div>
        ) : (
          products?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))
        )}
      </div>
    </div>
  )
}

export default ProductList
