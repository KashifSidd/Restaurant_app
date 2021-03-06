import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router} from '@angular/router'
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  formData: FormGroup;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
     this.formData = new FormGroup({
        userName: new FormControl("admin"),
        password: new FormControl("admin"),
     });
  }

  onClickSubmit(data: any) {
     this.userName = data.userName;
     this.password = data.password;

     this.authService.login(this.userName, this.password)
        .subscribe( data => { 
           console.log("Is Login Success: " + data); 
     
          if(data) this.router.navigate(['/home'])
          else alert('Invalid Login Creds')
     });
  }
  }


