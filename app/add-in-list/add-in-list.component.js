"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var forms_1 = require("@angular/forms");
/*export function selectedValidator(control: AbstractControl): string {
console.log(1111)
    let value = control.value;

    if (value != "0") {
        return null;
    } else {
      console.log(2222)
        return "not selected"
    }
}*/
function selectedValidator(control) {
    var value = control.value;
    if (value != "0") {
        // return { 'selected': true };
        return null;
    }
    return { 'selected': false };
}
var AddInListComponent = /** @class */ (function () {
    function AddInListComponent(fb) {
        this.fb = fb;
        this.add = new core_1.EventEmitter();
        this.categories = data_1.categoryElements;
    }
    AddInListComponent.prototype.ngOnInit = function () {
        // FormBuilder - класс, предоставляющий удобный интерфейс для создания экземпляров FormControl и FormGroup  
        this.addElementForm = this.fb.group({
            name: ["", [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            price: ["", [forms_1.Validators.required]],
            category: ["0", selectedValidator]
        });
    };
    AddInListComponent.prototype.onSubmit = function (form) {
        console.log(form);
        console.log(form.valid);
        console.log(form.value);
        var elem = __assign({}, form.value, { id: Date.now() });
        this.add.emit(elem);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AddInListComponent.prototype, "add", void 0);
    AddInListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "add-in-list",
            templateUrl: "add-in-list.component.html",
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], AddInListComponent);
    return AddInListComponent;
}());
exports.AddInListComponent = AddInListComponent;
/*export class AddInListComponent {
  @Output()
  add: EventEmitter<elementList> = new EventEmitter();

  model: ElementModel = new ElementModel(1, "", "", "0");

  categories = categoryElements;
  selectedValue: string = "0";
  name: string;
  price: number;

  addInList() {
    const elem: elementList = {
      ...this.model,
      category: parseInt(this.model.category),
      price: +this.model.price,
      id: Date.now(),
    };
    this.add.emit(elem);
  }
}*/
//# sourceMappingURL=add-in-list.component.js.map