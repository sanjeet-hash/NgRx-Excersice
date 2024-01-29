import { Component, Inject, inject } from '@angular/core';
import { MatModule } from '../../materialModule/mat.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { appStateModel } from '../../shared/store/globle/appState.model';
import { FormControl, FormGroup } from '@angular/forms';
import { blogModel } from '../../shared/store/blog/blog.model';
import { Store } from '@ngrx/store';
import { addBlog, updateBlog } from '../../shared/store/blog/blog.action';
import { getBlogByID } from '../../shared/store/blog/blog.selector';

@Component({
  selector: 'app-add-blog',
  standalone: true,
  imports: [MatModule],
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.scss',
})
export class AddBlogComponent {
  constructor(
    private dialogRef: MatDialogRef<AddBlogComponent>,
    private store: Store<appStateModel>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  addBlogForm: any = FormGroup;
  pagetitle = '';
  ediBlogId = 0;
  editData!: blogModel;

  ngOnInit() {
    this.addBlogForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl(''),
    });

    this.pagetitle = this.data.title;
    if (this.data.isEdit) {
      this.ediBlogId = this.data.id;
      this.store.select(getBlogByID(this.ediBlogId)).subscribe((res) => {
        this.editData = res;
        this.addBlogForm.setValue({
          id: this.editData.id,
          title: this.editData.title,
          description: this.editData.description,
        });
      });
    }
  }

  saveBlogs() {
    const _blogInput: blogModel = {
      id: 0,
      title: this.addBlogForm.value.title,
      description: this.addBlogForm.value.description,
    };
    if (this.data.isEdit) {
      _blogInput.id=this.addBlogForm.value.id as number
      this.store.dispatch(updateBlog({ blogInput: _blogInput }));

    } else {
      this.store.dispatch(addBlog({ blogInput: _blogInput }));
    }
    this.closePopup();
  }

  closePopup() {
    this.dialogRef.close();
  }
}
