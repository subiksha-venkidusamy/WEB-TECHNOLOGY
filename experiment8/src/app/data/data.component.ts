// src/app/data/data.component.ts
import { Component, OnInit } from '@angular/core';
import { MyService } from '../myservice.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  data: any[];

  constructor(private myService: MyService) {}

  ngOnInit(): void {
    this.myService.getData().subscribe((response) => {
      this.data = response;
    });
  }
}
