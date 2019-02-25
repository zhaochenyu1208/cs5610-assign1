import {Widget, WidgetHeading, WidgetHtml, WidgetImage, WidgetYoutube} from '../models/widget.model';
import {BehaviorSubject, Subject} from 'rxjs';
import {Page} from '../models/page.model';
import {text} from '@angular/core/src/render3';
import {Injectable} from '@angular/core';

@Injectable()
export class WidgetService {

  widgetsChanged = new Subject<Widget[]>();
  private widgetChosen = new BehaviorSubject('DEFAULT');
  currentWidgetType = this.widgetChosen.asObservable();
  widgets: Widget[] = [
    new WidgetHeading("123", "HEADING", "321", 2, "GIZMODO"),
    new WidgetHeading("234", "HEADING", "321", 4, "Lorem ipsum"),
    new WidgetImage("345", "IMAGE", "321", "100%", "http://lorempixel.com/400/200"),
    new WidgetHtml("456", "HTML", "321", "<p>Lorem ipsum</p>"),
    new WidgetHeading("567", "HEADING", "321", 4, "Lorem ipsum"),
    new WidgetYoutube("678", "YOUTUBE", "321", "100%", "https://www.youtube.com//embed/eSLe4HuKuK0"),
    new WidgetHtml("789", "HTML", "321", "<p>Lorem ipsum</p>")
  ];
  widgetTypes: string[] = [
    "Header", "Label", "HTML", "Text Input", "Link", "Button", "Image", "YouTube", "Data Table", "Repeater"
  ];
  editFlag = false;


  createWidget(pageId: string, widget: Widget) {
    widget._id = String(Math.floor(Math.random() * 1000) + 1);
    widget.pageId = pageId;
    this.widgets.push(widget);
    this.widgetsChanged.next(this.widgets.slice());
  }

  findWidgetsByPageId(pageId: string) {
    const ans = [];
    for (let widget of this.widgets) {
      if (widget.pageId === pageId) {
        ans.push(widget);
      }
    }
    return ans;
  }

  findWidgetById(widgetId: string) {
    for (let widget of this.widgets) {
      if (widget._id === widgetId) {
        return widget;
      }
    }
  }

  updateWidget(widgetId: string, newWidget: any) {
    for (let widget of this.widgets) {
      if (widget._id === widgetId) {
        if (widget.widgetType === 'HEADING') {
          // @ts-ignore
          widget.size = newWidget.size;
          // @ts-ignore
          widget.text = newWidget.text;
        } else if (widget.widgetType === 'IMAGE') {
          // @ts-ignore
          widget.width = newWidget.width;
          // @ts-ignore
          widget.url = newWidget.url;
        } else if (widget.widgetType === 'YOUTUBE') {
          // @ts-ignore
          widget.width = newWidget.width;
          // @ts-ignore
          widget.url = newWidget.url;
        }
      }
    }
    this.widgetsChanged.next(this.widgets.slice());
  }

  deleteWidget(widgetId: string) {
    this.widgets.forEach((widget, index) => {
      if (widget._id === widgetId) {
        this.widgets.splice(index, 1);
      }
    });
    this.widgetsChanged.next(this.widgets.slice());
  }

  chooseNewType(widgetType: string) {
    this.widgetChosen.next(widgetType);
  }
}
