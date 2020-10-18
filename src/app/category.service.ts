import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CategoryService {
  message = "";
  constructor(private http: HttpClient) {}

  addNewCategory(category) {
    var retData;
    // this.http
    //   .get("https://billingandinventorymgmt.herokuapp.com/UserLogin/wel-come", {
    //     responseType: "text"
    //   })
    //   .subscribe(res => {
    //     this.message = res;
    //     console.log(this.message);
    //   });
    console.log(category);
    this.http.post(
      "https://billingandinventorymgmt.herokuapp.com/add-new-category",
      {
        categoryName: "Test category name 0",
        categoryDispName: "Test category display name 0",
        categoryDescription: "Test category description 0"
      }
    );
  }
}
