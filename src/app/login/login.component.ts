import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  constructor(private sharedService:SharedService,
    private authenticationService: AuthenticationService,private route:ActivatedRoute,private router:Router){

  }
  ngOnInit(){

    this.loginForm = new FormGroup({
      'username': new FormControl(null,[Validators.required]),
      'password': new FormControl(null,[Validators.required])
  });
}
onSubmit(){
  this.authenticationService.login(this.loginForm.get('username').value, this.loginForm.get('password').value)
            .subscribe(
                data => {
                  console.log("data"+JSON.stringify(data));
                  console.log("this.route")

                  this.sharedService.setAccessToken(data['token']);
                  this.router.navigate(['powerbi'],{relativeTo:this.route});
                },
                error => {
                  alert("Invalid Username or Password!!")
                });
  }

}
