import {Page} from '../models/page.model';
import {Subject} from 'rxjs';

export class PageService {

  pagesChanged = new Subject<Page[]>();
  pages: Page[] = [
    {_id: "321", name: "Post 1", websiteId: "456", description: "Lorem"},
    {_id: "432", name: "Post 2", websiteId: "456", description: "Lorem"},
    {_id: "543", name: "Post 3", websiteId: "456", description: "Lorem"}
  ];

  createPage(websiteId: string, page: Page) {
    page._id = String(Math.floor(Math.random() * 1000) + 1);
    page.websiteId = websiteId;
    this.pages.push(page);
    this.pagesChanged.next(this.pages.slice());
  }

  findPageByWebsiteId(websiteId: string) {
    const ans = [];
    for (let page of this.pages) {
      if (page.websiteId === websiteId) {
        ans.push(page);
      }
    }
    return ans;
  }

  findPageById(pageId: string) {
    for (let page of this.pages) {
      if (page._id === pageId) {
        return page;
      }
    }
  }

  updatePage(pageId: string, newPage: Page) {
    for (let page of this.pages) {
      if (page._id === pageId) {
        page.name = newPage.name;
        page.description = newPage.description;
      }
    }
    this.pagesChanged.next(this.pages.slice());
  }

  deletePage(pageId: string) {
    this.pages.forEach((page, index) => {
      if (page._id === pageId) {
        this.pages.splice(index, 1);
      }
    });
    this.pagesChanged.next(this.pages.slice());
  }
}
