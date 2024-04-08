import { Injectable } from '@angular/core';

import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  async getProducts(): Promise<Product[]> {
    return [
      {
        name: 'Product 1',
        color: 'blue',
        size: 'L',
        category: 1
      },
      {
        name: 'Product 2',
        color: 'blue',
        size: 'L',
        category: 2
      },
      {
        name: 'Product 3',
        color: 'green',
        size: 'XL',
        category: 3
      },
      {
        name: 'Product 4',
        color: 'blue',
        size: 'L',
        category: 4
      },
      {
        name: 'Product 5',
        color: 'yellow',
        size: 'L',
        category: 2
      },
      {
        name: 'Product 6',
        color: 'blue',
        size: 'L',
        category: 2
      },
      {
        name: 'Product 7',
        color: 'blue',
        size: 'M',
        category: 1
      },
      {
        name: 'Product 8',
        color: 'red',
        size: 'XXL',
        category: 4
      },
      {
        name: 'Product 9',
        color: 'blue',
        size: 'L',
        category: 4
      },
      {
        name: 'Product 10',
        color: 'black',
        size: 'S',
        category: 4
      },
    ];
  }

  async getProductsByCategory(id: number): Promise<Product[]> {
    const allProducts = await this.getProducts();
    return allProducts.filter(product => product.category === +id)
  }
}
