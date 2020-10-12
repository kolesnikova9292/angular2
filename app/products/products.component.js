"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("../services/data.service");
var ProductsComponent = /** @class */ (function () {
    // private dataService: DataService внедрение зависимости через конструктор
    function ProductsComponent(dataService) {
        this.dataService = dataService;
        this.selectedValue = "0";
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.list = this.dataService.getData();
    };
    ProductsComponent.prototype.deleteHandler = function (value) {
        this.list = this.list.filter(function (item) { return item.id !== value; });
    };
    ProductsComponent.prototype.addHandler = function (value) {
        this.list.push({
            id: value.id,
            name: value.name,
            price: value.price,
            category: value.category,
        });
    };
    ProductsComponent.prototype.changeSelectHandler = function (value) {
        this.selectedValue = value;
    };
    ProductsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "products",
            templateUrl: "products.component.html",
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map