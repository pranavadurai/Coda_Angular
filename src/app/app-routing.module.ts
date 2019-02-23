import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SongsComponent }        from './songs/songs.component';
import { SongShowComponent }     from './song-show/song-show.component';

const routes: Routes = [
 { path: '', redirectTo: '/Songs', pathMatch: 'full' },
 { path: 'Songs', component: SongsComponent },
 { path: 'Song/:id', component: SongShowComponent}

];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
