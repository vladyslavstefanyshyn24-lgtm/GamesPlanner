// src/app/pages/played-list/played-list.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// 1. Імпортуємо сервіс та картку
import { ListManager } from '../../services/list-manager';
import { GameCard } from '../../components/game-card/game-card';

@Component({
  selector: 'app-played-list',
  standalone: true,

  // 2. Додаємо CommonModule та GameCard
  imports: [ CommonModule, GameCard ],

  templateUrl: './played-list.html',
  styleUrls: ['./played-list.scss']
})
export class PlayedList implements OnInit { // <-- Назва класу 'PlayedList'

  public playedGames: any[] = []; // Масив для ігор

  constructor(private listManager: ListManager) {}

  // 4. Отримуємо список ЗІГРАНИХ ігор
  ngOnInit(): void {
    this.playedGames = this.listManager.getPlayedList();
  }

  // --- ДОДАНО НОВИЙ МЕТОД ---
  handleGameDeleted(gameId: number) {
    // Оновлюємо локальний масив, щоб UI оновився миттєво
    this.playedGames = this.playedGames.filter(game => game.id !== gameId);
  }
  // --- КІНЕЦЬ НОВОГО МЕТОДУ ---
}