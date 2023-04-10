import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultlistComponent } from './resultlist/resultlist.component';
import { InlineimagesComponent } from './inlineimages/inlineimages.component';
import { KnowledgegraphComponent } from './knowledgegraph/knowledgegraph.component';
import { AnswerboxComponent } from './answerbox/answerbox.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ResultlistComponent,
    InlineimagesComponent,
    KnowledgegraphComponent,
    AnswerboxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    ResultlistComponent,
    InlineimagesComponent,
    KnowledgegraphComponent,
    AnswerboxComponent,
  ],
})
export class SharedModule { }
