import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router"; // модуль для маршрутизации

import { AppComponent } from "./app.component";
import { List1Component } from "./list1/list1.component";
import { AddInListComponent } from "./add-in-list/add-in-list.component";
import { FormsModule } from "@angular/forms";
import { SelectCategoryComponent } from "./select-category/select-category.component";
import { DataService } from "./services/data.service";
import { elementList } from "./lst";
import { ProductsComponent } from "./products/products.component";
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin/admin.component";
import { List1DetailsComponent } from "./list1-details/list1-details.component";
import { routes } from "./app.routes";
import { ProductsModule } from "./products/products.module";
import { ReactiveFormsModule } from "@angular/forms";

let data = {
  getData: function () {
    let list: elementList[] = [];
    list = [
      { id: 1, name: "product 111111", price: 100, category: 1 },
      { id: 2, name: "product 2", price: 200, category: 1 },
      { id: 3, name: "product 3", price: 300, category: 2 },
      { id: 4, name: "product 4", price: 400, category: 2 },
      { id: 5, name: "product 5", price: 500, category: 1 },
      { id: 6, name: "product 6", price: 600, category: 3 },
      { id: 7, name: "product 7", price: 700, category: 3 },
      { id: 8, name: "product 8", price: 800, category: 3 },
      { id: 9, name: "product 9", price: 900, category: 1 },
      { id: 10, name: "product 10", price: 1000, category: 1 },
    ];
    return list;
  },
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ProductsModule,
    ReactiveFormsModule
  ],
  //declarations: [AppComponent, List1Component, AddInListComponent, SelectCategoryComponent, ProductsComponent, HomeComponent, AdminComponent, List1DetailsComponent],
  declarations: [AppComponent, HomeComponent, AdminComponent],
  bootstrap: [AppComponent],
  providers: [DataService],
})
export class AppModule {}
