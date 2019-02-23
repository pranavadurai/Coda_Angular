import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SongsService } from '../services/songs.service';
import { Song } from '../model/Song';

@Component({
  selector: 'app-song-show',
  templateUrl: './song-show.component.html',
  styleUrls: ['./song-show.component.css']
})
export class SongShowComponent implements OnInit {

  song: Song;
  duration: any;

  constructor(private songsService: SongsService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getSong();
  }

  getSong(): void {
    console.log("Get Song Called");
    const id = +this.route.snapshot.paramMap.get('id');
    this.songsService.getSong(id).subscribe( song => {
       this.song =  song;
       this.duration = <any> Math.floor((song.duration_ms/1000)/60);
    })
  }

}
