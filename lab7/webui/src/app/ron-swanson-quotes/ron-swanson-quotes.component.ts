import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ron-swanson-quotes',
  templateUrl: './ron-swanson-quotes.component.html',
  styleUrls: ['./ron-swanson-quotes.component.scss']
})
export class RonSwansonQuotesComponent implements OnInit {

  quote: string = ""

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.httpClient.get<any>("https://ron-swanson-quotes.herokuapp.com/v2/quotes").subscribe(response => {
      this.quote = response;
    });
  }
}
