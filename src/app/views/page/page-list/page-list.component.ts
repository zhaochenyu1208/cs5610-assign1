import {Component, OnDestroy, OnInit} from '@angular/core';
import {Page} from '../../../models/page.model';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit, OnDestroy {

  userId: string;
  websiteId: string;
  pages: Page[];
  subscription: Subscription;

  constructor(private pageService: PageService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
        }
      );
    this.pages = this.pageService.findPageByWebsiteId(this.websiteId);
    this.subscription = this.pageService.pagesChanged
      .subscribe(
        (pages: Page[]) => {
          this.pages = pages;
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
