import useSWR from 'swr'
import { CATEGORIES_API_URL } from '@/modules/categories/constants'
import { getCategoriesService } from '@/modules/categories/services/categories-service'

export const useCategories = () => {
  const { data, error, isLoading, mutate } = useSWR(CATEGORIES_API_URL, () => getCategoriesService())

  return { data, error, isLoading, mutate }
}
