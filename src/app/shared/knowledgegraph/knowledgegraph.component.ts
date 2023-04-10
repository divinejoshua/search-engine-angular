import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-knowledgegraph',
  templateUrl: './knowledgegraph.component.html',
  styleUrls: ['./knowledgegraph.component.css']
})
export class KnowledgegraphComponent {
  @Input() knowledgeGraph: any;
}
