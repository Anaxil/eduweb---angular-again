import { MusicSearchComponent } from './music-search.component';
import { RouterModule, Routes } from '@angular/router';

const routesConfig: Routes = [
  { path: 'music', component: MusicSearchComponent},
]

export const routerModule = RouterModule.forChild(routesConfig);
