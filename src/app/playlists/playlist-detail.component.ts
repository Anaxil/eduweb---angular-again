import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistsService } from './playlists.service';

@Component({
  selector: 'app-playlist-detail',
  template: `
  <div class="card p-3">
    <div class="card-block">
      <div *ngIf="!playlist">
        <p class="card-text">Wybierz playlistę</p>
      </div>
      <div *ngIf="playlist">
        <h3 class="card-title">{{playlist.name}}</h3>
          <div>
          <button class="btn btn-default float-right" (click)="edit(playlist)">Edytuj</button>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class PlaylistDetailComponent implements OnInit {

  playlist;
  // @Input()
  // playlist;

  @Output('edited')
  onEdit = new EventEmitter();

  edit(playlist) {
    // this.onEdit.emit(playlist);

    //nawigacja programistyczna zamiast [routerLink] na DOM
    this.router.navigate(['playlist', playlist.id, 'edit']);
  }

  constructor(private activeRoute: ActivatedRoute,
    private playlistsService: PlaylistsService,
    private router: Router) { }

  ngOnInit() {
    //wykona się raz. tylko podczas tworzenia komponentu
    // const id = parseInt(this.activeRoute.snapshot.paramMap.get('id'));
    // if (id) {
    //   this.playlist = this.playlistsService.getPlaylist(id);
    // }

    //aby przy zmianie ścieżki przełądować dane w komponencie, ale go nie niszczyć, to subskrypcja na ścieżke
    this.activeRoute.params.subscribe(param => {
      const id = parseInt(this.activeRoute.snapshot.paramMap.get('id'));
      if (id) {
        this.playlist = this.playlistsService.getPlaylist(id);
      }
    });

  }

}
