import {Component, OnInit} from '@angular/core';
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
  tempItem1: string = "";
  tempItem2: string = "";

  tempDone: boolean = false;


  constructor(private itemService: ItemService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllItems()
  }


  public createItem = (data: any) => {
    this.itemService.createItem(data).subscribe(response => {
        if (response == null) {
          alert("Error!");
        } else {
          alert("Added Item!");
          this.myItems = [];
          this.getAllItems();
        }
      });
  }


  public deleteItem = (id: number) => {
    this.itemService.deleteItem(id).subscribe(() =>{
      alert("Deleted Item!");
      this.myItems = []
      this.getAllItems()
    });
  }

  private getAllItems() {
    this.itemService.getAllItems().subscribe(response => {
      let i = 1;
      while (i in response) {
        let newitem = <item>({
          id: response[i].id,
          item: response[i].item,
          done: response[i].done,
        })
        if (newitem.item !== "THIS ITEM IS DELETED")
        {
          this.myItems.push(newitem)
        }
        i++
      }
    });
  }

  markDone(data: any) {
    this.itemService.markDone(data).subscribe(response =>
    {
      alert("Item Marked Done!");
      this.myItems = []
      this.getAllItems()
    });
  }

  updateItem(data: any) {
    this.itemService.updateItem(data).subscribe(response =>
    {
      alert("Item Updated!");
      this.myItems = []
      this.getAllItems()
    });
  }


  searchItem(data: any) {
    this.itemService.getAllItems().subscribe(response => {
      this.myItems = []
      let i = 1;
      while (i in response) {
        let newitem = <item>({
          id: response[i].id,
          item: response[i].item,
          done: response[i].done,
        })
        if (newitem.item !== "THIS ITEM IS DELETED" && newitem.item.includes(data.item))
        {
          this.myItems.push(newitem)
        }
        i++
      }
    });

  }
}
