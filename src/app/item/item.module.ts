import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "../angular-material.module";
import { AddItemComponent } from "./additem/additem.component";
import { ItemComponent } from "./item.component";
import { headerRoutes } from "./item.routing";
import { EdititemComponent } from './edititem/edititem.component';

@NgModule({
    declarations:[
        ItemComponent,
        AddItemComponent,
        EdititemComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forChild(headerRoutes),
        AngularMaterialModule
    ],
    providers :[],
    bootstrap:[ItemComponent]
})

export class itemModule{}