import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { blogModel } from './store/blog/blog.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgrxService {

  constructor(private http:HttpClient) { }

  getAllBlog():Observable<blogModel[]>{
    return this.http.get<blogModel[]>("http://localhost:3000/Blogs")
  }

 
}
