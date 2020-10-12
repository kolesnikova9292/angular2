import { Component, Output, EventEmitter, Input } from "@angular/core";
import { elementList, categoryList } from "../lst";
import { categoryElements } from "../data";

@Component({
  moduleId: module.id,
  selector: "home",
  templateUrl: "home.component.html",
  // styleUrls: ["app/list1/list1.component.css"],
  // inputs: ["rows", "selectedValue"],
})
export class HomeComponent {
  /*@Input() list: elementList[];
  categoryList: categoryList[] = categoryElements;
  //selectedValue: string = "0";

  @Output()
  delete: EventEmitter<number> = new EventEmitter();

  deleteElement(value) {
    this.delete.emit(value);
  }*/
}
