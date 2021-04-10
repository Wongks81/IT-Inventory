import { Component, OnInit } from '@angular/core';
import { Item } from "../model/item.model";
import { ItemService } from '../services/Item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemobj:Item = new Item();


  constructor(public itemService : ItemService) { }

  ngOnInit(): void {
    this.itemService.getItem();
  }

  onSubmit(){
    alert('testing');
  }

  getItems(){

  }

}
