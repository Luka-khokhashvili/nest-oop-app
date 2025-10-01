export interface IProduct {
  id: number;
  name: string;
  price: number;
  getDiscountedPrice(discount: number): number;
}
