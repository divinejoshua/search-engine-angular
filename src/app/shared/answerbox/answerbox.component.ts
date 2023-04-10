import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-answerbox',
  templateUrl: './answerbox.component.html',
  styleUrls: ['./answerbox.component.css']
})
export class AnswerboxComponent {
  @Input() answerBox: any;
}
