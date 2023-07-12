export type TProduct = {
  id: string;
  name: TInternationalText;
  color: string;
  description: TInternationalText;
  category: string;
  price: number;
  img: string;
  ingredients: string[];
};

export type TOrderProduct = {
  product: TProduct;
  quantity: number;
};

export type TInternationalText = {
  es: string;
  en: string;
};
