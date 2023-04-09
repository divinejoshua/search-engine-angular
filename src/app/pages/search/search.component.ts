import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  // Form group
  SearchForm = new FormGroup({
    query:  new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute, private router: Router){}


  // On Submit
    onSubmit() :void {
      console.log(this.SearchForm.value.query)
      this.router.navigate(
        ['/search'],
        { queryParams: { query: this.SearchForm.value.query } }
      );
    }


  ngOnInit() {
    this.SearchForm.value.query = this.route.snapshot.queryParamMap.get('query')
  }
}
