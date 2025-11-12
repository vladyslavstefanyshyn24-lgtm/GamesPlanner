// src/app/services/game-api.spec.ts
import { TestBed } from '@angular/core/testing';

// 1. ПОТРІБНО ІМПОРТУВАТИ ЦЕЙ МОДУЛЬ
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GameApi } from './game-api';

describe('GameApi', () => {
  let service: GameApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // 2. ДОДАЄМО HttpClientTestingModule В 'imports'
      // Це "імітує" HttpClient для тестів, 
      // щоб наш сервіс не намагався зробити реальний запит
      imports: [HttpClientTestingModule] 
    });
    service = TestBed.inject(GameApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});