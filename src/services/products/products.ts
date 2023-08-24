import apiInstance from '@/lib/axios'

const ALL_PRODUCTS_ROUTE = 'products'

interface ProductsParams {
  limit?: number
  skip?: number
}

export const getAllProducts = async (params: ProductsParams) => {
  const { limit = 10, skip = 1 } = params
  return (
    await apiInstance.get(`${ALL_PRODUCTS_ROUTE}?limit=${limit}&skip=${skip}`)
  ).data
}

interface ProductsParamsByCategory {
  limit?: number
  skip?: number
  category: string
}
export const getAllProductsByCategory = async (
  params: ProductsParamsByCategory
) => {
  const { limit = 10, skip = 1, category } = params
  return (
    await apiInstance.get(
      `${ALL_PRODUCTS_ROUTE}/category/${category}?limit=${limit}&skip=${skip}`
    )
  ).data
}
