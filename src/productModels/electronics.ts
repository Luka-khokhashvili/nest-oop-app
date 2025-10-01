import { product } from './product';

export class electronics extends product {
  private _warrantyYears: number;

  constructor(id: number, name: string, price: number, warrantyYears: number) {
    super(id, name, price);
    this._warrantyYears = warrantyYears;
  }

  public get warrantyYears(): number {
    return this._warrantyYears;
  }

  // Electronics mostly get smaller discount on their prices
  public override getDiscountedPrice(discount: number): number {
    const effectiveDiscount = Math.min(discount * 0.05);
    return super.getDiscountedPrice(effectiveDiscount);
  }
}
