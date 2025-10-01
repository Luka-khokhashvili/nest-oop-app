import { IProduct } from 'src/interfaces/IProduct';

export class product implements IProduct {
  private readonly _id: number;
  private _name: string;
  protected _price: number;

  constructor(id: number, name: string, price: number) {
    this._id = id;
    this._name = name;
    this._price = price;
  }

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get price(): number {
    return this._price;
  }

  public getDiscountedPrice(discount: number): number {
    return this._price * (1 - discount);
  }
}
