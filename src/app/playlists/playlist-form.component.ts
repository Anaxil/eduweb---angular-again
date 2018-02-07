import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistsService } from './playlists.service';

@Component({
  selector: 'app-playlist-form',
  template: `
  <div class="card p-3" *ngIf="playlist">
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
      <button class="btn btn-success" (click)="save(playlist)">Zapisz</button>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class PlaylistFormComponent implements OnInit {

  // @Input()
  playlist;

  // prz wdrożęniu usługi emiter nie jest już potrzebny
  // @Output()
  // saved = new EventEmitter;

  save(playlist) {
    // prz wdrożęniu usługi emiter nie jest już potrzebny
    // this.saved.emit(playlist);

    this.playlistsService.savePlaylist(playlist);
    this.router.navigate(['playlist', playlist.id]);
  }

  constructor(private activeRoute: ActivatedRoute,
              private playlistsService: PlaylistsService,
              private router: Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(param => {
      const id = parseInt(this.activeRoute.snapshot.paramMap.get('id'));
      if (id) {
        this.playlist = Object.assign({},this.playlistsService.getPlaylist(id));
      } else {
        this.playlist = this.playlistsService.createPlaylist();
        console.log(param);
      }
    });
  }

}
