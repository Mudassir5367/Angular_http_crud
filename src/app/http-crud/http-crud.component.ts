import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-http-crud',
  templateUrl: './http-crud.component.html',
  styleUrls: ['./http-crud.component.scss'],
})
export class HttpCrudComponent implements OnInit {
  constructor(public crudService: CrudService) {}
  allPostData: any = [];
  ngOnInit(): void {
    this.crudService.getPostData().subscribe((data: any) => {
      console.log('data', data);
      this.allPostData = data;
    });
  }

  submit(data:any){
    console.log('data: ', data);
    this.allPostData.push(data)

    
  }

  deletePost(id: any,i:any) {
    this.allPostData.forEach((element:any)=>{
      if(element.id == id){
        // console.log('running',element.id)
        this.allPostData.splice(i,1)
      }
    })
    
  }
  edit(){

  }

}
