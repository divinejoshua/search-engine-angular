import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/core/services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  query : any
  results : []

  // Form group
  SearchForm = new FormGroup({
    query:  new FormControl(this.route.snapshot.queryParamMap.get('query'), Validators.required),
  });

  // Constructor
  constructor(private route: ActivatedRoute, private router: Router, private SearchService : SearchService){
    this.results = []
  }

  // On Submit
   async onSubmit() {
      console.log(this.SearchForm.value.query)


      this.router.navigate(
        ['/search'],
        { queryParams: { query: this.SearchForm.value.query } }
      );


      try {
        // asynchronous operation
        await this.SearchService.getSearchResults("/todo").subscribe(
          //Success
          (response) =>{
            console.log(response)
          },

          // Error
          (error) => {
            console.log('error caught in component')
          },
        )
      }
      finally {
          // this will always get executed
          console.log ("Done!")
      }

    }


  ngOnInit() {
    this.onSubmit()
  }
}
