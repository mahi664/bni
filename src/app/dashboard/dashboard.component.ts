import { Component, OnInit } from '@angular/core';

export class weekDet{
  constructor(public weekStartDate: string,public weekEndDate: string, public month : string, public secMonth: string, public weekSale: number){}
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  message="Thank You for visiting!! Dashboard will be in place very soon!!!";
  weeks = [
    new weekDet('03','09','FEB','',70),
    new weekDet('10','16','FEB','',40),
    new weekDet('17','23','FEB','',50),
    new weekDet('24','01','FEB','MAR',60),
    new weekDet('02','08','MAR','',70),
    new weekDet('09','15','MAR','',40),
    new weekDet('16','22','MAR','',80),
    new weekDet('23','29','MAR','',20),
    new weekDet('30','05','MAR','APR',40),
    new weekDet('05','11','APR','',100),
  ]

  titleWkly = 'Weekly Sale(Feb 03-09)';
   typeWkly = 'ColumnChart';
   dataWkly = [
      ['03', 90],
      ['04', 40],
      ['05', 50],
      ['06', 10],
      ['07', 20],
      ['08', 85],
      ['09', 97] 
   ];
   columnNamesWkly = ['Day Of week', 'Daily Sale'];
   optionsWkly = {
     colors: ["#026877"] 
   };
   widthWkly = 350;
   heightWkly = 400;

  titleMnthly = 'Monthly Sale(Feb 2020)';
   typeMnthly = 'AreaChart';
   dataMnthly = [
      ['03-09', 80],
      ['10-16', 69],
      ['17-23', 23],
      ['24-01', 89],
   ];
   columnNamesMnthly = ['Week', 'Weekly Sale'];
   optionsMnthly = {
     colors: ["#C25D00"] 
   };
   widthMnthly = 350;
   heightMnthly = 400;
   

   titleYrly = 'Yearly Sale(2020)';
   typeYrly = 'LineChart';
   dataYrly = [
      ['Jan', 80],
      ['Feb', 69],
      ['Mar', 23],
      ['Apr', 89],
      ['May', 65],
      ['Jun', 54],
      ['Jul', 87],
      ['Aug', 76],
      ['Sep', 67],
      ['Oct', 69],
      ['Nov', 56],
      ['Dec', 87],
   ];
   columnNamesYrly = ['Month', 'Monthly Sale'];
   optionsYrly = {
     colors: ["#C28500"] 
   };
   widthYrly = 330;
   heightYrly = 400;

  constructor() { }

  ngOnInit() {
  }

}