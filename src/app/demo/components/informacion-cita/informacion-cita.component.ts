import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informacion-cita',
  templateUrl: './informacion-cita.component.html',
  styleUrls: ['./informacion-cita.component.scss']
})
export class InformacionCitaComponent implements OnInit {
  doctor: string;
  patient: string;
  date: Date;
  time: string;
  status: string;
  description: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.doctor = params['doctor'];
      this.patient = params['patient'];
      this.date = new Date(params['date']);
      this.time = params['time'];
      this.status = params['status'];
      this.description = params['description'];
    });
  }
}
