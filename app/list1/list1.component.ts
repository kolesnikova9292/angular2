import { Component, Output, EventEmitter, Input } from "@angular/core";
import { elementList, categoryList } from "../lst";
import { categoryElements } from "../data";
import { Router } from "@angular/router";

@Component({
  selector: "list-1",
  templateUrl: "app/list1/list1.component.html",
  styleUrls: ["app/list1/list1.component.css"],
  inputs: ["rows", "selectedValue"],
})
export class List1Component {
  constructor(private router: Router) {}

  @Input() list: elementList[];
  categoryList: categoryList[] = categoryElements;

  @Output()
  delete: EventEmitter<number> = new EventEmitter();

  deleteElement(value) {
    this.delete.emit(value);
  }

  showElement(value) {
    console.log(value);
    this.router.navigate([
      "products",
      value.id,
      value.name,
      value.price,
      value.category,
    ]);
  }
}
