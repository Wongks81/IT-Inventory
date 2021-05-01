import { Component, OnInit } from '@angular/core';
import { formatDate } from "@angular/common";
import { Item } from 'src/app/model/item.model';
import { ItemService } from 'src/app/services/Item.service';
import { Router } from "@angular/router";
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {
  itemObj = new Item();
  initDate :Date = new Date();
  catList : any =[];

  constructor(public itemService : ItemService,
              public catService :CategoryService, 
              private router:Router) { 
    //State of item is passed from item.component.ts
    if(this.router.getCurrentNavigation().extras.state.item != null){
      var stateItem : any = this.router.getCurrentNavigation().extras.state.item;
      console.log(stateItem);
      this.itemObj = new Item();
      this.itemObj.itemFGroup.setValue({
        fgItemId : stateItem.itemId,
        fgItemName : stateItem.itemName,
        fgSerialNum : stateItem.itemSN,
        fgCategory : stateItem.catId,
        fgVendor : stateItem.vendorId,
        fgCreatedBy : stateItem.createdBy,
        fgCreatedDate : new Date(stateItem.createdDate),
        fgUpdatedBy : stateItem.updatedBy,  
        fgUpdatedDate : stateItem.updatedDate ? stateItem.updatedDate : this.initDate
      })
    }
  }

  ngOnInit(): void {
    this.catService.getCatList()
      .subscribe(res=>{
        console.log(res);
        this.catList = res;
      },
      res => this.Error);
  }

  onSubmit(){
    var tmpCDate = formatDate(this.itemObj.itemFGroup.get('fgCreatedDate').value.toLocaleDateString(),
                   'yyyy-MM-dd','en-SG');

    var tmpUDate = formatDate(this.itemObj.itemFGroup.get('fgUpdatedDate').value.toLocaleDateString(),
                    'yyyy-MM-dd','en-SG');
    
    var itemPut :any = {
      itemId : this.itemObj.itemFGroup.get('fgItemId').value,
      itemName : this.itemObj.itemFGroup.get('fgItemName').value,
      itemSN : this.itemObj.itemFGroup.get('fgSerialNum').value,
      catId : this.itemObj.itemFGroup.get('fgCategory').value,
      vendorId : this.itemObj.itemFGroup.get('fgVendor').value,
      createdBy : this.itemObj.itemFGroup.get('fgCreatedBy').value,
      createdDate : tmpCDate,
      updatedBy : this.itemObj.itemFGroup.get('fgCreatedBy').value,
      updatedDate : tmpUDate
    }
    console.log(itemPut);
    this.itemService.putEditItem(itemPut)
      .subscribe(res=>{
        alert('Item edited successfully');
        this.router.navigateByUrl('/');
      },
      res => this.Error);
  }
  Error(res){
    alert("Error" + res );
  }

}
