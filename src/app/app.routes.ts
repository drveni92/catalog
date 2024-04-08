import {Routes} from '@angular/router';

import {CatalogComponent} from "./components/catalog/catalog.component";

export const routes: Routes = [
  {path: '', redirectTo: '/catalog', pathMatch: "full"},
  {path: 'catalog', component: CatalogComponent}
];
