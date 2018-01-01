import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-album-card',
  template: `
    <img class="card-image-top img-fluid" [src]="image.url">
    <div class="card-img-overlay">
      <h5 class="card-ttile">{{album.name}}</h5>
    </div>
  `,
  styles: [`
    :host() {
      flex: 0 0 30% !important;
      overflow: hidden;
      margin-bottom: 0.6rem !important;
    }
    :host():hover .card-img-overlay {
      top:100%;
    }
    .card-img-overlay {
      background: rgba(0,0,0,0.7);
      top: 70%;
      color: #fff;
      font-size: 1em !important;
      transition: 0.2s top ease-out;
    }
  `]
})
export class AlbumCardComponent implements OnInit {

  album;
  image;

  @Input('album')
  set setAlbum(album) {
    this.album = album;
    this.image = album.images[0];
  }

  constructor() { }

  ngOnInit() {
  }

}
