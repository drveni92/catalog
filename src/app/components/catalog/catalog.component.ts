import {Component, OnInit} from '@angular/core';

import {Product} from "../../models/product";
import {DataService} from "../../services/data.service";
import {NgOptimizedImage} from "@angular/common";
import {CategoryComponent} from "../category/category.component";
import {RouterLink} from "@angular/router";
import {ListComponent} from "../list/list.component";

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CategoryComponent,
    RouterLink,
    ListComponent
  ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {

  products: Product[] = [];

  constructor(private readonly dataService: DataService) {
  }

  ngOnInit() {
    this.products = this.dataService.getProducts();
  }
}
