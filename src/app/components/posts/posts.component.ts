import { Component, OnInit } from '@angular/core';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
  
  apiData : any;
  constructor(private apiService: ApiHandlerService) {}

  ngOnInit(): void {
      this.apiService.fetchData().subscribe((res => {
        this.apiData = res;
        console.log(res);
      }))
  }

  

}
