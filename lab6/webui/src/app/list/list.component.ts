import { Component, OnInit } from '@angular/core';
import {ItemService} from "../service/item.service";
import {Router} from "@angular/router";

class item {
  constructor(
    public id: number,
    public item: string,
    public done: boolean
  ) {
  }
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  title = "List"
  myItems: item[] = [];

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
    this.getAllItems()
  }

  private getAllItems() {
   this.itemService.getAllItems().subscribe(response =>{
     let i = 1;
     while (i in response){
       let newitem = <item>({
         id: response[i].id,
         item: response[i].item,
         done: response[i].done,
       })
       this.myItems.push(newitem)
       i++
     }

       });
  }
}
