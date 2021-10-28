import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-page',
  templateUrl: './date-page.component.html',
  styleUrls: ['./date-page.component.css']
})
export class DatePageComponent implements OnInit {

  date: string  = new Date().toLocaleDateString();
  time: string  = new Date().toLocaleTimeString();

  constructor() { }

  ngOnInit(): void {
  }

}
