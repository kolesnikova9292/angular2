import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsComponent } from "./products.component";
import { List1DetailsComponent } from "../list1-details/list1-details.component";

import { ProductsRoutingModule } from "./products.routing.module";
import { List1Component } from "../list1/list1.component";
import { AddInListComponent } from "../add-in-list/add-in-list.component";
import { SelectCategoryComponent } from "../select-category/select-category.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule, ProductsRoutingModule, ReactiveFormsModule],
  declarations: [
    ProductsComponent,
    List1DetailsComponent,

    //AppComponent,
    List1Component,
    AddInListComponent,
    SelectCategoryComponent,
    //ProductsComponent,
    //HomeComponent,
    //AdminComponent,
    //List1DetailsComponent,
  ],
})
export class ProductsModule {}
