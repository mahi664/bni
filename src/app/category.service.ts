import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CategoryService {
  message = "";
  constructor(private http: HttpClient) {}

  addNewCategory(category) {
    return this.http.get(
      "https://billingandinventorymgmt.herokuapp.com/categories"
    );
    // console.log(category);
    // return this.http.post(
    //   "https://billingandinventorymgmt.herokuapp.com/add-new-category",
    //   {
    //     categoryName: "Test category name 0",
    //     categoryDispName: "Test category display name 0",
    //     categoryDescription: "Test category description 0"
    //   }
    // );
  }
}
