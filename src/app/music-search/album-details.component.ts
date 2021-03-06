import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from './music-search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-details',
  template: `
  <div class="row mt-1" *ngIf="album">
    <div class="col">
    <app-album-card class="card" [album]="album"></app-album-card>
    </div>
    <div class="col">
    <h4 class="display-3 mb-2 float-right">Utwory</h4>
    <app-track-list [tracks]="album.tracks.items"></app-track-list>
    </div>
  </div>
  `,
  styles: []
})
export class AlbumDetailsComponent implements OnInit {

  album;

  constructor(private musicService: MusicSearchService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('album_id');
    this.musicService.getAlbum(id)
    .subscribe(album => {
      this.album = album;
    });
  }

}
