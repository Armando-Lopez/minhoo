import { apiAuth } from "@/lib/api";
import { ApiResponseHeader } from "@/types/api-response";
import { CATEGORIES_API_URL } from "@/modules/categories/constants";

export type Category = {
  id: number;
  name: string;
  es_name: string;
  available: string;
};

export type getCategoriesPort = () => Promise<{ categories: Category[] }>;

export const getCategoriesService: getCategoriesPort = async () => {
  const response = await apiAuth.get(CATEGORIES_API_URL).json<
    ApiResponseHeader & {
      body: {
        categories: Category[];
      };
    }
  >();
  if (response.header.success) {
    return response.body;
  }

  throw new Error(response.header.messages[0]);
};
