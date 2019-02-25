import { Component, OnInit } from '@angular/core';
import {Widget, WidgetHeading, WidgetYoutube} from '../../../../models/widget.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  widgetId: string;
  userId: string;
  pageId: string;
  widget: Widget = new WidgetHeading("", "", "", null, "");
  newWidget: Widget;
  newWidgetName: string;
  newWidgetText: string = '';
  newWidgetSize: number = null;
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
      this.newWidget = new WidgetHeading("", "HEADING", this.pageId, this.newWidgetSize, this.newWidgetText);
      this.widgetService.createWidget(this.pageId, this.newWidget);
      this.router.navigate(['../'], {relativeTo: this.route});
    } else {
      if (this.newWidgetText === '') {
        // @ts-ignore
        this.newWidgetText = this.widget.text;
      }
      if (this.newWidgetSize === null) {
        // @ts-ignore
        this.newWidgetSize = this.widget.size;
      }
      // console.log(this.newWidgetText);
      this.newWidget = new WidgetHeading(this.widgetId, "HEADING", this.pageId, this.newWidgetSize, this.newWidgetText);
      this.widgetService.updateWidget(this.widgetId, this.newWidget);
      this.router.navigate(['../'], {relativeTo: this.route});
    }
  }

  onDelete() {
    this.widgetService.deleteWidget(this.widgetId);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
