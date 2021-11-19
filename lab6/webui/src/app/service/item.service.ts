import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  public getOneItem = (id:number): Observable<{id:number, item:string, done:boolean}> => {
    return this.http.get<{id:number, item:string, done:boolean}>(`api/list/${id}`);
  }

  public getAllItems = (): Observable<{id:number, item:string, done:boolean}[]> => {
    return this.http.get<{id:number, item:string, done:boolean}[]>(`api/list/`);
  }

  public createItem = (data:any): Observable<{id:number, item:string, done:boolean}> => {
    return this.http.post<{id:number, item:string, done:boolean}>(`api/list/createItem`,data);
  }

  public updateItem = (data:any): Observable<{id:number, item:string, done:boolean}> => {
    return this.http.put<{id:number, item:string, done:boolean}>(`api/list/updateItem`,data);
  }

  public deleteItem = (id:number): Observable<{}> => {
    return this.http.delete(`api/list/deleteItem/${id}`);
  }

  public markDone = (data:any): Observable<{id:number, item:string, done:boolean}> => {
    return this.http.put<{ id: number; item: string; done: boolean; }>(`api/list/markDone`,data);
  }















}
