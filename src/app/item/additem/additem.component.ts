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
  itemObj = new Item();


  constructor(public itemService : ItemService) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    var itemPost :any = {
      itemId : this.itemObj.itemId,
      itemName : this.itemObj.itemName
    }
    this.itemObj = new Item();

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
