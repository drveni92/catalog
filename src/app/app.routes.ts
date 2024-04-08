import {Routes} from '@angular/router';

import {CatalogComponent} from "./components/catalog/catalog.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'home', component: CatalogComponent},
  {path: 'category/:id', component: CatalogComponent}
];
