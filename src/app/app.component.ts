import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Witaj w kursie Angular';

  selected = null;

  playlist = {
    name: 'The best of TFC!',
    tracks: 23,
    color: '#ff0000',
    favourite: true
  };

  save(event) {
    console.log(event);
  }
}
