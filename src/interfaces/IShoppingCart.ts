import { ICartItem } from './ICartItem';

export interface IShoppingCart {
  addItem(item: ICartItem): void;
  removeItem(productId: number): void;
  getTotalPrice(): number;
  getTotalPriceWithDiscount(discount: number): number;
}
