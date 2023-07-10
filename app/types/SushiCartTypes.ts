export type TProduct = {
  name: string;
  color: string;
  description: string;
  price: number;
  img: string
};
export type TOrderProduct = {
  product: TProduct,
  quantity: number,
}

export type TLabelProps ={
  text: string,
  isModal?: boolean
}