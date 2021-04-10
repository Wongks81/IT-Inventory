import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Item } from "../model/item.model";
import { GlobalCommon } from "../global/common.model";

@Injectable({providedIn: 'root'})
export class ItemService{
    private itemObj :Item[] = [];
    
    private serverURL = this.globalObj.nodeServerURL + '/api/items'

    constructor(private http : HttpClient,
                public globalObj: GlobalCommon
        ){}

    getItem(){
        this.http.get<{message:string, itemObj:Item[]}>(this.serverURL)
            .subscribe((itemData)=>{
                console.log(itemData);
                this.itemObj = itemData.itemObj;
            });
    }
}