import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-form',
  template: `
  <div class="card p-3">
  <div class="card-block">
    <div class="card-block">
      <h4 class="card-title">Playlista</h4>
      <p class="card-text">Opis playlisty</p>
    </div>
    <div class="form-group">
      <label>Nazwa:</label>
      <input type="text" [(ngModel)]="playlist.name" class="form-control">
    </div>
    <div class="form-group">
      <label>Utwory:</label>
      <input type="text" [value]="playlist.tracks + ' utworów'" disabled class="form-control">
    </div>
    <div class="form-group">
      <label>Kolor:</label>
      <input type="color" [(ngModel)]="playlist.color">
    </div>
    <div class="form-group">
      <label>
        <input type="checkbox" [(ngModel)]="playlist.favourite">Ulubiona:</label>
    </div>
    <div class="form-group">
      <button class="btn btn-success" (click)="save($event)">Zapisz</button>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class PlaylistFormComponent implements OnInit {

  @Input()
  playlist;

  constructor() { }

  ngOnInit() {
  }

}
