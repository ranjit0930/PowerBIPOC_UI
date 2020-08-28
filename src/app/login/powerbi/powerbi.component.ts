import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-powerbi',
  templateUrl: './powerbi.component.html',
  styleUrls: ['./powerbi.component.css']
})
export class PowerbiComponent implements OnInit {

  constructor(private sharedService:SharedService,private route:ActivatedRoute,private router:Router) { }
  allowEdit:Boolean;
  title="POWER BI POC"
  accessToken:String;

  getAccessToken(){
    return this.accessToken;
  }
  ngOnInit() {
    this.accessToken = this.sharedService.getAccessToken();
    // this.accessToken = this.route.snapshot.paramMap.get('token');
    console.log("POWERBI"+this.accessToken);
    // this.route.params
    // .subscribe(params => {
    //   console.log("ranjit");
    // });
    
    console.log("REached>?>?>?>?>?>?");
    // this.route.queryParams.subscribe(
    //   (queryParams: Params)=>{
    //     console.log("Ranjit")
    //       this.allowEdit = queryParams['allowEdit'] === '1'? true: false;
    //   }
    // )
  }

  onLogout(){
    this.sharedService.accessToken = null;
    this.router.navigate(["./loginUser"]);
  }

}