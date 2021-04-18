import { Component, OnInit } from '@angular/core';
import { Item } from "../../model/item.model";
import { ItemService } from '../../services/Item.service';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AddItemComponent implements OnInit {

  itemList : any = [];
  itemObj = new Item();


  constructor(public itemService : ItemService) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    var itemPost :any = {
      itemName : this.itemObj.itemFGroup.get('cItemCheck').value
    }
    console.log(itemPost);

    this.itemService.postAddItem(itemPost)
      .subscribe(res=>{
        console.log(itemPost);
        console.log(res);
      },
      res => this.Error);

    
  }

  Error(res){
    alert("Error" + res );
  }

}
