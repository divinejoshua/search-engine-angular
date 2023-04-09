import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Form group
  homeForm = new FormGroup({
    query:  new FormControl('', Validators.required),
  });

  constructor(private router: Router){}

  onSubmit() :void {
    this.router.navigate(
      ['/search'],
      { queryParams: { query: this.homeForm.value.query } }
    );
  }
}
