import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent {
  name = ''

  constructor(
    private router: Router
  ) {}

  search() {
    if(this.name) {
      this.router.navigate(['products'], { queryParams: { name: this.name }})
      return
    }

    this.router.navigate(['products'])
  }
}
