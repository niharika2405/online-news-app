import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/Article.model';
import { Fav } from 'src/Fav.model';
import { User } from 'src/user.model';
import { FavService } from '../fav.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private router:Router,private userService:UserService,private atcrout:ActivatedRoute,private favServ:FavService) { }

  userName = ''

  ngOnInit(): void {

    let user= localStorage.getItem('user')+'';
    this.user=JSON.parse(user);
    
    this.getNewsHeadLines()
    this.atcrout.params.subscribe(
      data=>{
        this.userName=data['emailId']
      },
      error=>{
        console.log(error)
      }
    )
    
  }
 user = new User()
  change=1
  changefav=1

  articles:Article[]=[]
getNewsHeadLines(){
  this.change=1
  this.changefav=0
  this.userService.getHeadlines().subscribe(
    data=>{
      let news= JSON.parse(JSON.stringify(data));
      this.articles=[];
      for(let i=0; i< news.articles.length;i++ )
 {


let article=new Article();
article.author=news.articles[i].author;
article.description=news.articles[i].description;
article.title=news.articles[i].title;
article.url=news.articles[i].url;
article.urlToImage=news.articles[i].urlToImage;
this.articles.push(article);
 }

    },
    
    error=>{
      console.log(error);
    }
  )
}

fav = new Fav()
favs:Fav[]=[]

addToFav(article:Article){
  // this.favs.push(this.username,article.author,article.description,article.title,article.url,article.urlToImage);
 
  this.fav.userName=this.userName;
  this.fav.author=article.author;
  this.fav.description=article.description;
  this.fav.title=article.title;
  this.fav.url=article.url;
  this.fav.urlToImage=article.urlToImage;
  this.favs.push(this.fav);

 console.log(this.fav);
   this.favServ.addToFav(this.fav).subscribe(
     data=>{
       alert("Added to Fav")
     },
     error=>{
       console.log(error)
     }
   )

 }


showMyFav(){
  console.log(this.favs)

  this.change = 0
  this.changefav = 1
  this.favServ.show(this.userName).subscribe(
    data=>{
      this.favs=data  
    },
    error=>{
      console.log(error)
    }
  )
}



deleteFav(fav:Fav){
  
  this.favServ.delete(this.userName,fav.title).subscribe(
    data=>{
      alert("News is Deleted")
      this.showMyFav()
    },
    error=>{
      console.log(error)
    }
  )
}


updateProfile(){
  this.router.navigate(['news/:emailId/updateProfile'])
}


getSportsHeadLines(){

  this.change=1
  this.changefav=0
  this.userService.getSports().subscribe(
    data=>{
      let news= JSON.parse(JSON.stringify(data));
      this.articles=[];
      for(let i=0;i< news.articles.length;i++){
        let article=new Article();
        
        article.author=news.articles[i].author;
        article.description=news.articles[i].description;
        article.title=news.articles[i].title;
        article.url=news.articles[i].url;
        article.urlToImage=news.articles[i].urlToImage;
        this.articles.push(article);
      }

    },
    error=>{
      console.log(error)
    }
  )
}

getBusinessHeadLines(){

  return this.userService.getBusiness().subscribe(
    data=>{
      let news= JSON.parse(JSON.stringify(data));
      this.articles=[];
      for(let i=0;i< news.articles.length;i++){
        let article=new Article();
        
        article.author=news.articles[i].author;
        article.description=news.articles[i].description;
        article.title=news.articles[i].title;
        article.url=news.articles[i].url;
        article.urlToImage=news.articles[i].urlToImage;
        this.articles.push(article);
      }


    },
    error=>{
      console.log(error)
    }
  )

}

getHealthHeadLines(){

  return this.userService.getHealth().subscribe(
    data=>{
      let news= JSON.parse(JSON.stringify(data));
      this.articles=[];
      for(let i=0;i< news.articles.length;i++){
        let article=new Article();
        
        article.author=news.articles[i].author;
        article.description=news.articles[i].description;
        article.title=news.articles[i].title;
        article.url=news.articles[i].url;
        article.urlToImage=news.articles[i].urlToImage;
        this.articles.push(article);
      }

    },
    error=>{
      console.log(error)
    }
  )
}
  
search=''
getSearchHeadlines(){

  this.change=1
  this.changefav=0

  return this.userService.getSearch(this.search).subscribe(
    data=>{
      let news= JSON.parse(JSON.stringify(data));
      this.articles=[];
      for(let i=0;i< news.articles.length;i++){
        let article=new Article();
        
        article.author=news.articles[i].author;
        article.description=news.articles[i].description;
        article.title=news.articles[i].title;
        article.url=news.articles[i].url;
        article.urlToImage=news.articles[i].urlToImage;
        this.articles.push(article);
      }

    },
    error=>{
      console.log(error)
    }
  )


}

}


