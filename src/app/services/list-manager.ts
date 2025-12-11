// src/app/services/list-manager.ts
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ListManager { // <--- Переконайтеся, що клас 'ListManager'

  private wishlist: any[] = [];
  private playedList: any[] = [];
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    if (this.isBrowser) {
      this.wishlist = JSON.parse(localStorage.getItem('my_wishlist') || '[]');
      this.playedList = JSON.parse(localStorage.getItem('my_playedlist') || '[]');
    }
  }
  
  addToWishlist(game: any) {
    if (!this.isBrowser || this.isGameInList(this.wishlist, game.id)) {
      return; 
    }
    this.wishlist.push(game);
    this.saveLists();
    alert(`'${game.name}' додано до Бажаного!`);
  }

  addToPlayed(game: any) {
    if (!this.isBrowser || this.isGameInList(this.playedList, game.id)) {
      return;
    }
    this.playedList.push(game);
    this.saveLists();
    alert(`'${game.name}' додано до Зіграних!`);
  }

  getWishlist() {
    return this.wishlist;
  }

  getPlayedList() {
    return this.playedList;
  }

  // --- ОСЬ ЦІ МЕТОДИ, ЯКИХ НЕ ВИСТАЧАЄ ---
  removeFromWishlist(gameId: number) {
    if (!this.isBrowser) return;

    this.wishlist = this.wishlist.filter(game => game.id !== gameId);
    this.saveLists();
    alert('Гру видалено зі Списку бажаного.');
  }

  removeFromPlayed(gameId: number) {
    if (!this.isBrowser) return;

    this.playedList = this.playedList.filter(game => game.id !== gameId);
    this.saveLists();
    alert('Гру видалено зі списку Зіграних.');
  }
  // --- КІНЕЦЬ МЕТОДІВ ---

  private saveLists() {
    if (this.isBrowser) {
      localStorage.setItem('my_wishlist', JSON.stringify(this.wishlist));
      localStorage.setItem('my_playedlist', JSON.stringify(this.playedList));
    }
  }

  private isGameInList(list: any[], gameId: number): boolean {
    return !!list.find(g => g.id === gameId);
  }
}