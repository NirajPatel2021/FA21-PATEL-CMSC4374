import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StrawHatService {

  constructor(private http: HttpClient) {
  }

  public getStrawHat = (id: number): Observable<{ id: number, name: string }> => {
    return this.http.get<{ id: number, name: string }>
    (`api/example/${id}`);
  }




}
