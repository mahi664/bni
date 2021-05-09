import { Component, OnInit } from '@angular/core';
import { VaccineAppointmentService } from '../vaccine-appointment.service';
import { PushNotificationsService } from 'ng-push';

@Component({
  selector: 'app-vaccine-appointment',
  templateUrl: './vaccine-appointment.component.html',
  styleUrls: ['./vaccine-appointment.component.css']
})
export class VaccineAppointmentComponent implements OnInit {
  vaccineSlots: any = [];

  constructor(
    private vaccineService: VaccineAppointmentService,
    private _pushNotifications: PushNotificationsService
  ) {
    this._pushNotifications.requestPermission();
  }

  ngOnInit() {
    const webpush = require('web-push');
    setInterval(() => {
      console.log(
        new Date().getDate() +
          '/' +
          new Date().getMonth() +
          '/' +
          new Date().getFullYear() +
          ' ' +
          new Date().getHours() +
          ':' +
          new Date().getMinutes() +
          ':' +
          new Date().getSeconds()
      );
      this.vaccineService.getAvailSlots().subscribe(response => {
        this.vaccineSlots = response;
        console.log(this.vaccineSlots);
        this.processData();
      });
    }, 20000);
    // this.vaccineService.getAvailSlots().subscribe(response => {
    //   this.vaccineSlots = response;
    //   console.log(this.vaccineSlots);
    //   this.processData();
    // });
  }

  processData() {
    // let options = {
    //   //set options
    //   body: "The truth is, I'am Iron Man!",
    //   icon: 'assets/images/ironman.png' //adding an icon
    // };
    // this._pushNotifications.create('Iron Man', options).subscribe(
    //   //creates a notification
    //   res => console.log(res),
    //   err => console.log(err)
    // );
    for (let i = 0; i < this.vaccineSlots.centers.length; i++) {
      let eachSlot = this.vaccineSlots.centers[i];
      for (let j = 0; j < eachSlot.sessions.length; j++) {
        let eachSession = eachSlot.sessions[j];
        if (eachSession.min_age_limit > 18) {
          continue;
        }
        if (eachSession.available_capacity == 0) {
          // alert(
          //   'Vaccine Availiable At: ' +
          //     eachSlot.address +
          //     ' ' +
          //     eachSlot.block_name +
          //     ' ' +
          //     eachSlot.name +
          //     ' ' +
          //     eachSession.available_capacity +
          //     ' Doses Availiable ' +
          //     eachSession.date
          // );
          continue;
        }
        alert(
          'Vaccine Availiable At: ' +
            eachSlot.address +
            ' ' +
            eachSlot.block_name +
            ' ' +
            eachSlot.name +
            ' ' +
            eachSession.available_capacity +
            ' Doses Availiable ' +
            eachSession.date
        );
      }
    }
  }
}
