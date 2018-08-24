import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../../model/model.user";
import {AuthService} from "../../services/auth.service";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User=new User();
  errorMessage:string;
  public form: FormGroup;
  constructor(private fb: FormBuilder,private authService :AuthService, private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group ( {
      uname: [null , Validators.compose ( [ Validators.required ] )] , password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

  onSubmit() {
      
       this.authService.logIn(this.user)
      .subscribe(data=>{
        this.router.navigate(['/dashboards/dashboard1']);
        },err=>{
        this.errorMessage="error :  Username or password is incorrect";
        }
      )
    //this.router.navigate ( [ '/dashboards/dashboard1' ] );
  }
        
 

}
