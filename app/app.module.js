"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router"); // модуль для маршрутизации
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var data_service_1 = require("./services/data.service");
var home_component_1 = require("./home/home.component");
var admin_component_1 = require("./admin/admin.component");
var app_routes_1 = require("./app.routes");
var products_module_1 = require("./products/products.module");
var forms_2 = require("@angular/forms");
var data = {
    getData: function () {
        var list = [];
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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(app_routes_1.routes),
                products_module_1.ProductsModule,
                forms_2.ReactiveFormsModule
            ],
            //declarations: [AppComponent, List1Component, AddInListComponent, SelectCategoryComponent, ProductsComponent, HomeComponent, AdminComponent, List1DetailsComponent],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, admin_component_1.AdminComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [data_service_1.DataService],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map