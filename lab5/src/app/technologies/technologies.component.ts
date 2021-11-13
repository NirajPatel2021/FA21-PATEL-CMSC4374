import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';

class data {
  constructor(
    public string1: string,
    public string2: string,
    public string3: string,
    public string4: string,
    public string5: string,
    public string6: string,
    public string7: string,
    public string8: string,
    public string9: string,
    public string10: string
  ) {
  }
}

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  url = 'assets/technologies.json'
  data: data[] = []

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getAllData()
  }


  getAllData() {
    this.http.get(this.url).toPromise().then(data => {
      // console.log(data[3 as never])
      for (let i in data) {
        let newdata = <data>({
          // @ts-ignore
          string1: data[i as never].string1,
          // @ts-ignore
          string2: data[i as never].string2,
          // @ts-ignore
          string3: data[i as never].string3

        })
        this.data.push(newdata)
      }
    });
  }

}
