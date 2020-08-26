import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  loginForm : FormGroup;
  disableFetchButton:true;
  constructor(private sharedService:SharedService,private authenticationService: AuthenticationService,private route:ActivatedRoute,private router:Router){

  }

  ngOnInit(){
    this.loginForm = new FormGroup({
      'username': new FormControl(null,[Validators.required]),
      'password': new FormControl(null,[Validators.required])
  });
}

getDisableStatus(){
  return this.disableFetchButton;}
onClick(){
  this.disableFetchButton = true;
}
onSubmit(){
  this.authenticationService.login(this.loginForm.get('username').value, this.loginForm.get('password').value)
            .subscribe(
                data => {
                  console.log("data"+JSON.stringify(data));
                  console.log("this.route")

                  this.sharedService.setAccessToken(data['token']);
                  this.router.navigate(['/powerbi']);
                },
                error => {
                  alert("Invalid Username or Password!!")
                    // this.alertService.error(error);
                    // this.loading = false;
                });
  }
}
