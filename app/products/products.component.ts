import { Component } from "@angular/core";
import { elementList } from "../lst";
import { DataService } from "../services/data.service";

@Component({
  moduleId: module.id,
  selector: "products",
  templateUrl: "products.component.html",
  // styleUrls: ["app.component.css"],
})
export class ProductsComponent {
  public list: elementList[];

  // private dataService: DataService внедрение зависимости через конструктор
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.list = this.dataService.getData();
  }

  selectedValue: string = "0";

  deleteHandler(value) {
    this.list = this.list.filter((item) => item.id !== value);
  }

  addHandler(value) {
    this.list.push({
      id: value.id,
      name: value.name,
      price: value.price,
      category: value.category,
    });
  }

  changeSelectHandler(value) {
    this.selectedValue = value;
  }
}
