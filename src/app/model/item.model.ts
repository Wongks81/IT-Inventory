import { NgForm,FormGroup,FormControl,Validators,FormBuilder } from "@angular/forms";

export class Item{
    itemId:number =0;
    itemName: string ='';

    itemFGroup : FormGroup;

    constructor(){
        this.itemFGroup = new FormBuilder().group({});

        var vItemCheck =[];
        vItemCheck.push(Validators.required);
        this.itemFGroup.addControl("cItemCheck", new FormControl('', Validators.compose(vItemCheck)));
        
    }
};