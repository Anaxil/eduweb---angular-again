import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <h3>
        <a routerLink="/" class="navbar-brand"> Muzyka z Angular 2</a>
      </h3>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a routerLink="/music" class="nav-link" routerLinkActive="active"> Szukaj Muzyki</a>
        </li>
        <li class="nav-item">
          <a routerLink="/playlist" class="nav-link" routerLinkActive="active"> Twoje Playlisty</a>
        </li>
      </ul>
    </div>
    </nav>
  `,
  styles: [`
    .navbar-nav {
      flex-direction: row;
    }
    `
  ]
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
