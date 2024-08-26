//products crud(create,read,update,delete) operations 
import makeNetworkCall from "./api-client.js";
import Product from '../models/product.js';

const productOperations = {
    products: [], //key value 
    search(pizzaId) {
         const product = this.products.
         find(currentProduct=>currentProduct.id==pizzaId);
         console.log('Product Found' , product);
         product.isAddedInCart = true;
         console.log('Array',this.products);
    },
     getProductsInCart(){
        const productInBasket = this.products.filter(product=>product.isAddedInCart)
        return productInBasket;
     },  

    async loadProducts(){
const pizzas = await makeNetworkCall();
const pizzaArray = pizzas['Vegetarian'];
const productsArray = pizzaArray.map(pizza=>{
    const currentPizza = new Product(pizza.id, pizza.name, pizza.menu_description, pizza.price, pizza.assets.product_details_page[0].url )
    return currentPizza;
})
console.log('******Product Array ', productsArray);
this.products = productsArray;
return productsArray;
    }
    sortProducts() {

    }
    searchProducts() {
 
    }
}
export default productOperations;