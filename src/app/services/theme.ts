// src/app/services/theme.ts

// 1. Додаємо 'Inject', 'PLATFORM_ID' та 'isPlatformBrowser'
import { Injectable, Renderer2, RendererFactory2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class Theme { 
  private renderer: Renderer2;
  private currentTheme: 'light' | 'dark' = 'light'; // Встановлюємо значення за замовчуванням
  private isBrowser: boolean; // Прапорець, що ми у браузері

  constructor(
    rendererFactory: RendererFactory2,
    // 2. "Впроваджуємо" PLATFORM_ID, щоб перевірити середовище
    @Inject(PLATFORM_ID) private platformId: Object 
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    
    // 3. Перевіряємо, чи ми у браузері
    this.isBrowser = isPlatformBrowser(this.platformId);

    // 4. Виконуємо код localStorage ТІЛЬКИ якщо це браузер
    if (this.isBrowser) {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
      this.currentTheme = savedTheme || 'light';
      this.setTheme(this.currentTheme);
    }
  }

  toggleTheme() {
    // Цей метод викликається кліком, тому ми 100% у браузері,
    // але перевірка у setTheme не завадить
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  private setTheme(theme: 'light' | 'dark') {
    this.currentTheme = theme;

    // 5. Також захищаємо цей код
    if (this.isBrowser) {
      localStorage.setItem('theme', theme);
      if (theme === 'dark') {
        this.renderer.addClass(document.body, 'dark-theme');
      } else {
        this.renderer.removeClass(document.body, 'dark-theme');
      }
    }
  }

  getCurrentTheme() {
    return this.currentTheme;
  }
}