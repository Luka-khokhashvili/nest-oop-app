import { ICartItem } from 'src/interfaces/ICartItem';
import { IProduct } from 'src/interfaces/IProduct';

export class cart implements ICartItem {
  private _product: IProduct;
  protected _quantity: number;

  constructor(product: IProduct, quantity: number) {
    this._product = product;
    this._quantity = quantity;
  }

  public get product(): IProduct {
    return this._product;
  }

  public get quantity(): number {
    return this._quantity;
  }

  public getTotal(): number {
    return this._product.price * this._quantity;
  }
}
