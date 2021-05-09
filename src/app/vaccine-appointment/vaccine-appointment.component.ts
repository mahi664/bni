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
    this.vaccineService.getAvailSlots().subscribe(response => {
      this.vaccineSlots = response;
    });
  }

  getData() {}
}
