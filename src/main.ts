import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { product } from './productModels/product';
import { electronics } from './productModels/electronics';
import { clothing } from './productModels/clothing';
import { cart } from './cartModels/cart';

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
console.log('\nProduct test cases:\n');

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
const newCart = new cart(book, 5);

console.log('\nCart test cases:\n');

console.log(
  `You have ${newCart.quantity} ${newCart.product.name} in your cart.\nTotal price:${newCart.getTotal()}$`,
);
