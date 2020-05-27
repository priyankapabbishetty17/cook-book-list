import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Recipe} from '../model/recipe';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient) { }

  add(rec: Recipe): Observable<Recipe> {
    return this.httpClient.post<Recipe>(environment.urls.add, rec, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, PATCH, DELETE'
      })
    });
  }

  getRecipes(): Observable<Recipe> {
    return this.httpClient.get<Recipe>(environment.urls.getData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, PATCH, DELETE'
      })
    });
  }
}
