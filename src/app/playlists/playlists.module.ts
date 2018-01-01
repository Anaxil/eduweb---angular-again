import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists.component';
import { ContentCardComponent } from './content-card.component';
import { PlaylistFormComponent } from './playlist-form.component';
import { PlaylistsListComponent } from './playlists-list.component';
import { PlaylistDetailComponent } from './playlist-detail.component';
import { FormsModule } from '@angular/forms';
import { PlaylistsService } from './playlists.service';

import PlaylistsData from './playlists.data';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PlaylistsComponent,
    ContentCardComponent,
    PlaylistFormComponent,
    PlaylistsListComponent,
    PlaylistDetailComponent
  ],
  exports: [
    PlaylistsComponent
  ],
  providers: [
    PlaylistsService
  ]
})
export class PlaylistsModule { }
