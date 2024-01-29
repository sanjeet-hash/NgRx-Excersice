import { Injectable } from '@angular/core';
import { Actions, act, createEffect, ofType } from '@ngrx/effects';
import { NgrxService } from '../../ngrx.service';
import { addBlog, addBlogSuccess, add_BLog, loadBlogFail, loadBlogSuccess, load_Blog } from './blog.action';
import { EMPTY, catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class blogEffect {
  constructor(private actions$: Actions, private _service: NgrxService) {}

  _blog = createEffect(() =>
    this.actions$.pipe(
      ofType(load_Blog),
      exhaustMap((action) => {
        return this._service.getAllBlog().pipe(
          map((data) => {
            return loadBlogSuccess({blogList:data});
          }),
          catchError((err)=> of(loadBlogFail({errorText:err.message})))
        )
      })
    )
  );

  
}
