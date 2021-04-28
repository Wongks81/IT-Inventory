import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Item } from "../model/item.model";
import { GlobalCommon } from "../global/common.model";

@Injectable({providedIn: 'root'})
export class ItemService{
    private itemList :Item[] = [];
    
    private itemURL = this.globalObj.nodeServerURL + '/api/items'

    constructor(private http : HttpClient,
                public globalObj: GlobalCommon
        ){}

    getItemList(){
        //Get list of items for display
        return this.http.get<{message:string, itemList:Item[]}>(this.itemURL);
    }

    postAddItem(itemObj: any){
        //POST add single item to DB
        return this.http.post(this.itemURL, itemObj);
    }

    putEditItem(itemObj: any){
        //PUT edit selected item
        return this.http.put(this.itemURL, itemObj);
    }

    deleteItem(id){
        //delete the selected item
        return this.http.delete(this.itemURL +"/" + id);
    }
}