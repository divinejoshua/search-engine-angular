import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  query : any

  // Form group
  SearchForm = new FormGroup({
    query:  new FormControl(this.route.snapshot.queryParamMap.get('query'), Validators.required),
  });

  constructor(private route: ActivatedRoute, private router: Router){
}


  // On Submit
    onSubmit() :void {
      console.log(this.SearchForm.value.query)
      this.router.navigate(
        ['/search'],
        { queryParams: { query: this.SearchForm.value.query } }
      );
    }


  ngOnInit() {
    this.onSubmit()
  }
}
