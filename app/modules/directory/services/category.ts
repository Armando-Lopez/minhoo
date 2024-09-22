import { getCategoriesPort } from "@modules/directory/domain/directory";
import { CATEGORIES_API_URL } from "@modules/directory/domain/constants";

export const getCategoriesService: getCategoriesPort = async () => {
  try {
    const response = await fetch(CATEGORIES_API_URL).then((r) => r.json());
    return response.body.categories;
  } catch (error) {
    console.error(error);
  }
}