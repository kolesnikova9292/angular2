"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var products_component_1 = require("./products.component");
var list1_details_component_1 = require("../list1-details/list1-details.component");
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
var ProductsRoutingModule = /** @class */ (function () {
    function ProductsRoutingModule() {
    }
    ProductsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    {
                        path: "",
                        redirectTo: "/products",
                        pathMatch: "full",
                    },
                    {
                        // Для того, чтобы компонент отображался в router-outlet PhraseHomeComponent, a не в AppComponent
                        // необходимо выполнить настройку дочерних маршрутов с помощью инициализации свойства children
                        path: "products",
                        component: products_component_1.ProductsComponent,
                        children: [
                            {
                                path: ":id/:name/:price/:category",
                                component: list1_details_component_1.List1DetailsComponent,
                            },
                            {
                                path: "",
                            },
                        ],
                    },
                ]),
            ],
            exports: [router_1.RouterModule],
        })
    ], ProductsRoutingModule);
    return ProductsRoutingModule;
}());
exports.ProductsRoutingModule = ProductsRoutingModule;
//# sourceMappingURL=products.routing.module.js.map