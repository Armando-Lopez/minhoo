export type Category = {
  id: number;
  name: string;
  es_name: string;
  available: string;
};

export type getCategoriesPort = () => Promise<Category[]>;