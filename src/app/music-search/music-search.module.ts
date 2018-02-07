import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicSearchComponent } from './music-search.component';
import { AlbumListComponent } from './album-list.component';
import { AlbumCardComponent } from './album-card.component';
import { MusicSearchService } from './music-search.service';
import { HttpModule } from '@angular/http';
import { AlbumSearchFormComponent } from './album-search-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routerModule } from './music-search.routing';
import { AlbumDetailsComponent } from './album-details.component';
import { TrackListComponent } from './track-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routerModule
  ],
  declarations: [
    MusicSearchComponent,
    AlbumListComponent,
    AlbumCardComponent,
    AlbumSearchFormComponent,
    AlbumDetailsComponent,
    TrackListComponent
  ],
  exports: [MusicSearchComponent],
  providers: [MusicSearchService]
})
export class MusicSearchModule { }
