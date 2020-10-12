import { Component, Input } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { elementList } from "../lst";
import { DataService } from "../services/data.service";

@Component({
  moduleId: module.id,
  selector: "list1-details",
  templateUrl: "list1-details.component.html",
  // styleUrls: ["list1-details.component.css"],
})
export class List1DetailsComponent {
  @Input() list: elementList[];

  currentProduct: elementList;

  constructor(
    private router: Router,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  goToProductsList() {
    this.router.navigate(["products"]); // перенаправляем пользователя на PhraseListComponent
  }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      let id = +params["id"];
      let name = params["name"];
      let price = params["price"];
      let category = params["category"];

      this.currentProduct = {
        id: id,
        name: name,
        price: price,
        category: category,
      };
    });
  }
}
