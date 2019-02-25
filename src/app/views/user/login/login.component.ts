import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('form') loginForm: NgForm;

  //properties
  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg: string = "Invalid username or password !";


  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
  }


  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    const inputUser = this.userService.findUserByUsername(this.username);
    const authenticatedUser = this.userService.findUserByCredentials(this.username, this.password);

    if (inputUser && this.password == inputUser.password && authenticatedUser) {
      this.router.navigate(['/user', authenticatedUser._id]);
    } else {
      this.errorFlag = true;
    }
  }
}
