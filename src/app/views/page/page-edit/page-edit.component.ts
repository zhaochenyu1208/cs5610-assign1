import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model.client';
import {Website} from '../../../models/website.model.client';
import {Page} from '../../../models/page.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {UserService} from '../../../services/user.service.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  user: User = new User('', '', '', '', '', '');
  website: Website = new Website('', '', '', '');
  pages: Page[];
  currPage: Page = new Page('', '', '', '');

  constructor(private webService: WebsiteService, private userService: UserService,
              private pageService: PageService, private route: ActivatedRoute, private router: Router) {}

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
      this.pageService.findPageByWebsiteId(params['websiteId']).subscribe(
          (pages: Page[]) => {
            this.pages = pages;
          }
      );
      this.pageService.findPageById(params['pageId']).subscribe(
          (page: Page) => {
            this.currPage = page;
          }
      );
    });
  }

  updatePage() {
    if (this.currPage.name && this.currPage.description) {
      this.pageService.updatePage(this.currPage.pageId, this.currPage).subscribe(
          (page: Page) => {
            this.currPage = page;
            this.router.navigate(['/profile/' + this.user.uid + '/website/' + this.website.websiteId + '/page']);
          }
      );
    } else {
      alert('Please enter page name and title!');
    }
  }

  deletePage() {
    this.pageService.deletePage(this.currPage.pageId).subscribe(
        (data: any) => {
            this.router.navigate(['/profile/' + this.user.uid + '/website/' + this.website.websiteId + '/page']);
        }
    );
  }

}
