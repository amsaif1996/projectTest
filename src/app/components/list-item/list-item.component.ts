import { Component, OnInit } from '@angular/core';
import {AuthorService} from "../../service/author/author.service";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
authorList:any[];
favAuthorList:any[];
limit: number;
skip: number;

  constructor(
    private authorService: AuthorService
  ) {
    this.authorList=[];
    this.favAuthorList=[];
    this.limit=10;
    this.skip=0;
  }

  ngOnInit(): void {
    this.loadData(this.limit,this.skip);
  }

  loadData(limit:number,skip:number){
    this.authorService.getAuthorList(limit,skip).subscribe({
      next: (data) => {
        debugger
        this.authorList=data.results;
        this.skip=skip;
      },
      complete: () => {
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  statusChange(index:number){
    console.log(index);
    if (this.authorList[index].status === true){
      this.authorList[index].status=false;
    }else {
      this.authorList[index].status=true
    }
    console.log(this.authorList[index]);

  }

}
