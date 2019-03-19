import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model.client';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  user: User = new User('', '', '', '', '', '');
  websites: Website[];
  currWebsite: Website = new Website('', '', '', '');

  constructor(private webService: WebsiteService, private userService: UserService,
              private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.findUserById(params['uid']).subscribe(
          (user: User) => {
            this.user = user;
          }
      );
      this.webService.findWebsiteByUser(params['uid']).subscribe(
          (websites: Website[]) => {
            this.websites = websites;
          }
      );
      this.webService.findWebsiteById(params['websiteId']).subscribe(
          (website: Website) => {
            this.currWebsite = website;
          }
      );
    });
  }

  updateWebsite() {
    if (this.currWebsite.name && this.currWebsite.description) {
      this.webService.updateWebsite(this.currWebsite.websiteId,
          new Website(this.currWebsite.websiteId, this.currWebsite.name, this.user.uid, this.currWebsite.description)).subscribe(
          (data: any) => {
            this.router.navigate(['/profile/' + this.user.uid + '/website']);
          }
      );
    } else {
      alert('Please enter name and description!');
    }
  }

  deleteWebsite() {
    this.webService.deleteWebsite(this.currWebsite.websiteId).subscribe(
        (data: any) => {
            this.router.navigate(['/profile/' + this.user.uid + '/website']);
        }
    );
  }

}
