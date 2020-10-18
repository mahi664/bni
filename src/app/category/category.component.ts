import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../category.service";

export class Category {
  constructor(
    public categoryName: string,
    public categoryDispName: string,
    public categoryDescription: string
  ) {}
}

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  message = "";
  constructor(private categoryService: CategoryService) {}
  ngOnInit() {}

  addNewCategory() {
    var category = new Category(
      "Test category name 0",
      "Test category display name 0",
      "Test category description 0"
    );

    this.categoryService.addNewCategory(category);
    // this.message = this.categoryService.message;
  }
}
