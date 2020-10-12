import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { AdminComponent } from "./admin/admin.component";
import { List1DetailsComponent } from "./list1-details/list1-details.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "admin",
    component: AdminComponent,
  },
];
