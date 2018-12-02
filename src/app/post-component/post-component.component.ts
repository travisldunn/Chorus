import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {

  posts: any = [''];

  getColor(speaker) {
   switch (speaker) {
     case 'Cust':
       return 'cust circle';
     case 'Rep':
       return 'rep circle'
   }
 }

 isActive(cur, past){
   if(cur === past){
     return 'no';
   }

 }

  constructor(private http: HttpClient) {
    this.http.get('posts')
      .subscribe(response => this.posts = response);
  }

  ngOnInit() {
  }

}
