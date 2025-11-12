// src/app/pages/home/home.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { GameApi } from '../../services/game-api';
import { GameCard } from '../../components/game-card/game-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    CommonModule, 
    GameCard 
  ], 
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit { 
  
  public games: any[] = [];
  public isLoading = true;
  public error: string | null = null;

  constructor(private gameApi: GameApi) {}

  ngOnInit(): void {
    this.gameApi.getNewReleases().subscribe({
      
      next: (response: any) => {

        // ---
        // ВИДАЛЕНО РУЧНИЙ ФІЛЬТР!
        // Тепер ми просто беремо список 'results' напряму.
        // ---
        this.games = response.results; 
        
        this.isLoading = false;
      },
      
      error: (err: any) => { 
        console.error('Помилка при завантаженні ігор:', err);
        this.error = 'Не вдалося завантажити ігри. Перевірте API-ключ або інтернет.';
        this.isLoading = false;
      }
    });
  }
}