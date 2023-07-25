import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  allPostData: any;
  constructor(private http: HttpClient) {}

  //  getData(){
  //  return this.http.get('https://jsonplaceholder.typicode.com/posts')
  //  }
  //  getPostData(obj:any){
  //   return this.http.post('https://jsonplaceholder.typicode.com/posts',obj)
  //  }
  //  putData(obj:any){
  //   return this.http.put('https://jsonplaceholder.typicode.com/posts',obj)
  //  }
  //  deleteData(id:any){
  // return this.http.delete('https://jsonplaceholder.typicode.com/posts',id)
  //  }

  // http-crud

  getPostData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }


}
