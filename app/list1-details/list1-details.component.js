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
var router_1 = require("@angular/router");
var data_service_1 = require("../services/data.service");
var List1DetailsComponent = /** @class */ (function () {
    function List1DetailsComponent(router, dataService, activatedRoute) {
        this.router = router;
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
    }
    List1DetailsComponent.prototype.goToProductsList = function () {
        this.router.navigate(["products"]); // перенаправляем пользователя на PhraseListComponent
    };
    List1DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            var id = +params["id"];
            var name = params["name"];
            var price = params["price"];
            var category = params["category"];
            _this.currentProduct = {
                id: id,
                name: name,
                price: price,
                category: category,
            };
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], List1DetailsComponent.prototype, "list", void 0);
    List1DetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "list1-details",
            templateUrl: "list1-details.component.html",
        }),
        __metadata("design:paramtypes", [router_1.Router,
            data_service_1.DataService,
            router_1.ActivatedRoute])
    ], List1DetailsComponent);
    return List1DetailsComponent;
}());
exports.List1DetailsComponent = List1DetailsComponent;
//# sourceMappingURL=list1-details.component.js.map