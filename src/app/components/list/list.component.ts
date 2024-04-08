import {Component, Input, OnInit} from '@angular/core';
import {ProductComponent} from "../product/product.component";
import {NgForOf} from "@angular/common";
import {FilterComponent} from "../filter/filter.component";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../services/data.service";
import {Product} from "../../models/product";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ProductComponent,
    NgForOf,
    FilterComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  products: Product[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private readonly dataService: DataService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.dataService.getProductsByCategory(id).then(products => {
        this.products = products;
      });
    })
  }

}
