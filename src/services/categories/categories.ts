import apiInstance from '@/lib/axios'

const ALL_CATEGORIES_ROUTE = 'products/categories'

export const getAllCategories = async () => {
  return (await apiInstance.get(`${ALL_CATEGORIES_ROUTE}`))?.data
}
