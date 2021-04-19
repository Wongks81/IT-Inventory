import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { ItemService } from 'src/app/services/Item.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {
  itemObj = new Item();

  constructor(public itemService : ItemService, 
              private router:Router) { 
    //State of item is passed from item.component.ts
    if(this.router.getCurrentNavigation().extras.state.item != null){
      var stateItem : any = this.router.getCurrentNavigation().extras.state.item;
      this.itemObj = new Item();
      this.itemObj.itemId = stateItem.itemId;
      this.itemObj.itemName = stateItem.itemName;
      this.itemObj.itemFGroup.setValue({

        fgItemName : this.itemObj.itemName
      })
    }
  }

  ngOnInit(): void {
  }

  onSubmit(){
    var itemPut :any = {
      itemId : this.itemObj.itemId,
      itemName : this.itemObj.itemFGroup.get('fgItemName').value
    }

    this.itemService.putEditItem(itemPut)
      .subscribe(res=>{
        console.log(itemPut);
        console.log(res);
        alert('Item edited successfully');
        this.router.navigateByUrl('/');
      },
      res => this.Error);
  }
  Error(res){
    alert("Error" + res );
  }

}
