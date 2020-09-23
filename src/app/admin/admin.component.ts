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
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	
	public userdataurl:string="";
	public userlistdata:any;
	public url :string=global.url;
	public deleteuserurl:string="";
	public deleteuserlistdata:any;
	public ToUpdatetheStatus:string="";

  constructor(private http: HttpClient,public _http: Http,private route: ActivatedRoute,private router: Router) { 
  
			this.userdataurl= global.url+"?Choice=AllUsers";
				console.log(this.userdataurl);
				this.http.get(this.userdataurl).subscribe(userdataurllist => {
			   this.userlistdata=userdataurllist;
			  
			   });
  
  }


  ngOnInit() {
  }
  
  DeleteRow(x){
	  //alert(x.U_NAME);
	  
				this.deleteuserurl= global.url+"?Choice=DeleteUser&email="+x.U_EMAIL;
				console.log(this.deleteuserurl);
				this.http.get(this.deleteuserurl).subscribe(deleteuserlist => {
			   this.deleteuserlistdata=deleteuserlist;
			   
			   this.userdataurl= global.url+"?Choice=AllUsers";
				console.log(this.userdataurl);
				this.http.get(this.userdataurl).subscribe(userdataurllist => {
			   this.userlistdata=userdataurllist;
			  
			   });
			  
			   });
	  
  }
  
  EditSave(x){
	  
	  let urlSearchParams = new URLSearchParams();
	urlSearchParams.append('Choice','UpdateStatus');
	urlSearchParams.append('data', JSON.stringify(x));
	
	this._http.post(this.url,urlSearchParams).map(res => res.json()).subscribe(parseddata => {
		console.log("parseddata "+JSON.stringify(parseddata));
		this.ToUpdatetheStatus=parseddata;

		
	});

	  
  }
  
  LogOut(){
this.router.navigate(['/admlogin']);	
}

}
