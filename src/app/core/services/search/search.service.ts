import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  // Base Url
  BASE_URL : string = "https://jsonplaceholder.typicode.com"

  // Get search results
  getSearchResults(path:string){
    return this.http.get(this.BASE_URL+path)
  }
}
