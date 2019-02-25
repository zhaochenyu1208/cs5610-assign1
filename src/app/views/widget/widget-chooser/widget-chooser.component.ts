import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subject, Subscription} from 'rxjs';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit, OnDestroy {

  userId: string;
  widgetId: string;
  widgetType: string;
  widgetTypes: string[];
  subscription: Subscription;

  constructor(private widgetService: WidgetService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.userId = params['uid'];
          this.widgetId = params['wgid'];
        }
      );
    this.widgetTypes = this.widgetService.widgetTypes;
    this.subscription = this.widgetService.currentWidgetType
      .subscribe(
        (widgetType: string) => {
          this.widgetType = widgetType;
        }
      );
  }

  onNewWidget(widgetType: string) {
    this.widgetService.chooseNewType(widgetType);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
