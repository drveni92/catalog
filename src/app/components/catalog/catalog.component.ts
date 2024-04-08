import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";

import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit{

  products: Product[];

  constructor(dataService: DataService) {
  }

  ngOnInit() {
    this.products = this.dataService.getProducts();
  }
}
