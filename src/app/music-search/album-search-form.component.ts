import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from './music-search.service';
import { FormGroup, FormControl } from '@angular/forms';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/debounceTime';

// rxjs 5.5
import { filter, distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-album-search-form',
  template: `
    <form [formGroup]="searchForm" (ngSubmit)="search(query)">
      <div class="input-group">
      <!--bez zformGroup
        <input type="text" [(ngModel)]="query" name="query" class="form-control" placeholder="Co chcesz znaleźć?">
      -->
      <input type="text" formControlName="query" class="form-control" placeholder="Co chcesz znaleźć?">
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
  searchForm: FormGroup;

  search(query) {
    this.musicSearch.search(query);
  }

  constructor(private musicSearch: MusicSearchService) {
    this.searchForm = new FormGroup({
      'query': new FormControl('Batman')
    });

    // this.searchForm.get('query').valueChanges.subscribe(query =>
    //   this.musicSearch.search(query)
    // );

    // rjxs 5.5
    this.searchForm.get('query').valueChanges
      .pipe(
      filter(query => query.length > 2),
      debounceTime(400),
      distinctUntilChanged()
      )
    .subscribe(query => this.musicSearch.search(query));

    // this.searchForm.get('query').valueChanges
    //   .filter(query => query.length > 2)
    //   .distinctUntilChanged()
    //   .debounceTime(400)
    //   .subscribe(query => {
    //     this.musicSearch.search(query);
    //   }
    //   );



   }

  ngOnInit() {
  }

}
