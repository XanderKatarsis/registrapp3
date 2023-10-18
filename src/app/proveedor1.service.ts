import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Proveedor1Service {

  constructor(public http:HttpClient) { 
    console.log('Hello Proveedor1Service Service')
  }

  obtenerdatos(){
    return this.http.get ('file:///C:/Users/nashi/Registrap/src/server/db.json')
  }
}
