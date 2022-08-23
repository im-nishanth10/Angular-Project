import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient:HttpClient) { }
  getEmployeeRec(){
    return this.httpClient.get('https://reqres.in/api/users?page=2')
  }
}
