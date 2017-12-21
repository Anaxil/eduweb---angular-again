import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playlist-detail',
  template: `
  <div class="card p-3">
  <div class="card-block">
    <div class="card-block">
      <h4 class="card-title">Playlista {{playlist.name}}</h4>
      <p class="card-text">Wybrana playlista</p>
    </div>
    <div>
      <button class="btn btn-default float-right" (click)="edit(playlist)">Edytuj</button>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class PlaylistDetailComponent implements OnInit {

  @Input()
  playlist;

  @Output('edited')
  onEdit = new EventEmitter();

  edit(playlist) {
    this.onEdit.emit(playlist);
  }

  constructor() { }

  ngOnInit() {
  }

}
