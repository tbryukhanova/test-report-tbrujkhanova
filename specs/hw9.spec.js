//https://airportgap.dev-tester.com
//Используя апи провайдер и контроллеры напишите набор функций проверок для сервиса. 
//Первый тест - положительный. 
//Второй тест - набор параметризированных тестов. 
//Третий тест - проверяет права доступа к точке без api_key

import api from '../framework/services';
import fetch from 'node-fetch';
import supertest from 'supertest';

describe('Минифреймворк', () => {
  test('Positive test', async () => {
    const id = "5362";
    const auth = "Bearer Xi1fRurQWuvBAXqQiJt4atpq"
    const response = await api().Favorites().idFavoritesWithoutApikey(id, auth);
    const data = await response.json();
    expect(response.status).toEqual(200);
  }); 

  test('Test set with parameters', async () => {
    const idSet = ["0", "5361", "1111", "9999"];
    const auth = "Bearer Xi1fRurQWuvBAXqQiJt4atpq"
    for (const id of idSet){
      const response = await api().Favorites().idFavoritesWithoutApikey(id, auth);
      const data = await response.json();
      expect(response.status).toEqual(404);
    }  
  }); 

  test('Negative test', async () => {
    const id = "5362";
    const response = await api().Favorites().idFavoritesWithoutApikey(id);
    const data = await response.json();
    expect(response.status).toEqual(401);
  }); 
  
});