import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultlistComponent } from './resultlist/resultlist.component';
import { InlineimagesComponent } from './inlineimages/inlineimages.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ResultlistComponent,
    InlineimagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    ResultlistComponent,
    InlineimagesComponent,
  ],
})
export class SharedModule { }
