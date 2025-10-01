import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { product } from './productModels/product';
import { electronics } from './productModels/electronics';
import { clothing } from './productModels/clothing';
import { cart } from './cartModels/cart';
import { shoppingCart } from './cartModels/shoppingCart';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

// Sample product test cases
const book = new product(101, 'NestJS basics', 45);
const laptop = new electronics(201, 'ASUS Vivobook', 300, 2);
const hoodie = new clothing(301, 'Hawks jersie', 120, 'S');
const jacket = new clothing(302, 'Typescript merch', 95, 'L');

// Plase enter discount amount from 0.1 to 0.9
console.log('\n|||| Product test cases ||||\n');

console.log(
  `Book ${book.name} costs ${book.price}$ but is discounted to ${book.getDiscountedPrice(0.2)}$\n`,
);
console.log(
  `We have a new laptop ${laptop.name} which costs ${laptop.price}, but because its a new arrival, we have a discount: ${laptop.getDiscountedPrice(0.3)}$\n`,
);
console.log(
  `Hello, this ${hoodie.name} normally costs ${hoodie.price}$, but its in sale, so discounted price is ${hoodie.getDiscountedPrice(0.15)}$\n`,
);
console.log(
  `We also have this new ${jacket.name}, which has discounted price of ${jacket.getDiscountedPrice(0.15)}$ from ${jacket.price}$\n`,
);

// Sample cart test cases
const bookCart = new cart(book, 5);
const laptopCart = new cart(laptop, 3);
const hoodieCart = new cart(hoodie, 4);

console.log('\n|||| Cart test cases ||||\n');

console.log(
  `You have ${bookCart.quantity} ${bookCart.product.name} in your cart.\nTotal price:${bookCart.getTotal()}$`,
);
console.log(
  `Electorincs cart has ${laptopCart.quantity} ${laptopCart.product.name}.\nTotal price: ${laptopCart.getTotal()}$`,
);

// Sample shopping cart test case
const newShoppingCart = new shoppingCart();

// Add items to the shopping cart
newShoppingCart.addItem(bookCart);
newShoppingCart.addItem(laptopCart);
newShoppingCart.addItem(hoodieCart);

console.log('\n|||| Shopping cart test cases ||||\n');

console.log(
  `Your shopping cart total price is ${newShoppingCart.getTotalPrice()}$\nAfter using your discount code, final price is ${newShoppingCart.getTotalPriceWithDiscount(0.25)}$\n`,
);

// remove item from shopping cart
newShoppingCart.removeItem(laptopCart.product.id);

console.log(
  `After removing all ${laptopCart.product.name} from you shopping cart\nNew total price is ${newShoppingCart.getTotalPrice()}$\nand final price after discount ${newShoppingCart.getTotalPriceWithDiscount(0.25)}$`,
);
