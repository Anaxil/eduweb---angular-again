import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from './music-search.service';

@Component({
  selector: 'app-album-search-form',
  template: `
    <form (ngSubmit)="search(query)">
      <div class="input-group">
        <input type="text" [(ngModel)]="query" name="query" class="form-control" placeholder="Co chcesz znaleźć?">
        <span class="input-group-btn">
          <button type="submit" class="btn btn-outline-primary">Szukaj</button>
        </span>
      </div>
    </form>
  `,
  styles: []
})
export class AlbumSearchFormComponent implements OnInit {

  query: String;

  search(query) {
    this.musicSearch.search(query);
  }

  constructor(private musicSearch: MusicSearchService) { }

  ngOnInit() {
  }

}
