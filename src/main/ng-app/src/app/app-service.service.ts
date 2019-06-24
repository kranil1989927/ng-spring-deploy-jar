import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  getDetails(): Observable<any> {
    //return this.http.get('http://localhost:8866/details');
    return this.http.get('http://localhost:8080/store/author');
  }
}
