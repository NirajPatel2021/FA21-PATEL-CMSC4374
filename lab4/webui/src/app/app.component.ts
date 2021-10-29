import {Component, OnInit} from '@angular/core';
import {StrawHatService} from "./services/straw-hat.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'StrawHat';

  public strawHat: { id: number; name: string; } | null = null;
  strawHatId: number = 0;
  public errorMessage:string = '';

  constructor(private strawHatService: StrawHatService) {
  }

  ngOnInit(): void {
    this.getStrawHat();
  }

  public incrementStrawHat = () => {
    this.strawHatId++;
    this.getStrawHat();
  }

  private getStrawHat = () => {
    this.strawHatService.getStrawHat(this.strawHatId).subscribe((strawHat) => {
      this.strawHat = strawHat;
      this.errorMessage = '';
    }, err => this.errorMessage = err.error.message);
  }




}
