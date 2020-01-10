import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dragon } from '../models/dragon';
import { api } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  constructor(private httpClient: HttpClient) { }

  getDragons(): Observable<Dragon[]>{
    return this.httpClient.get<Dragon[]>(api.url);
  }

  getDragon(id): Observable<Dragon>{
    return this.httpClient.get<Dragon>(api.url + id);
  }

  updateDragon(dragon: Dragon): Observable<Dragon>{
    return this.httpClient.put<Dragon>(api.url + dragon.id, dragon);
  }
}
