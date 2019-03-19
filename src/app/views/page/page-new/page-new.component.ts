import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model.client';
import {Website} from '../../../models/website.model.client';
import {Page} from '../../../models/page.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {UserService} from '../../../services/user.service.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  user: User = new User('', '', '', '', '', '');
  website: Website = new Website('', '', '', '');
  pages: Page[];
  newPage: Page = new Page('', '', '', '');

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
    });
    this.newPage = new Page('', '', this.website.websiteId, '');
  }

  addPage() {
    if (this.newPage.name && this.newPage.description) {
      this.pageService.createPage(this.website.websiteId, this.newPage).subscribe(
          (page: Page) => {
            this.newPage = page;
            this.router.navigate(['/profile/' + this.user.uid + '/website/' + this.website.websiteId + '/page']);
          }
      );
    } else {
      alert('Please enter page name and title!');
    }
  }

}
