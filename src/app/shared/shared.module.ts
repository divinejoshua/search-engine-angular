import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultlistComponent } from './resultlist/resultlist.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ResultlistComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    ResultlistComponent
  ],
})
export class SharedModule { }
