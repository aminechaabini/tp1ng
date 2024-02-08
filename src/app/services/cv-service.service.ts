import { Injectable } from '@angular/core';
import { Cv } from '../models/cv'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvServiceService {
  private cvs : Cv[];
  url = 'https://apilb.tridevs.net/api/personnes/';
  constructor(private http: HttpClient) { 
    this.cvs= [
      new Cv(1, "chaabini", "amine", "ac.jpg"),
      new Cv(2, "gates", "bill", "bg.jpg"),
    ];
  }
  getCvs(): Observable<Cv[]>{
    return this.http.get<Cv[]>(this.url);
  }
  getLocalCvs(): Cv[]{
    return this.cvs;
  }
  deleteCv(id : number){
    return this.http.delete(`${this.url}${id}`);
  }
}
