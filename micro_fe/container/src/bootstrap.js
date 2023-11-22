import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartIndex';

productsMount(document.querySelector('#container_products'))
cartMount(document.querySelector('#container_cart'))
console.log("Container")