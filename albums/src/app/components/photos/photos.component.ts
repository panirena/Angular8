import { PhotosService } from './../../services/photos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos;
  albumId;
  constructor(private _photosService: PhotosService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.albumId = this.route.snapshot.params.albumId;
    this.photos = this._photosService.getPhotos(this.albumId);
  }

}
