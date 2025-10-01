import { product } from './product';

export class clothing extends product {
  private _size: string;
  constructor(id: number, name: string, price: number, size: string) {
    super(id, name, price);
    this._size = size;
  }

  public get size(): string {
    return this._size;
  }

  public override getDiscountedPrice(discount: number): number {
    const randomDiscount = Math.random() * (discount - 0.1) + 0.1;
    const truncatedDiscount = Math.trunc(randomDiscount * 100) / 100;
    return super.getDiscountedPrice(truncatedDiscount);
  }
}
