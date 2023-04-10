import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultlist',
  templateUrl: './resultlist.component.html',
  styleUrls: ['./resultlist.component.css']
})
export class ResultlistComponent {

  @Input() results: any;

  constructor(){
      this.results = []
  }

  ngOnInit() {
  }
}
