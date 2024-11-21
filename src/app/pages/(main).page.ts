import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    main layout
    <hr />
    <router-outlet />
  `
})
export default class MainLayoutPageComponent { }
