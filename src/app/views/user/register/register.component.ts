import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;
  username: string;
  password: string;
  v_password: string;
  firstName: string;
  lastName: string;
  email: string;
  errorFlag: boolean;
  errorMsg = 'Password mis-matching !';

  constructor(private userService: UserService, private router: Router) {  this.errorFlag = false; }

  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.v_password = this.registerForm.value.v_password;
    this.firstName = this.registerForm.value.firstName;
    this.lastName = this.registerForm.value.lastName;
    this.email = this.registerForm.value.email;

    if (this.v_password === this.password) {
      const user: User = new User(Math.random() + '', this.username, this.password, this.firstName, this.lastName, this.email);

      this.userService.createUser(user).subscribe(
          (data: any) => {
            if (data.message === 'User is already exist!') {
              alert('User is already exist! Please use a new username!');
            } else {
              this.router.navigate(['/profile/' + user.uid]);
            }
          }
      );
    } else {
      alert('Password needs to be verified!');
    }
  }

  ngOnInit() {
  }

}
