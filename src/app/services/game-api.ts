// src/app/services/game-api.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class GameApi { 

  private apiKey = '377915ebf0de4a63bd6e3760c310d9ca'; 
  private baseUrl = 'https://api.rawg.io/api';

  constructor(private http: HttpClient) { }

  getNewReleases(): Observable<any> { 

    const todayStr = new Date().toISOString().split('T')[0];
    
    
    const url = `${this.baseUrl}/games?dates=2020-01-01,${todayStr}&ordering=-metacritic&genres_exclude=51&key=${this.apiKey}&exclude_adult=true&page_size=80`;

    

    return this.http.get(url);
  }
}