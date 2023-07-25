import { HttpClient,} from '@angular/common/http';
import { Component } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-http';
  post:any;

  obj:any = {
    id:101,
    title:"goto data from post request",
    body:"ABCDEFGHIJKLMN"
  }
  id:any


  constructor(
    private crudService:CrudService,
  ){}
  ngOnInit(){
    // Get request
// this.crudService.getData().subscribe((data)=>{
//   console.log('Get: ', data);
//   this.post = data;
// })

// Post Request
// this.crudService.getPostData(this.obj).subscribe((x=>{
//   console.log('Post: ', x);

// }));
// this.crudService.getData().subscribe((data)=>{
//   console.log(data);
//     this.post = data;
//   })

//     this.put()
//   }
//   put(){
//     this.crudService.putData(this.obj).subscribe((x)=>{
//       console.log('Put: ', x);

//     })
//   }

//   delete(){
// this.crudService.deleteData(this.id).subscribe(()=>{
//   this.id ='Delete Successful'
// })


// http-crud


  }
  }
