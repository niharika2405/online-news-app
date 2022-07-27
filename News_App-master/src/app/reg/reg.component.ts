import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  user = new User

  ngOnInit(): void {
  }
  mypic='';

  redirectTologin(){
    this.router.navigate(["/login"])
  }

  uploadPic(fileIn:any)
  {

    let rdr=new FileReader();

  rdr.onload=(e:any)=>{
      let image=new Image();
      image.src=e.target.result;

      image.onload=rs=>{
        this.mypic=e.target.result;
      }
    };

    rdr.readAsDataURL(fileIn.target.files[0])
  }

  registerMe(regForm: { valid: any; }){
    this.user.pic=this.mypic
    console.log(this.user);

if(regForm.valid)
{

this.userService.registerUser(this.user).subscribe(

data=>{
  alert('user registered')
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

