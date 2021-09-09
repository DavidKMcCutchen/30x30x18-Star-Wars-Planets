import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planet, SwapiPagination } from "@workspace/api-interfaces";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


const BASE_URL = 'https://swapi.dev/api/';
const MODEL = 'planets';



@Injectable({
  providedIn: 'root'
})
export class PlanetsService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<Planet[]> {
    return this.http.get<SwapiPagination>(this.getUrl()).pipe(
      map((response) => response.results)
    );
  };

  getOne(id: string): Observable<Planet> {
    return this.http.get<Planet>(this.getUrlById(id))
  }

  private getUrl() {
    return `${BASE_URL}${MODEL}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }
}
