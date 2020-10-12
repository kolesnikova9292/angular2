import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ProductsComponent } from "./products.component";
import { List1DetailsComponent } from "../list1-details/list1-details.component";

/*@NgModule({
    imports: [
        // Определение маршрутов для feature модуля 
        // Метод forRoot должен использоваться только в AppModule
        RouterModule.forChild([
            { path: "products", component: ProductsComponent },
            { path: "products/:id", component: List1DetailsComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})*/
//export class ProductsRoutingModule { }

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        redirectTo: "/products",
        pathMatch: "full",
      },
      {
        // Для того, чтобы компонент отображался в router-outlet PhraseHomeComponent, a не в AppComponent
        // необходимо выполнить настройку дочерних маршрутов с помощью инициализации свойства children
        path: "products",
        component: ProductsComponent, // содержит <router-outlet>
        children: [
          {
            path: ":id/:name/:price/:category",
            component: List1DetailsComponent,
          },
          {
            path: "",
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
