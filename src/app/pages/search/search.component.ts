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
  results : any
  isLoading : boolean
  isError : boolean

  // Form group
  SearchForm = new FormGroup({
    query:  new FormControl(this.route.snapshot.queryParamMap.get('query'), Validators.required),
  });

  // Constructor
  constructor(private router: Router, private route: ActivatedRoute, private SearchService : SearchService){
    this.results = []
    this.isLoading = false
    this.isError = false
  }

  // On Submit
   async onSubmit() {
      this.isLoading = true
      this.isError = false
      this.results = []
      this.query = this.SearchForm.value.query

      // Check if query is valid
       if (!this.searchQueryExist(this.query)){ return }


      // Change the page URL
      this.router.navigate(
        ['/search'],
        { queryParams: { query: this.SearchForm.value.query } }
      );


      try {
        // asynchronous operation
        await this.SearchService.getSearchResults(this.query).subscribe(
          //Success
          (response) =>{
            this.results = response
            this.isLoading = false
          },

          // Error
          (error) => {
            console.log('error caught in component')
            this.isLoading = false
            this.isError = true
          },
        )
      }
      finally {
          // this will always get executed
      }

    }

    // Check if search value in the URL is empty
    searchQueryExist(strValue: any): boolean {
      if ((!strValue || /^\s*$/.test(strValue))==true) {
        this.router.navigate(
          ['/'],
        );
        return false
      }
      return true
    }



  ngOnInit() {
    this.onSubmit()
  }
}
