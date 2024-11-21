import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <a routerLink="/">Home</a> | 
    <a routerLink="/sign-up">Sign Up</a> | 
    <a routerLink="/login">Login</a> | 
    <a routerLink="/product">Product</a> | 
    <a routerLink="/categories">Categories</a>
    <hr />
    <router-outlet />
  `,
  styles: `
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
  `,
})
export class AppComponent {
  router = inject(Router);

  ngOnInit() {
    console.log(this.router.config);
  }
}
