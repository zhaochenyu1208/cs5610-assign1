import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;
  user: User = new User('', '', '', '', '', '');


    constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  updateUser() {
    this.userService.updateUser(this.user.uid, this.user).subscribe(
        (user: User) => {
          this.user = user;
            this.router.navigate(['/profile/', user.uid]);
        }
    );
    alert('Update successfully!');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.findUserById(params['uid']).subscribe(
          (user: User) => {
            this.user = user;
            // this.user = new User(user.uid, user.username, user.password, user.firstName, user.lastName, user.email);
          }
      );
    });
  }
}
