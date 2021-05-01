import { Component, OnInit } from '@angular/core';
import { formatDate } from "@angular/common";
import { Item } from "../../model/item.model";
import { ItemService } from '../../services/Item.service';
import { FormControl } from "@angular/forms";
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AddItemComponent implements OnInit {

  itemList : any = [];
  catList : any =[];
  itemObj = new Item();
  catObj = new Category();
  initDate :Date = new Date();


  constructor(public itemService : ItemService,
              public catService : CategoryService) { }

  ngOnInit(): void {
    this.catService.getCatList()
      .subscribe(res=>{
        console.log(res);
        this.catList = res;
        //init the category dropdown with the 1st value
        this.itemObj.itemFGroup.controls.fgCategory.setValue(this.catList.category[0].catId);
        this.itemObj.itemFGroup.controls.fgVendor.setValue(1);
        this.itemObj.itemFGroup.controls.fgCreatedDate.setValue(this.initDate);
        
      },
      res => this.Error);
    
    
  }

  onSubmit(){
    var tmpCDate = formatDate(this.itemObj.itemFGroup.get('fgCreatedOn').value.toLocaleDateString(),
                   'yyyy-MM-dd','en-SG');


    var itemPost :any = {
      itemName : this.itemObj.itemFGroup.get('fgItemName').value,
      itemSN : this.itemObj.itemFGroup.get('fgSerialNum').value,
      catId : this.itemObj.itemFGroup.get('fgCategory').value,
      vendorId : this.itemObj.itemFGroup.get('fgVendor').value,
      createdBy : this.itemObj.itemFGroup.get('fgCreatedBy').value,
      createdDate : tmpCDate,
    }
    
    console.log(itemPost);

    this.itemService.postAddItem(itemPost)
      .subscribe(res=>{
        console.log(itemPost);
        this.itemObj = new Item();
        this.ngOnInit();
      },
      res => this.Error);

    
  }

  Error(res){
    alert("Error" + res );
  }

}
