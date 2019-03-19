import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model.client';
import {Website} from '../../../models/website.model.client';
import {Page} from '../../../models/page.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {UserService} from '../../../services/user.service.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {DomSanitizer, SafeResourceUrl, SafeStyle, SafeUrl} from '@angular/platform-browser';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
  })
export class WidgetListComponent implements OnInit {

  user: User = new User('', '', '', '', '', '');;
  website: Website = new Website('', '', '', '');
  page: Page = new Page('', '', '', '');
  widgets: Widget[];
  styleValue: SafeStyle;
  videoUrl: SafeResourceUrl;

  constructor(private webService: WebsiteService, private userService: UserService, private sanitizer: DomSanitizer,
              private pageService: PageService, private widgetService: WidgetService, private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.findUserById(params['uid']).subscribe(
          (user: User) => {
            this.user = user;
          }
      );
      this.webService.findWebsiteById(params['websiteId']).subscribe(
          (website: Website) => {
            this.website = website;
          }
      );
      this.pageService.findPageById(params['pageId']).subscribe(
          (page: Page) => {
            this.page = page;
          }
      );
      this.widgetService.findWidgetsByPageId(params['pageId']).subscribe(
          (widgets: Widget[]) => {
            this.widgets = widgets;
          }
      );
    });
  }

  checkStyle(value: string) {
    this.styleValue = this.sanitizer.bypassSecurityTrustStyle(value);
    return this.styleValue;
  }

  checkVideoUrl(url: string) {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    this.videoUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return this.videoUrl;
  }

    reorderItems(indexes) {
        this.widgetService.reorderWidget(this.page.pageId, indexes.startIndex, indexes.endIndex).subscribe(
            (widgets: Widget[]) => {
                this.router.navigate(['/profile/' + this.user.uid +
                '/website/' + this.website.websiteId + '/page/' + this.page.pageId + '/widget']);
            }
        );
    }


}
