import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalCommon } from '../global/common.model';
import { Item } from "../model/item.model";
import { ItemService } from '../services/Item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemList : any = [];
  constructor(public itemService : ItemService,
              public globalObj : GlobalCommon,
              private http:HttpClient) { }

  ngOnInit(): void {
    this.getItemList();
  }

  onSubmit(){
    alert('testing');
  }

  getItemList(){
    this.itemService.getItemList()
      .subscribe(res=>{
        console.log(res);
        this.itemList = res;
      },
      res => this.Error);
  }

  Error(res){
      alert(res);
  }
}
