import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  constructor(private commonService: CommonServiceService) { }

  ngOnInit() {
  }

  sideNavExpanded = this.commonService.sideNavExpanded;

}