import { Component, EventEmitter, Output } from "@angular/core";
import { categoryElements } from "../data";
import { elementList, ElementModel } from "../lst";
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";

import { AbstractControl, ValidatorFn } from "@angular/forms";

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

function selectedValidator(control: AbstractControl): { [key: string]: boolean } | null {

  let value = control.value;

  if (value != "0") {
     // return { 'selected': true };
     return null
  }
  return  { 'selected': false };
}


@Component({
  moduleId: module.id,
  selector: "add-in-list",
  templateUrl: "add-in-list.component.html",
  // styleUrls: ["app/list1/list1.component.css"],
  // inputs: ["rows"],
})
export class AddInListComponent {
  @Output()
  add: EventEmitter<elementList> = new EventEmitter();

  categories = categoryElements;


  constructor(private fb: FormBuilder) { }

  addElementForm: FormGroup;

  ngOnInit() {
    // FormBuilder - класс, предоставляющий удобный интерфейс для создания экземпляров FormControl и FormGroup  
    this.addElementForm = this.fb.group({
        name: ["", [Validators.required,  Validators.minLength(4)]],
        price: ["", [Validators.required]],
        category: ["0",  selectedValidator]
    });
}

onSubmit(form) {
  console.log(form);
    console.log(form.valid);
    console.log(form.value);
    const elem: elementList = {
      ...form.value,
      id: Date.now(),
    };
    this.add.emit(elem);
}


  /*model: ElementModel = new ElementModel(1, "", "", "0");

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
  }*/
}
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
