import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">

      <h3>
        <a routerLink="/" class="navbar-brand"> Muzyka z Angular 2</a>
      </h3>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a routerLink="/music" class="nav-link" routerLinkActive="active"> Szukaj Muzyki</a>
        </li>
        <li class="nav-item">
          <a routerLink="/playlist" class="nav-link" routerLinkActive="active"> Twoje Playlisty</a>
        </li>
      </ul>

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
