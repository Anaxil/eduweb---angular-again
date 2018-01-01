import { Injectable } from '@angular/core';

@Injectable()
export class PlaylistsService {

  playlists = [];

  savePlaylist(playlist) {
    if (playlist.id) {
      const index = this.playlists.findIndex((elements) => {
        return elements.id === playlist.id;
      });
      this.playlists.splice(index, 1, playlist);
      console.log('saved edited playlist');
    } else {
      playlist.id = Date.now();
      this.playlists.push(playlist);
      console.log('saved new playlist');
    }
  }

  getPlaylists() {
    return this.playlists;
  }

  createPlaylist() {
    const newPlaylist = {
      name: '',
      tracks: 0,
      color: '#FF0000',
      favourite: false
    };
    return Object.assign({}, newPlaylist);
  }

  constructor() { }

}
