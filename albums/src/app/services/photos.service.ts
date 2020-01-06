import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private httpclient: HttpClient) { }

  getAlbums(){
    return this.httpclient.get('https://jsonplaceholder.typicode.com/albums');
  }

  getPhotos(albumId) {
    return this.httpclient.get('https://jsonplaceholder.typicode.com/photos?albumId=${albumId}');
  }
}
