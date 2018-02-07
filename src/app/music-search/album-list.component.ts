import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from './music-search.service';

// <!-- w module można podmienić tylko brakującą część, z / cały adres podmienia
// [routerLink]="['/music','album',album.id]"--!

@Component({
  selector: 'app-album-list',
  template: `
    <div class="card-deck card-deck-justify">
      <app-album-card [album]="album" class="card"
        [routerLink]="['album',album.id]"
        *ngFor="let album of albums | async"></app-album-card>
    </div>
  `,
  styles: [`
  .card-deck-justify {
    justify-content: space-between;
  }
  `]
})
export class AlbumListComponent implements OnInit {

  albums;

  constructor(private musicSearch: MusicSearchService) { }

  ngOnInit() {
    this.albums = this.musicSearch.getAlbumsStream();

  }

}
