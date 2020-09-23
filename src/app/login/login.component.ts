import { Component, OnInit } from '@angular/core';
import {Http ,Response, Headers, RequestOptions} from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClientModule, HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Rx";
import { URLSearchParams } from "@angular/http";
import { catchError, map, tap } from 'rxjs/operators';
import * as global from '.././global';
import 'rxjs/add/operator/map';
import{Data} from '.././Providers/data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
	public Loginemail:string="";
	public Loginpwd:string="";
	public url:string="http://localhost/php/userdata/webservice.php";
	public loginurl:string="";
	public loginuserdata:any;
	
  constructor(private http: HttpClient,public _http: Http,private route: ActivatedRoute,private router: Router,private data: Data) { }

  ngOnInit() {
  }

 LoginBtn(){
	 	if(this.Loginemail=="" || this.Loginemail==undefined){
			alert("Please enter emailid");
			return;
		}
		if(this.Loginpwd=="" || this.Loginpwd==undefined){
			alert("Please enter the password");
			return;
		}
		
		
		
		this.loginurl= global.url+"?Choice=CheckUser&email="+this.Loginemail+"&pwd="+this.Loginpwd;
		this.http.get(this.loginurl).subscribe(Userdata => {
	   this.loginuserdata=Userdata;
	   if(this.loginuserdata.Status=='Y') {
		   this.data.storage=this.loginuserdata.Data;
		   this.router.navigate(['/user']);
	   }
	   else {
		   alert("Please check the credentials");
		   this.Loginemail="";
		   this.Loginpwd="";
	   }
	   
		});

}

Register(){
	this.router.navigate(['/uregister']);
}

BackBtn(){
	  this.router.navigate(['/home']);
  }

}
