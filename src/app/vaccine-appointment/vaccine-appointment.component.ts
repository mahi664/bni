import { Component, OnInit } from '@angular/core';
import { VaccineAppointmentService } from '../vaccine-appointment.service';

@Component({
  selector: 'app-vaccine-appointment',
  templateUrl: './vaccine-appointment.component.html',
  styleUrls: ['./vaccine-appointment.component.css']
})
export class VaccineAppointmentComponent implements OnInit {
  vaccineSlots: any = [];

  constructor(private vaccineService: VaccineAppointmentService) {}

  ngOnInit() {
    setInterval(() => {
      console.log(new Date().getTime());
      this.vaccineService.getAvailSlots().subscribe(response => {
        this.vaccineSlots = response;
        console.log(this.vaccineSlots);
        this.processData();
      });
    }, 60000);
    // this.vaccineService.getAvailSlots().subscribe(response => {
    //   this.vaccineSlots = response;
    //   console.log(this.vaccineSlots);
    //   this.processData();
    // });
  }

  processData() {
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
