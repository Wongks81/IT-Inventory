import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GlobalCommon } from "../global/common.model";
import { Category } from "../model/category.model";

@Injectable({providedIn: 'root'})
export class CategoryService{
    catList : Category[] = [];

    private catURL = this.globalObj.nodeServerURL + '/api/category';

    constructor(private globalObj:GlobalCommon,
                private http: HttpClient){}

    getCatList(){
        //Get list of items for display
        return this.http.get<{message:string, catList:Category[]}>(this.catURL);
    }
}