export type TProduct = {
  name: TInternationalText;
  color: string;
  description: TInternationalText;
  categoryId: number;
  price: number;
  img: string;
};

export type TOrderProduct = {
  product: TProduct;
  quantity: number;
};

export type TLabelProps = {
  text: string;
  isModal?: boolean;
};

export type TInternationalText = {
  es: string;
  en: string;
};
