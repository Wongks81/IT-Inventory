import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalCommon } from '../global/common.model';
import { Router } from "@angular/router";
import { ItemService } from '../services/Item.service';
import { Item } from '../model/item.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemList : any = [];
  constructor(public itemService : ItemService,
              public globalObj : GlobalCommon,
              private router:Router,
              private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.getItemList();
  }

  

  getItemList(){
    this.itemService.getItemList()
      .subscribe(res=>{
        console.log(res);
        this.itemList = res;
      },
      res => this.Error);
  }

  editItem(selected : Item){
    this.router.navigate(['/item/edititem'],
    {
      state: {item:selected}
    });
  }

  deleteItem(selected : Item){
    var reply = confirm("Remove " + selected.itemName + " from Database?");
    if(reply == true){

      this.itemService.deleteItem(selected.itemId)
        .subscribe(
          //snackbar open here on top of screen
          res => this.Success(res),
          res => this.Error(res)
        );
    }
  }

  deleteSnackBar(){
    this.snackBar.open('Item removed from Database!!','OK',{
      duration:2000,
      verticalPosition:'top'
    })
  }

  Success(res){
    this.ngOnInit();
  }

  Error(res){
      alert(res);
  }
}
