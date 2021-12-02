import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-random-jokes',
  templateUrl: './random-jokes.component.html',
  styleUrls: ['./random-jokes.component.scss']
})
export class RandomJokesComponent implements OnInit {

  joke: string = ""
  setup: string = ""
  delivery: string = ""

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.httpClient.get<any>("https://v2.jokeapi.dev/joke/Any").subscribe(response => {
      console.log(response);
      this.joke = response.joke;
      this.setup = response.setup;
      this.delivery = response.delivery;


    });
  }
}
