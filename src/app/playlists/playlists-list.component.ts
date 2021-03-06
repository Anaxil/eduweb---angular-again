import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//podmiana clicka - zdarzenia na routerLink
// <tr *ngFor="let playlist of playlists; let i = index"
// class="playlist-row" [ngClass]="{'table-active': selected == playlist}" [ngStyle]="{borderBottomColor: playlist.color}"
// (click)="select(playlist)">

@Component({
  selector: 'app-playlists-list',
  template: `
  <table class="table table-striped">
  <thead>
    <tr>
      <th>##</th>
      <th>Nazwa</th>
      <th>Utworów</th>
      <th>Ulubiona</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let playlist of playlists; let i = index"
      class="playlist-row" [ngClass]="{'table-active': selected == playlist}" [ngStyle]="{borderBottomColor: playlist.color}"
      [routerLink]="[playlist.id]">
      <td>{{i + 1}}.</td>
      <td>{{playlist.name}}</td>
      <td>{{playlist.tracks}}</td>
      <td>
        <input type="checkbox" [(ngModel)]="playlist.favourite" (click)="$event.stopPropagation()">
      </td>
    </tr>
  </tbody>
</table>
  `,
  styles: [`
  .playlist-row {
    border-bottom: 2px solid transparent;
  }`]
})
export class PlaylistsListComponent implements OnInit {

  @Input()
  playlists;

  @Input()
  selected;

  @Output("selected")
  onSelected = new EventEmitter();

  select(playlist) {
    this.onSelected.emit(playlist);
    console.log(playlist);
  }

  constructor() { }

  ngOnInit() {
  }

}
