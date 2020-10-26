import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formatEnabled=false;
  dataUploadFormat="";
  selectedUploadType="Please Select";
  fileUploadTypes = ['Categories Upload','Products Upload','Invoice Data Upload','Purchase Data Upload','Offers and Discount upload'];

  loadFormat(){
    alert(this.selectedUploadType);
  }
}