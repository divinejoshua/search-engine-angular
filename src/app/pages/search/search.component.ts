import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  query : any;

  constructor(private router: ActivatedRoute ){
    this.query = ''
  }

  ngOnInit() {
    this.query = this.router.snapshot.queryParamMap.get('query')
  }
}
