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
  constructor() { }

  ngOnInit() {
  }

}