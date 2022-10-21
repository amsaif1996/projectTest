import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(
    private httpClient: HttpClient,

  ) { }
  getAuthorList (limit:number,skip:number):Observable<any>{
    return this.httpClient.get(`https://api.quotable.io/authors?limit=`+limit+`&skip=`+skip);

  }
}
