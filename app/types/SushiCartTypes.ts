export type TProduct = {
  name: string;
  color: string;
  description: string;
};
export type TOrderProduct = {
  product: TProduct,
  quantity: number,
}
