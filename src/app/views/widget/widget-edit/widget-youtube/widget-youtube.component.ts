import { Component, OnInit } from '@angular/core';
import {Widget, WidgetImage, WidgetYoutube} from '../../../../models/widget.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  widgetId: string;
  userId: string;
  pageId: string;
  widget: Widget = new WidgetYoutube("", "", "", "", "");
  newWidget: Widget;
  newWidgetName: string;
  newWidgetText: string = '';
  newWidgetWidth: string = '';
  newWidgetURL: string = '';
  editFlag = false;

  constructor(private route: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.userId = params['uid'];
          this.widgetId = params['wgid'];
          this.pageId = params['pid'];
        }
      );
    if (this.widgetId !== 'undefined') {
      this.widget = this.widgetService.findWidgetById(this.widgetId);
    }
    this.editFlag = this.widgetService.editFlag;
  }


  onEditWidget() {
    if (this.widgetId === 'undefined') {
      this.newWidget = new WidgetYoutube("", "YOUTUBE", this.pageId, this.newWidgetWidth, this.newWidgetURL);
      this.widgetService.createWidget(this.pageId, this.newWidget);
      this.router.navigate(['../'], {relativeTo: this.route});
    } else {
      if (this.newWidgetText === '') {
        // @ts-ignore
        this.newWidgetText = this.widget.text;
      }
      if (this.newWidgetWidth === '') {
        // @ts-ignore
        this.newWidgetWidth = this.widget.width;
      }
      if (this.newWidgetURL === '') {
        // @ts-ignore
        this.newWidgetURL = this.widget.url;
      }
      this.newWidget = new WidgetYoutube(this.widgetId, "YOUTUBE", this.pageId, this.newWidgetWidth, this.newWidgetURL);
      this.widgetService.updateWidget(this.widgetId, this.newWidget);
      this.router.navigate(['../'], {relativeTo: this.route});
    }
  }

  onDelete() {
    this.widgetService.deleteWidget(this.widgetId);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
