import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-chuck-norris-jokes',
  templateUrl: './chuck-norris-jokes.component.html',
  styleUrls: ['./chuck-norris-jokes.component.scss']
})
export class ChuckNorrisJokesComponent implements OnInit {

  joke: string = ""

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.httpClient.get<any>("https://api.icndb.com/jokes/random").subscribe(response => {
      this.joke = response.value.joke;
    });
  }
}
