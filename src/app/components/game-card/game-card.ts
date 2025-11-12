// src/app/components/game-card/game-card.ts
// 1. Імпортуємо Output та EventEmitter
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListManager } from '../../services/list-manager';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-card.html',
  styleUrls: ['./game-card.scss']
})
export class GameCard {
  @Input() game: any;
  
  // 2. ДОДАЄМО "КОНТЕКСТ": 'browse', 'wishlist', or 'played'
  @Input() context: string = 'browse'; 

  // 3. ДОДАЄМО "ПОДІЮ": Картка повідомить батька, що гру видалено
  @Output() gameDeleted = new EventEmitter<number>();

  constructor(private listManager: ListManager) {}

  onAddToWishlist() {
    this.listManager.addToWishlist(this.game);
  }

  onAddToPlayed() {
    this.listManager.addToPlayed(this.game);
  }

  // 4. ДОДАЄМО НОВИЙ МЕТОД ДЛЯ ВИДАЛЕННЯ
  onDelete() {
    if (this.context === 'wishlist') {
      this.listManager.removeFromWishlist(this.game.id);
    } else if (this.context === 'played') {
      this.listManager.removeFromPlayed(this.game.id);
    }
    
    // 5. Повідомляємо батьківський компонент (wishlist.ts або played-list.ts)
    // про те, що гру видалено, щоб він оновив свій список
    this.gameDeleted.emit(this.game.id);
  }
}