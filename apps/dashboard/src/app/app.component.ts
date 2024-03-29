import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  links = [
    { path: '/home', icon: 'home', title: 'Home'},
    { path: '/customers', icon: 'face', title: 'Customers'},
    { path: '/projects', icon: 'work', title: 'Projects'}
  ]
}
