import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Item } from "../model/item.model";
import { GlobalCommon } from "../global/common.model";

@Injectable({providedIn: 'root'})
export class ItemService{
    private itemList :Item[] = [];
    
    private serverURL = this.globalObj.nodeServerURL + '/api/items/'

    constructor(private http : HttpClient,
                public globalObj: GlobalCommon
        ){}

    getItemList(){
        //Get list of items for display
        return this.http.get<{message:string, itemList:Item[]}>(this.serverURL);
    }

    postAddItem(itemObj: any){
        //POST add single item to DB
        return this.http.post(this.serverURL, itemObj);
    }

    putEditItem(itemObj: any){
        //PUT edit selected item
        return this.http.put(this.serverURL, itemObj);
    }

    deleteItem(id:number){
        //delete the selected item
        return this.http.delete(this.serverURL + id);
    }
}