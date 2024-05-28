import { Component } from '@angular/core';
import { CurrencyConverterComponent } from '../currency-converter/currency-converter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CurrencyConverterComponent]
})
export class AppComponent {
  title = 'currency-converter';
}
