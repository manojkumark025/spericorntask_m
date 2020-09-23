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
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	
	public userdata:any;
	public ImagePathDRV1:string="";
	public ImageDRV1:string="";
	public ImagePath=global.imagepath;
	public UCpassword:string="";
	public checkemailurl:string="";
	public checkemaildata:any;
	public Regurl:string="";
	public Regdata:any;

 constructor(private http: HttpClient,public _http: Http,private route: ActivatedRoute,private router: Router,private data: Data) {
console.log(JSON.stringify(this.data.storage));
	this.userdata=this.data.storage;
	this.ImagePathDRV1=this.ImagePath+this.userdata.U_PHOTO;
	//alert(JSON.stringify(this.userdata))
	 }


  ngOnInit() {
  }
  
   Edit(){
	 	if(this.userdata.U_NAME=="" || this.userdata.U_NAME==undefined){
			alert("Please enter Name");
			return;
		}
		if(this.userdata.U_EMAIL=="" || this.userdata.U_EMAIL==undefined){
			alert("Please enter email");
			return;
		}
		if(this.userdata.U_PASSWORD=="" || this.userdata.U_PASSWORD==undefined){
			alert("Please enter the password");
			return;
		}
		if(this.UCpassword=="" || this.UCpassword==undefined){
			alert("Please enter the Confirm password");
			return;
		}
		if(this.userdata.U_PASSWORD!=this.UCpassword){
		alert("Your Confirm password is incorrect");
		return;
	}
	
		this.checkemailurl= global.url+"?Choice=CheckEmail&email="+this.userdata.U_EMAIL;
		console.log(this.checkemailurl);
		this.http.get(this.checkemailurl).subscribe(checkemailurldata => {
	   this.checkemaildata=checkemailurldata;
	   
	     for(var i=0;i<this.checkemaildata.length;i++){
		   if(this.userdata.U_EMAIL==this.checkemaildata[i].U_EMAIL){
			   alert("Email already registered");
			   return;
		   }
		   else {
			   
			   this.Regurl= global.url+"?Choice=Edit&email="+this.userdata.U_EMAIL+"&pwd="+this.userdata.U_PASSWORD+"&name="+this.userdata.U_NAME+"&addr="+this.userdata.U_ADDRESS+"&photo="+this.userdata.U_PHOTO;
				console.log(this.Regurl);
				this.http.get(this.Regurl).subscribe(RegUserdata => {
			   this.Regdata=RegUserdata;
			   alert("Registered Successfully");
			   });
			   
			   return;
		   }
	   }
		
	   
		});

}

LogOut(){
this.router.navigate(['/login']);	
}

fileName = "";
    selectedFile = "";
    
   onFileSelected(event){

    let fileList: FileList = event.target.files;	
	  console.log(fileList);
       let file: File = fileList[0];		
	    console.log("file "+file);	
        console.log(file.name);		
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
		formData.append('Type', 'Img');
        let headers = new Headers();
        headers.append('enctype', 'multipart/form-data');
        headers.append('Accept', 'application/json');   
        let options = new RequestOptions({ headers: headers });		
        console.log("formData " +formData);		
        console.log("options " +options);
		
		// this._http.post(this.url,formData,options).map(res => res).subscribe(data => { 
		 this._http.post(global.imageurl,formData,options).map(res => res.json()).subscribe(data => { 		 
		 //console.log("img "+data._body);

		 this.ImageDRV1="";
	  	 
		 this.userdata.U_PHOTO=data.Filename;
			 //this.VisitorLogDriverDtl.Content.frmsecurity.TakePhotoDRV.Data1=data.Filename;
			 this.ImageDRV1=data.Filename;
			// alert(this.ImagePath);
			 this.ImagePathDRV1=this.ImagePath+this.ImageDRV1;
			 console.log(this.ImagePathDRV1);
		 
		 
		 });

   }

}
