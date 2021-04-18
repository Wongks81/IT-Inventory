import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { ItemService } from 'src/app/services/Item.service';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {
  itemObj = new Item();


  constructor(public itemService : ItemService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

}
