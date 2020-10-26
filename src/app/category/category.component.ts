import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../category.service";

export class CategoryDetails {
  constructor(
    public categoryId: string,
    public categoryName: string,
    public categoryDesc: string
  ) {}
}

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

  categories = [
    new CategoryDetails("100001", "Category name 1", "Category Description 1"),
    new CategoryDetails("100002", "Category name 2", "Category Description 2"),
    new CategoryDetails("100003", "Category name 3", "Category Description 3")
  ];
  noOfPages = 0;
  i;
  pageOfCategories = [];
  pages = [];
  currPage = 1;
  ngOnInit() {
    this.noOfPages = Math.ceil(this.categories.length / 5);
    this.noOfPages = this.noOfPages <= 0 ? 1 : this.noOfPages;
    for (this.i = 1; this.i <= this.noOfPages; this.i++) {
      this.pages.push(this.i);
    }
    this.pageOfCategories = this.categories.slice(0, 5);
  }

  addNewCategory() {
    var category = new Category(
      "Test category name 0",
      "Test category display name 0",
      "Test category description 0"
    );

    this.categoryService.addNewCategory(category).subscribe(data => {
      console.log(data);
    });
  }

  changePageContent(pageNo) {
    if (pageNo <= 0) pageNo = 1;
    else if (pageNo >= this.noOfPages) pageNo = this.noOfPages;
    this.pageOfCategories = this.categories.slice(
      (pageNo - 1) * 5,
      (pageNo - 1) * 5 + 5
    );
    this.currPage = pageNo;
  }
}
