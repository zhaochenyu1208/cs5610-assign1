import {Component, OnInit, ViewChild} from '@angular/core';
import {Website} from '../../../models/website.model';
import {NgForm} from '@angular/forms';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Page} from '../../../models/page.model';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  userId: string;
  websiteId: string;
  newPage: Page;
  newPageName: string = '';
  newPageTitle: string;

  constructor(private pageService: PageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
        }
      );
  }

  onNewPage() {
    if (this.newPageName === '') {
      return false;
    } else {
      this.newPage = {_id: '', name: this.newPageName, websiteId: this.websiteId, description: ''};
      this.pageService.createPage(this.websiteId, this.newPage);
      this.router.navigate(['../'], {relativeTo: this.route});
    }
  }

}
