import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlaylistsModule } from './playlists/playlists.module';

import { AuthService } from './auth.service';
import { HttpModule } from '@angular/http';
import { MusicSearchModule } from './music-search/music-search.module';
import { routerModule } from './app.routing';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PlaylistsModule,
    HttpModule,
    MusicSearchModule,
    routerModule
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private authService: AuthService) {
    authService.getToken();
  }

}
