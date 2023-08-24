import apiInstance from '@/lib/axios'
const ALL_CATEGORIES_ROUTE = '/products/categories'

export const getAllCategories = () => {
  return apiInstance.get(`${ALL_CATEGORIES_ROUTE}`)
}
