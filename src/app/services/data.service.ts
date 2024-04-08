import { Injectable } from '@angular/core';

import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getProducts(): Product[] {
    return [
      {
        name: 'Product 1',
        color: 'blue',
        size: 'L',
        category: 'One'
      },
      {
        name: 'Product 2',
        color: 'blue',
        size: 'L',
        category: 'One'
      },
      {
        name: 'Product 3',
        color: 'green',
        size: 'XL',
        category: 'One'
      },
      {
        name: 'Product 4',
        color: 'blue',
        size: 'L',
        category: 'Second'
      },
      {
        name: 'Product 5',
        color: 'yellow',
        size: 'L',
        category: 'Second'
      },
      {
        name: 'Product 6',
        color: 'blue',
        size: 'L',
        category: 'Second'
      },
      {
        name: 'Product 7',
        color: 'blue',
        size: 'M',
        category: 'One'
      },
      {
        name: 'Product 8',
        color: 'red',
        size: 'XXL',
        category: 'Second'
      },
      {
        name: 'Product 9',
        color: 'blue',
        size: 'L',
        category: 'One'
      },
      {
        name: 'Product 10',
        color: 'black',
        size: 'S',
        category: 'Second'
      },
    ];
  }
}
