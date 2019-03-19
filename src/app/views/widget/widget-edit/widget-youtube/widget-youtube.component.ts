import { Component, OnInit } from '@angular/core';
import {User} from '../../../../models/user.model.client';
import {Website} from '../../../../models/website.model.client';
import {Page} from '../../../../models/page.model.client';
import {Widget} from '../../../../models/widget.model.client';
import {WebsiteService} from '../../../../services/website.service.client';
import {UserService} from '../../../../services/user.service.client';
import {DomSanitizer} from '@angular/platform-browser';
import {PageService} from '../../../../services/page.service.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  user: User = new User('', '', '', '', '', '');;
  website: Website = new Website('', '', '', '');
  page: Page = new Page('', '', '', '');
  widgets: Widget[];
  currWidget: Widget = new Widget('', '', '', '', '', '', '');
  newWidget: Widget = new Widget('', '', '', '', '', '', '');

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
            this.newWidget = new Widget('', 'YOUTUBE', this.page.pageId, '', '', '', '');
          }
      );
      this.widgetService.findWidgetsByPageId(params['pageId']).subscribe(
          (widgets: Widget[]) => {
            this.widgets = widgets;
          }
      );
      this.widgetService.findWidgetById(params['widgetId']).subscribe(
          (widget: any) => {
              if (widget.message !== 'Widget not found!') {
                  this.currWidget = widget;
                  this.newWidget.text = this.currWidget.text;
                  this.newWidget.url = this.currWidget.url;
                  this.newWidget.width = this.currWidget.width;
              }
          }
      );
    });

  }

  updateWidget() {
    if (this.currWidget.url !== '') {
      this.currWidget.text = this.newWidget.text;
      this.currWidget.url = this.newWidget.url;
      this.currWidget.width = this.newWidget.width;
      if (this.currWidget.url !== '') {
        this.widgetService.updateWidget(this.currWidget.widgetId, this.currWidget).subscribe(
            (data: any) => {
              this.router.navigate(['/profile/' + this.user.uid +
              '/website/' + this.website.websiteId + '/page/' + this.page.pageId + '/widget']);
            }
        );
      } else {
        alert('Url cannot be empty!');
      }
    } else {
      if (this.newWidget.url !== '') {
        this.widgetService.createWidget(this.page.pageId, this.newWidget).subscribe(
            (data: any) => {
              this.router.navigate(['/profile/' + this.user.uid +
              '/website/' + this.website.websiteId + '/page/' + this.page.pageId + '/widget']);
            }
        );
      } else {
        alert('Url cannot be empty!');
      }
    }

  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.currWidget.widgetId).subscribe(
        (data: any) => {
          this.router.navigate(['/profile/' + this.user.uid +
          '/website/' + this.website.websiteId + '/page/' + this.page.pageId + '/widget']);
        }
    );
  }
}
