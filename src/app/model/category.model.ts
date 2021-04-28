import { Item } from "./item.model";

export class Category{
    catId : number;
    catName: string;

    //1 category has many items
    item:Array<Item> = new Array<Item>();
}