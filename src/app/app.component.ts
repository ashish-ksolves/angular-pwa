import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pwa';
  todos: {title: string, completed: string}[] = [];  
  users: {username: string, email: string}[] = [];

  constructor(private http: HttpClient){
    this.getTodos();
    this.postRequest();
    // this.getComments();
    this.getPosts();
  }

  getTodos () {
    this.http.get("https://jsonplaceholder.typicode.com/todos/").subscribe((res: any)=>{
      console.log(res);
      this.todos =res;
    });
  }

  postRequest() {
    this.http.post("https://jsonplaceholder.typicode.com/users/", {}).subscribe(res=>{
      console.log(res);
      // alert("POST SUCCEEDED!!!")
    }, err=>{
      console.log(err)
      // alert(err.message)

    });
  }

  getPosts() {
    this.http.get("https://jsonplaceholder.typicode.com/users/").subscribe((res: any)=>{
      console.log(res);
      // alert("POST IS HERE")
      this.users = res;
    }, err=>{
      console.log(err)
      // alert(err.message)

    });
  }  
  
  // getComments() {
  //   this.http.post("https://jsonplaceholder.typicode.com/posts/1/comments", {}).subscribe(res=>{
  //     console.log(res);
  //     // alert("POST COMMENTS IS HERE")
  //   }, err=>{
  //     console.log(err)
  //     // alert(err.message)

  //   });
  // }
}
