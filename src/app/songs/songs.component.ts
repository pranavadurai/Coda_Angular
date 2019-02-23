import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SongsService } from '../services/songs.service';

import { Song } from '../model/Song';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})

export class SongsComponent implements OnInit {

  p: number = 1;
  order: string = "rank";
  songs: Array<Song> = [];
  definedFilter: any = { name: '', artists: ''};

  constructor(private songsService: SongsService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getSongs();
  }

  getSongs(): void {
    console.log("Get Songs Called");
    this.songsService.getSongs().subscribe( songs => {
       this.songs = <Song[]> songs;
    })
  }

  sortDataBy(order:string): void {
    console.log("SortByInitiated");
    this.order = order;
    this.getSongs();
  }

}
