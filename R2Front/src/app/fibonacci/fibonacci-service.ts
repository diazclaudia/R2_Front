import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Fibonacci } from './dto/fibonacci';


@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private apiUrl:string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  fibonacci(rows:number, cols:number): Observable<Fibonacci>{
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })

    return this.http.post<Fibonacci>(`${this.apiUrl}/spiral?rows=${rows}&cols=${cols}`,null,{headers:headers});
  }

  login(user:string, pass:string): Observable<any>{
    const headers = new HttpHeaders({
      'user':user,
      'pass':pass
    })

    return this.http.post<any>(`${this.apiUrl}/login`,null,{headers:headers});
  }

  logout(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/logout`);
  }
}
