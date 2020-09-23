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

@Component({
  selector: 'app-uregister',
  templateUrl: './uregister.component.html',
  styleUrls: ['./uregister.component.css']
})
export class UregisterComponent implements OnInit {

  public Uname:string="";
	public Uemail:string="";
	public Upassword:string="";
	public UCpassword:string="";
	public Uaddress:string="";
	public url:string="http://localhost/php/userdata/webservice.php";
	public Regurl:string="";
	public Regdata:any;
	public checkemailurl:string="";
	public checkemaildata:any;
	public EmailSuccess:string="";
	
  constructor(private http: HttpClient,public _http: Http,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
  }

 NewRegister(){
	 	if(this.Uname=="" || this.Uname==undefined){
			alert("Please enter Name");
			return;
		}
		if(this.Uemail=="" || this.Uemail==undefined){
			alert("Please enter email");
			return;
		}
		if(this.Upassword=="" || this.Upassword==undefined){
			alert("Please enter the password");
			return;
		}
		if(this.UCpassword=="" || this.UCpassword==undefined){
			alert("Please enter the Confirm password");
			return;
		}
		if(this.Upassword!=this.UCpassword){
		alert("Your Confirm password is incorrect");
		return;
	}
	
		this.checkemailurl= global.url+"?Choice=CheckEmail&email="+this.Uemail;
		console.log(this.checkemailurl);
		this.http.get(this.checkemailurl).subscribe(checkemailurldata => {
	   this.checkemaildata=checkemailurldata;
	   
	   for(var i=0;i<this.checkemaildata.length;i++){
		   if(this.Uemail==this.checkemaildata[i].U_EMAIL){
			   alert("Email already registered");
			   return;
		   }
		   else {
			   
			   this.Regurl= global.url+"?Choice=Register&email="+this.Uemail+"&pwd="+this.Upassword+"&name="+this.Uname+"&addr="+this.Uaddress;
				console.log(this.Regurl);
				this.http.get(this.Regurl).subscribe(RegUserdata => {
			   this.Regdata=RegUserdata;
			   alert("Registered Successfully");
			   this.Uname="";this.Uemail="";this.Uname="";this.Upassword="";this.Uaddress="";this.Uname="";
			   });
			  
			   return;
		   }
	   }
		
	   
		});

}

GotoLogin(){
	this.router.navigate(['/login']);
}

}
