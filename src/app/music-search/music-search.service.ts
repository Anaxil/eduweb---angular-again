import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MusicSearchService {

  albums = [];
  albumsStream = new Subject();

  constructor(private http: Http) { 
    this.search('Batman');
  }

  getAlbums(callback) {
    // return this.albums;
    this.search('Metallica');
  }

  search(query) {
    const url = `https://api.spotify.com/v1/search?type=album&query=${query}`;
    this.http.get(url)
      .subscribe((response) => {
          const data = response.json();
          const albums = data.albums.items;
          this.albums = albums;
          this.albumsStream.next(albums);
      })
  }

  getAlbumsStream() {
    return Observable.from(this.albumsStream);
  }
}
