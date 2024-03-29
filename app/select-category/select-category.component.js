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
var SelectCategoryComponent = /** @class */ (function () {
    function SelectCategoryComponent() {
        this.categoryList = data_1.categoryElements;
        this.changeSelect = new core_1.EventEmitter();
    }
    SelectCategoryComponent.prototype.onChange = function (e) {
        this.changeSelect.emit(e.value.charAt(0));
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], SelectCategoryComponent.prototype, "changeSelect", void 0);
    SelectCategoryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "select-category",
            templateUrl: "select-category.component.html",
            // styleUrls: ["app/list1/list1.component.css"],
            inputs: ["selectedValue"],
        })
    ], SelectCategoryComponent);
    return SelectCategoryComponent;
}());
exports.SelectCategoryComponent = SelectCategoryComponent;
//# sourceMappingURL=select-category.component.js.map