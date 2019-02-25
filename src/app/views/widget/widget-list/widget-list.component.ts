import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Params} from '@angular/router';
import {Widget} from '../../../models/widget.model';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  userId: string;
  pageId: string;
  widgets: Widget[];

  constructor(private widgetService: WidgetService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.userId = params['uid'];
          this.pageId = params['pid'];
        }
      );
    this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
  }

}
