import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Http ,Response, Headers, RequestOptions} from '@angular/http';
import {HttpClientModule, HttpClient,HttpHeaders} from '@angular/common/http';

declare var swal: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	
	products: any = [];
	
	public Comptxt: string = "";
	public DeleteIcon: string = "";
	public txtBox: string = "";
	public CompRows : any[]=[];
	
  constructor(private http: HttpClient,public _http: HttpClientModule,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
	  
  }
  

    uLogin(){
		
	this.router.navigate(['/login']);
	  
	}
	
	aLogin(){
		
		this.router.navigate(['/admlogin']);
		
	}

}
