"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var products_component_1 = require("./products.component");
var list1_details_component_1 = require("../list1-details/list1-details.component");
var products_routing_module_1 = require("./products.routing.module");
var list1_component_1 = require("../list1/list1.component");
var add_in_list_component_1 = require("../add-in-list/add-in-list.component");
var select_category_component_1 = require("../select-category/select-category.component");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, products_routing_module_1.ProductsRoutingModule, forms_2.ReactiveFormsModule],
            declarations: [
                products_component_1.ProductsComponent,
                list1_details_component_1.List1DetailsComponent,
                //AppComponent,
                list1_component_1.List1Component,
                add_in_list_component_1.AddInListComponent,
                select_category_component_1.SelectCategoryComponent,
            ],
        })
    ], ProductsModule);
    return ProductsModule;
}());
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=products.module.js.map