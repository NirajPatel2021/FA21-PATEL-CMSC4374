import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class OnePieceCharacters {

  constructor(
    public id: number,
    public Name: string,
    public Role: string,
    public BattleStyle: string) {
  }
}


@Component({
  selector: 'app-one-piece-characters',
  templateUrl: './one-piece-characters.component.html',
  styleUrls: ['./one-piece-characters.component.css']
})
export class OnePieceCharactersComponent implements OnInit {

  onePieceCharacters: OnePieceCharacters[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getOnePieceCharacters();
  }

  getOnePieceCharacters() {
    this.httpClient.get<any>("https://retoolapi.dev/NBsbSI/one_piece_characters").subscribe(response => {
      console.log(response);
      this.onePieceCharacters = response;
    });
  }



}
