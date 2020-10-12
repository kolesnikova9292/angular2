import { Component } from "@angular/core";
import { elementList } from "./lst";
import { DataService } from "./services/data.service";

@Component({
  moduleId: module.id,
  selector: "my-app",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
})
export class AppComponent {
  /*public list: elementList[];

  // private dataService: DataService внедрение зависимости через конструктор
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
      this.list = this.dataService.getData();
      console.log(this.list)
  }*/
  // list: elementList[] = [
  //   { id: 1, name: "product 1", price: 100, category: 1 },
  //   { id: 2, name: "product 2", price: 200, category: 1 },
  //   { id: 3, name: "product 3", price: 300, category: 2 },
  //   { id: 4, name: "product 4", price: 400, category: 2 },
  //   { id: 5, name: "product 5", price: 500, category: 1 },
  //   { id: 6, name: "product 6", price: 600, category: 3 },
  //   { id: 7, name: "product 7", price: 700, category: 3 },
  //   { id: 8, name: "product 8", price: 800, category: 3 },
  //   { id: 9, name: "product 9", price: 900, category: 1 },
  //   { id: 10, name: "product 10", price: 1000, category: 1 },
  // ];
  /*selectedValue: string = "0";

  deleteHandler(value) {
    this.list = this.list.filter(item => item.id !== value)
  }

  addHandler(value) {
    this.list.push({id: value.id, name: value.name, price: value.price, category: value.category});
  }

  changeSelectHandler(value){
    console.log(value)
    this.selectedValue = value;
  }*/
}
