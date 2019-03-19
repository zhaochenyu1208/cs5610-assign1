export class Widget {
    widgetId: string;
    type: string;
    pageId: string;
    size: string;
    text: string;
    url: string;
    width: string;

    constructor(widgetId, type, pageId, size= '20', text, width = '80%', url) {
        this.widgetId = widgetId;
        this.type = type;
        this.pageId = pageId;
        this.text = text;
        this.size = size;
        this.url = url;
        this.width = width;
    }
}
