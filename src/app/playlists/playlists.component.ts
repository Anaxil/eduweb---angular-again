import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selected = null;
  edited = {};
  playlist = {};
  mode = "none";

  playlists = [
    {
      name: 'The best of TFC!',
      tracks: 23,
      color: '#ff0000',
      favourite: true
    },
    {
      name: 'The best of TFC2!',
      tracks: 2,
      color: '#0000ff',
      favourite: false
    },
  ];

  createNew() {
    this.mode = "edit";
    let newPlaylist = {};
    this.selected = newPlaylist;
    this.edited = newPlaylist;
  }

  select(playlist) {
    if (playlist !== this.selected) {
      this.mode = "selected"
      this.selected = playlist;
    }
  }

  edit(playlist) {
    this.mode = "edit";
    this.edited = playlist;
    this.selected = playlist;
  }

  save(event) {
    console.log(event);
  }

}
