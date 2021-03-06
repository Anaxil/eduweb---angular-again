import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
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

  getAlbum(id) {
    const url = `https://api.spotify.com/v1/albums/${id}`;
    return this.http.get(url)
    .map( (response: Response) => response.json());
  }

  search(query) {
    const url = `https://api.spotify.com/v1/search?type=album&query=${query}`;
    this.http.get(url)
    .map( (response: Response) => {
      const data = response.json();
      const albums = data.albums.items;
      return albums;
    })
    .do ( albums => {
      this.albums = albums;
    })
      .subscribe(albums => {
          this.albumsStream.next(albums);
      });
  }

  getAlbumsStream() {
    return Observable
      .from(this.albumsStream)
      .startWith(this.albums);
  }
}