import { Component, OnInit } from '@angular/core';
import { Item } from "../../model/item.model";
import { ItemService } from '../../services/Item.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AddItemComponent implements OnInit {

  itemList : any = [];


  constructor(public itemService : ItemService) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
      
  }
}
