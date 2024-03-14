import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular';
  constructor(private router: Router) {}

  isBookRoute(): boolean {
    return this.router.url.includes('/book');
  }

  isBlogRoute(): boolean {
    return this.router.url.includes('/blog');
  }

  isProfileRoute(): boolean {
    return this.router.url.includes('/profile');
  }
}
