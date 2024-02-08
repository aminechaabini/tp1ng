import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  url = 'https://apilb.tridevs.net/api/Users'
  constructor(
    private http : HttpClient
  ) { }
  login(credentials : any){
    return this.http.post(this.url, credentials)
  }
}
