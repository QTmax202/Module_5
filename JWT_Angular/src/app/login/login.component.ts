import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../service/authentication.service";
import {first} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    gmail: new FormControl('',[Validators.required, Validators.min(10), Validators.max(20)]),
    password: new FormControl('',[Validators.required, Validators.min(5), Validators.max(12)])
  });

  returnUrl?: string;
  adminUrl?: string;
  error = '';
  loading = false;
  submitted = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
    console.log(this.authenticationService.currentUserValue);
  }


  ngOnInit(): void {
    const {returnUrl: returnUrl1} = this.activatedRoute.snapshot.queryParams;
    this.returnUrl = returnUrl1 || '/';
    this.adminUrl = '/admin';
  }

  login() {
    this.submitted = true;
    this.loading = true;
    this.authenticationService.login(this.loginForm.value.gmail, this.loginForm.value.password)
      .pipe(first())
      .subscribe(
        data => {
          if (data.token != undefined){
            localStorage.setItem('ACCESS_TOKEN', data.token);
            localStorage.setItem('ROLE', data.roles[0].authority);
            localStorage.setItem('EMAIL', data.email);
            if (data.roles[0].authority == "ROLE_ADMIN") {
              this.router.navigate([this.adminUrl])
            } else {
              this.router.navigate([this.returnUrl]);
            }
          } else {
            alert("Tài khoản của bạn đã bị khoá hoặc sai mật khẩu!");
            this.loading = false;
          }
        },
        error => {
          alert("Tài khoản của bạn đã bị khoá hoặc sai mật khẩu!");
          this.loading = false;
        });
  }

}
