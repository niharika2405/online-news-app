import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/user.model';
import { UserAuth } from 'src/userAuth.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  userAuth = new UserAuth
  ngOnInit(): void {
  }

  loginValidate(regForm:NgForm)
  {

    if(regForm.valid)
    {

      
this.userService.loginUser(this.userAuth).subscribe(

  data=>{
    if(data==null)
    {
    alert('invalid user name or password ')
    }
    else{
      alert('welcome to news application ')
      let user=new User();
        user=data;

        localStorage.setItem('user',JSON.stringify(user));

      this.router.navigate(['/news',this.userAuth.emailId])
    }
  },
  error=>{
    console.log(error)
  }
  
  )

    }
    else
    {
      alert('something went wrong');
    }

  }


}
