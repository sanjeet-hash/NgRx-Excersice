import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { blogModel, blogs } from '../../shared/store/blog/blog.model';
import { getBlog, getBlogInfo } from '../../shared/store/blog/blog.selector';
import { MatModule } from '../../materialModule/mat.module';
import { appStateModel } from '../../shared/store/globle/appState.model';
import { MatDialog } from '@angular/material/dialog';
import { AddBlogComponent } from '../add-blog/add-blog.component';
import { deleteBlog, loadBlog } from '../../shared/store/blog/blog.action';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [MatModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent {
  constructor(private store: Store<appStateModel>,private dialog:MatDialog) {}

  blogList!: blogModel[];
  blogInfo!:blogs
 
  ngOnInit() {
    this.store.dispatch(loadBlog())
    this.store.select(getBlogInfo).subscribe((item) => {
      // this.blogList = item;
      this.blogInfo=item
    });
  }
  
  addBlog(){
this.openPopup(0,'add blog',false)
  }

  openPopup(id:number,title:string,isEdit:boolean){
    this.dialog.open(AddBlogComponent,{
      width:'40%',
      data:{
        id:id,
        title:title,
        isEdit:isEdit
      }
    })
  }

  onEdit(id:any){
    this.openPopup(id,'edit blog',true);

  }
  onDelet(id:any){
   if(confirm('Are you sure want to delete')){
    this.store.dispatch(deleteBlog({id:id}))
   }
  }
}
