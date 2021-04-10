import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material.module';
import { GlobalCommon } from './global/common.model';


import { ItemComponent } from './item/item.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { AddItemComponent } from "./item/additem/additem.component";

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    MainheaderComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [GlobalCommon],
  bootstrap: [AppComponent]
})
export class AppModule { }
