import { Component, EventEmitter, Output, SimpleChanges } from "@angular/core";
import { categoryElements } from "../data";
import { elementList, categoryList } from "../lst";

@Component({
  moduleId: module.id,
  selector: "select-category",
  templateUrl: "select-category.component.html",
  // styleUrls: ["app/list1/list1.component.css"],
  inputs: ["selectedValue"],
})
export class SelectCategoryComponent {
  categoryList: categoryList[] = categoryElements;
  selectedValue: string;

  @Output()
  changeSelect: EventEmitter<number> = new EventEmitter();

  onChange(e) {
    this.changeSelect.emit(e.value.charAt(0));
  }
}
