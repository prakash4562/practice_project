import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient) { }

  createUser(data: any) {
    return this.http.post('URL', data);
  }

  getUserDetails() {
    return this.http.get('URL');
  }
}
