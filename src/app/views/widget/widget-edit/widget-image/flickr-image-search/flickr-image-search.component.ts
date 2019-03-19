import { Component, OnInit } from '@angular/core';
import {FlickrService} from '../../../../../services/flickr.service.client';
import {WidgetService} from '../../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../../models/widget.model.client';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {

  uid: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  photos: [any];
  error: string;
  searchText: string;

  constructor(private flickrService: FlickrService, private widgetService: WidgetService,
              private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
        .subscribe(
            (params: any) => {
              this.websiteId = params['websiteId'];
              this.pageId = params['pageId'];
              this.widgetId = params['widgetId'];
              this.uid = params['uid'];
            }
        );
  }

  searchPhotos() {
    this.flickrService
        .searchPhotos(this.searchText)
        .subscribe(
            (data: any) => {
              let val = data.body;
              val = val.replace('jsonFlickrApi(', '');
              val = val.substring(0, val.length - 1);
              val = JSON.parse(val);
              this.photos = val.photos;
            }
        );
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';

    const widget = new Widget('', 'IMAGE', this.pageId, '', '', '', url);

    this.widgetService
        .updateWidget(this.widgetId, widget)
        .subscribe(
            (data: any) => {
              const result = data;
              if (!result) {
                this.error = 'failed!';
              } else {
                this.router.navigate(['/profile/' + this.uid + '/website/'
                + this.websiteId + '/page/' + this.pageId + '/widget/' + this.widgetId]);
              }
            }
        );
  }

}
