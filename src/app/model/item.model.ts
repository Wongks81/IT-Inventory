import { NgForm,FormGroup,FormControl,Validators,FormBuilder } from "@angular/forms";
import { Category } from "./category.model";

export class Item{
    itemId:number =0;
    itemName: string ='';
    itemSN : string= '';
    catId : number;

    //1 item can only have 1 category
    category : Category = new Category();

    // many item can have many vendors
    // to convert to many to many when table is created
    vendorId : number = 0;

    createdDate : Date;
    createdBy: string='';
    updatedDate: Date;
    updatedBy : string = '';
    archiveFlag : boolean = false;

    itemFGroup : FormGroup;

    constructor(){
        this.itemFGroup = new FormBuilder().group({});

        // var vItemCheck =[];
        // vItemCheck.push(Validators.required);
        this.itemFGroup.addControl("fgItemName", new FormControl('', Validators.required));
        this.itemFGroup.addControl("fgSerialNum", new FormControl('', Validators.required));
        this.itemFGroup.addControl("fgCategory", new FormControl(''));
        this.itemFGroup.addControl("fgVendor", new FormControl(''));
        this.itemFGroup.addControl("fgCreatedBy", new FormControl(''));
        this.itemFGroup.addControl("fgCreatedOn", new FormControl(''));
    }
};