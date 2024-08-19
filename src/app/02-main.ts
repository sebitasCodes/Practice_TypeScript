import { ProdcutmemoryService } from './services/product.service';

const productService = new ProdcutmemoryService();

productService.create({
  title: 'product',
  price: 100,
  description: 'gvon',
  categoryId: 12,
  images: [],
});

const products = productService.getAll();
console.log(products)
const productId = products[0].id;

productService.update(productId, {
  title: 'mauricion',
});

const response = productService.findOne(productId)

console.log(response)
