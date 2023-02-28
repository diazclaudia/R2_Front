import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
 ],
  imports: [
    BrowserModule,
    FibonacciModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
