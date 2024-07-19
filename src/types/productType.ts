export type TRegularPrice = {
  currency: string;
  value: number;
}

export type TProduct = {
  type: string;
  id: number;
  sku: string;
  title: string;
  regular_price: TRegularPrice;
  image: string;
  brand: number;
}
