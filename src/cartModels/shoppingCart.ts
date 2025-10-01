import { ICartItem } from 'src/interfaces/ICartItem';
import { IShoppingCart } from 'src/interfaces/IShoppingCart';

export class shoppingCart implements IShoppingCart {
  private _items: ICartItem[] = [];

  constructor() {}

  public addItem(item: ICartItem): void {
    this._items.push(item);
  }

  public removeItem(productId: number): void {
    this._items = this._items.filter((item) => item.product.id !== productId);
  }

  getTotalPrice(): number {
    const total = this._items.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
    return total;
  }

  getTotalPriceWithDiscount(discount: number): number {
    const total = this._items.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);

    return total * (1 - discount);
  }
}
