import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';



const material:any=[ 
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  FormsModule,
  MatDialogModule,
  ReactiveFormsModule,
  MatToolbarModule,
  MatIconModule,
  MatDividerModule
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...material,

  ],
  exports:[
    ...material
  ]
})
export class MatModule { }
