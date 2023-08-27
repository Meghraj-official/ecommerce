import API from '@/services'
import { ProductType, ProductsResponseType } from '@/typings/products'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import ProductCard from './ProductCard'
import Pagination from '@/components/pagination/Pagination'
import Loader from '@/components/loader/Loader'

const pageLimit = 12

const ProductList = () => {
  const router = useRouter()
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(0)

  const [products, setProducts] = useState<ProductType[] | []>([])

  const {
    isLoading: productLoading,
    refetch: productRefetch,
    isRefetching: productRefetching
  } = useQuery(
    ['products', page],
    () =>
      API.products.getAllProducts({
        skip: page * pageLimit,
        limit: pageLimit
      }),
    {
      onSuccess: (data: ProductsResponseType) => {
        setProducts(data?.products)
        setTotal(data?.total)
      }
    }
  )
  const {
    refetch: categoryRefetch,
    isRefetching: categoryRefetching,
    isLoading: categoryLoading
  } = useQuery(
    ['productsByCategory', page, router.query.category],
    () =>
      API.products.getAllProductsByCategory({
        skip: page * pageLimit,
        limit: pageLimit,
        category: router.query.category as string
      }),
    {
      enabled: router.query.category ? true : false,
      onSuccess: (data: ProductsResponseType) => {
        setProducts(data?.products)
        setTotal(data?.total)
      }
    }
  )

  useEffect(() => {
    if (router?.query?.category) {
      categoryRefetch()
      setPage(0)
    } else {
      productRefetch()
    }
  }, [router?.query?.category])

  const handlePageChange = (page: number) => {
    setPage(page)
    if (router.query.category) {
      categoryRefetch()
    } else productRefetch()
    scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (
    productLoading ||
    categoryRefetching ||
    categoryLoading ||
    productRefetching
  ) {
    return (
      <div className="h-[70vh] flex items-center justify-center w-full">
        <Loader />
      </div>
    )
  }

  return (
    <div className="w-full">
      <h4 className="px-4 py-[10px] text-lg font-semibold capitalize">
        {!router?.query?.category ? 'All Products' : router?.query?.category}
      </h4>
      {products && !products[0] ? (
        <div className="h-[70vh] flex items-center justify-center w-full text-xl font-bold ">
          No Product Found
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {products?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      )}
      <Pagination
        itemsPerPage={pageLimit}
        total={total}
        currentPage={page}
        onChange={handlePageChange}
      />
    </div>
  )
}

export default ProductList
