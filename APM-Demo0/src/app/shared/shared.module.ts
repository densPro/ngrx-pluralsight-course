import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BmxButtonComponent } from './bmx-button/bmx-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BmxButtonComponent
  ],
  declarations: [BmxButtonComponent]
})
export class SharedModule { }
