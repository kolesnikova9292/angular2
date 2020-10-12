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
var data_1 = require("../data");
var router_1 = require("@angular/router");
var List1Component = /** @class */ (function () {
    function List1Component(router) {
        this.router = router;
        this.categoryList = data_1.categoryElements;
        this.delete = new core_1.EventEmitter();
    }
    List1Component.prototype.deleteElement = function (value) {
        this.delete.emit(value);
    };
    List1Component.prototype.showElement = function (value) {
        console.log(value);
        this.router.navigate([
            "products",
            value.id,
            value.name,
            value.price,
            value.category,
        ]);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], List1Component.prototype, "list", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], List1Component.prototype, "delete", void 0);
    List1Component = __decorate([
        core_1.Component({
            selector: "list-1",
            templateUrl: "app/list1/list1.component.html",
            styleUrls: ["app/list1/list1.component.css"],
            inputs: ["rows", "selectedValue"],
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], List1Component);
    return List1Component;
}());
exports.List1Component = List1Component;
//# sourceMappingURL=list1.component.js.map