import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../app/currency.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CurrencyConverterComponent implements OnInit {
  rates: any;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  amount: number = 1;
  result: number = 0;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getExchangeRates().subscribe(data => {
      this.rates = data.Valute;
    });
  }

  convert(): void {
    if (this.fromCurrency && this.toCurrency && this.amount) {
      const fromRate = this.rates[this.fromCurrency].Value;
      const toRate = this.rates[this.toCurrency].Value;
      this.result = this.amount * (fromRate / toRate);
    }
  }
}
