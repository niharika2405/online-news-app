import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private router:Router,private userSrv:UserService) { }

  ngOnInit(): void {
    this.emailId=localStorage.getItem('emailId')+''
    this.userPassword=localStorage.getItem('Password')+''
    this.confirmPassword=localStorage.getItem('Cpass')+''
  }

  emailId = ''
  userPassword = ''
  confirmPassword = ''

  user = new User()
  mypic = ''
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

  redirect(){
    this.userSrv.updateProfileSrv(this.user).subscribe(
      data=>{
        if(data == null){
          alert("Something went wrong")
        }
        else{
          alert('Data Updated Succesfully')
          this.router.navigate(['news/:emailId'])    
        }
      },
      error=>{
        console.log(error)
      }
    )

    
  }


}
