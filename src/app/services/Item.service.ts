import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Item } from "../model/item.model";
import { GlobalCommon } from "../global/common.model";

@Injectable({providedIn: 'root'})
export class ItemService{
    private itemList :Item[] = [];
    
    private serverURL = this.globalObj.nodeServerURL + '/api/items'

    constructor(private http : HttpClient,
                public globalObj: GlobalCommon
        ){}

    getItemList(){
        return this.http.get<{message:string, itemList:Item[]}>(this.serverURL);
        
    }
}