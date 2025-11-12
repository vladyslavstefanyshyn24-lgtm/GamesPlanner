
import { Routes } from '@angular/router';


import { Home } from './pages/home/home';
import { Wishlist } from './pages/wishlist/wishlist';
import { PlayedList } from './pages/played-list/played-list';

export const routes: Routes = [
  
  { 
    path: '', 
    component: Home
  },
  { 
    path: 'wishlist', 
    component: Wishlist
  },
  { 
    path: 'played', 
    component: PlayedList 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];