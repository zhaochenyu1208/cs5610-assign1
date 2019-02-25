import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('form') signupForm: NgForm;
  registerUsername: string;
  registerPassword: string;
  registerVerifiedPassword: string;
  user: User = {
    _id: '',
    username: '',
    password: '',
    firstName: '',
    lastName: ''
  };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onRegister() {
    this.user.username = this.registerUsername;
    this.user.password = this.registerPassword;
    this.userService.createUser(this.user);
    const loginUser = this.userService.findUserByCredentials(this.registerUsername, this.registerPassword);
    this.router.navigate(['/user', loginUser._id])
  }

  onCancel() {
    this.router.navigate(['login']);
  }
}
