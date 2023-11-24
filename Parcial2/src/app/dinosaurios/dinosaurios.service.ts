import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/enviroment'
import { Observable } from 'rxjs';
import { Dinosaurios } from './dinosaurios';


@Injectable({
  providedIn: 'root'
})
export class DinosauriosService {
  private apiUrl = environment.baseUrl
constructor(private http: HttpClient) { }

getDinosuarios(): Observable<Dinosaurios[]>{
  return this.http.get<Dinosaurios[]>(this.apiUrl);
}
}
