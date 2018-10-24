import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InforService {

  constructor(private http: Http) { }

  getUser(){

    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=pretoria&appid=3fe9e88e97712dcf566bc74a57238f9b').pipe(map(res =>{
      return res.json()
    }));
  }
}
