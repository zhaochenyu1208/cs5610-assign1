import {Website} from '../models/website.model';
import {Subject} from 'rxjs';

export class WebsiteService {

  websitesChanged = new Subject<Website[]>();
  websites: Website[] = [
    {_id: "123", name: "Facebook", developerId: "456", description: "Lorem"},
    {_id: "234", name: "Tweeter", developerId: "456", description: "Lorem"},
    {_id: "456", name: "Gizmodo", developerId: "456", description: "Lorem"},
    {_id: "890", name: "Go", developerId: "123", description: "Lorem"},
    {_id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem"},
    {_id: "678", name: "Checkers", developerId: "123", description: "Lorem"},
    {_id: "789", name: "Chess", developerId: "234", description: "Lorem"},
  ];

  createWebsite(userId: string, website: Website) {
    website._id = String(Math.floor(Math.random() * 1000) + 1);
    website.developerId = userId;
    this.websites.push(website);
    this.websitesChanged.next(this.websites.slice());
  }

  findWebsitesByUser(userId: string) {
    const ans = [];
    for (let website of this.websites) {
      if (website.developerId === userId) {
        ans.push(website);
      }
    }
    return ans;
  }

  findWebsiteById(websiteId: string) {
    for (let website of this.websites) {
      if (website._id === websiteId) {
        return website;
      }
    }
  }

  updateWebsite(websiteId: string, newWebsite: Website) {
    for (let website of this.websites) {
      if (website._id === websiteId) {
        website.name = newWebsite.name;
        website.description = newWebsite.description;
      }
    }
    this.websitesChanged.next(this.websites.slice());
  }

  deleteWebsite(websiteId: string) {
    this.websites.forEach((website, index) => {
      if (website._id === websiteId) {
        this.websites.splice(index, 1);
      }
    });
    this.websitesChanged.next(this.websites.slice());
  }
}
