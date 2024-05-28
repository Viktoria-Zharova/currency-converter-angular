import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ExchangeRates {
  Valute: { [key: string]: Currency };
}

interface Currency {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://www.cbr-xml-daily.ru/daily_json.js';

  constructor(private http: HttpClient) { }

  getExchangeRates(): Observable<ExchangeRates> {
    return this.http.get<ExchangeRates>(this.apiUrl);
  }
}
