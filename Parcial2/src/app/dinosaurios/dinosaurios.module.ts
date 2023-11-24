import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinosauriosComponent } from './dinosaurios.component';
import { DinosauriosDetailComponent } from './dinosaurios-detail/dinosaurios-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DinosauriosComponent, DinosauriosDetailComponent],
  exports : [DinosauriosComponent, DinosauriosDetailComponent]
})
export class DinosauriosModule { }

