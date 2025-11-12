// src/app/components/navbar/navbar.ts

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Потрібен для *ngIf

// 1. Виправляємо імпорт, щоб він відповідав назві класу 'Theme'
import { Theme } from '../../services/theme';

@Component({
  selector: 'app-navbar',
  standalone: true, // <--- 2. ВАЖЛИВО: Додайте 'standalone: true'
  imports: [
    RouterLink,
    CommonModule // <--- 3. Додайте CommonModule сюди
  ],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent { // <--- 4. Переконайтеся, що клас називається 'NavbarComponent'

  // 5. Використовуємо 'Theme' як тип
  constructor(public themeService: Theme) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}