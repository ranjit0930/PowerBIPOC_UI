import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  @ViewChild('f',{static: true}) loginForm: NgForm;
  constructor(private sharedService:SharedService,
    private authenticationService: AuthenticationService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password)
            .subscribe(
                data => {
                  console.log("data"+JSON.stringify(data));
                  console.log("this.route")
                  this.sharedService.setAccessToken(data['token']);
                  this.router.navigate(['./login/powerbi']);
                },
                error => {
                  alert("Invalid Username or Password!!")
                });
  }
  }


