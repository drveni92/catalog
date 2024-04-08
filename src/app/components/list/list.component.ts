import {Component, Input} from '@angular/core';
import {ProductComponent} from "../product/product.component";
import {Product} from "../../models/product";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ProductComponent,
    NgForOf
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() products: Product[];

}
