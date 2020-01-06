import { PhotosService } from './../../services/photos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums;
  constructor(private _photoService: PhotosService) { }

  ngOnInit() {
    this.albums = this._photoService.getAlbums();
  }

}
