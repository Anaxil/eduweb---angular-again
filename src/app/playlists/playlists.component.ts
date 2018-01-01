import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from './playlists.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  selected = null;
  edited = {};
  playlist = {};
  mode = 'none';

  playlists = [];

  constructor(private playlistsSerive: PlaylistsService) {}

  ngOnInit() {
    this.playlists = this.playlistsSerive.getPlaylists();
  }

  createNew() {
    this.mode = 'edit';
    const newPlaylist = this.playlistsSerive.createPlaylist();
    this.selected = newPlaylist;
    this.edited = newPlaylist;
  }

  select(playlist) {
    if (playlist !== this.selected) {
      this.mode = 'selected'
      this.selected = playlist;
    }
  }

  edit(playlist) {
    this.mode = 'edit';
    this.edited = Object.assign({}, playlist);
    this.selected = playlist;
  }

  save(playlist) {
    this.playlistsSerive.savePlaylist(playlist);
    console.log('saved:', event);
  }

}
