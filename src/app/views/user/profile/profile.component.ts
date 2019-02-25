import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId: string;
  username: string;
  user: User;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {

  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.userId = params['uid'];
        }
      );
    this.user = this.userService.findUserById(this.userId);
    this.username = this.user['username'];
  }

  onUpdateUser() {
    this.userService.updateUser(this.userId, this.user);
    alert("successfully update your profile");
  }

}
