// src/app/pages/wishlist/wishlist.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Для *ngIf, *ngFor

// 1. Імпортуємо наш сервіс та картку
import { ListManager } from '../../services/list-manager';
import { GameCard } from '../../components/game-card/game-card';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  
  // 2. Додаємо CommonModule та GameCard
  imports: [ CommonModule, GameCard ], 
  
  templateUrl: './wishlist.html',
  styleUrls: ['./wishlist.scss']
})
export class Wishlist implements OnInit { // <-- Назва класу 'Wishlist'
  
  public wishlistGames: any[] = []; // Масив для ігор

  // 3. "Впроваджуємо" сервіс списків
  constructor(private listManager: ListManager) {}

  // 4. При завантаженні сторінки, отримуємо список з сервісу
  ngOnInit(): void {
    this.wishlistGames = this.listManager.getWishlist();
  }

  // --- ДОДАНО НОВИЙ МЕТОД ---
  handleGameDeleted(gameId: number) {
    // Оновлюємо локальний масив, щоб UI оновився миттєво
    this.wishlistGames = this.wishlistGames.filter(game => game.id !== gameId);
  }
  // --- КІНЕЦЬ НОВОГО МЕТОДУ ---
}