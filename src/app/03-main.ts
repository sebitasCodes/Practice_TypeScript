import { ProductHttpServices } from "./services/product-http.service";

(async() => {
  const requests = new ProductHttpServices()
  console.log('---'.repeat(10));
  const allProducts = await requests.getAll()
  console.log(allProducts)

  const justOneProduct = await requests.findOne(42)
  console.log(justOneProduct)

  const updateResults = await requests.update(42, {
    title: 'something else',
    price: 4000
  })
  console.log(updateResults)
})();





