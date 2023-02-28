import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FibonacciComponent } from './spiral/fibonacci.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{
  path: '',
  component: FibonacciComponent
}];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [
    FibonacciComponent
  ],
  exports: [
    FibonacciComponent,
    RouterModule
  ]
})
export class FibonacciModule { }
