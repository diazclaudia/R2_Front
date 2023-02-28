import { Component, EventEmitter,  OnInit, Output} from '@angular/core';
import { FormBuilder, NgForm, UntypedFormGroup, Validators } from "@angular/forms";
import { Fibonacci } from '../dto/fibonacci';
import { FibonacciService } from '../fibonacci-service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})

export class FibonacciComponent {
  info:Fibonacci | undefined
  form: UntypedFormGroup;
  rows: number;
  loginResult:string
  logoutResult:string

  constructor(
    public fibonacciService: FibonacciService,
    private formBuilder: FormBuilder
    ) {
      this.form = this.formBuilder.group({
        rows: [""],
        cols: [""],
      });
    }


    fibonacci(f:NgForm){
      console.log(f.value)
      this.fibonacciService
        .fibonacci(f.value.rows,f.value.cols)
        .subscribe((data) => {
          this.info = data;
        });
    }

    login(f:NgForm){
      console.log(f.value)
      this.fibonacciService
        .login(f.value.user,f.value.pass)
        .subscribe((data) => {
          this.loginResult = data;
          console.log(this.loginResult)
        });
    }

    logout(){
      this.fibonacciService
        .logout()
        .subscribe((data) => {
          this.logoutResult = data;
          console.log(this.logoutResult)
          setTimeout(() => { location.reload(); }, 1000);
        });
    }

}
