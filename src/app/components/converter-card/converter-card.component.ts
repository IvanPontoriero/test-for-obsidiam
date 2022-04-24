import { Component } from '@angular/core';

@Component({
  selector: 'app-converter-card',
  templateUrl: './converter-card.component.html',
  styleUrls: ['./converter-card.component.css']
})
export class ConverterCardComponent {

  public inputCurrency: string;
  public outputCurrency: string;
  public inputLogo: string;
  public outputLogo: string;
  public inputValue: number;
  public outputValue: number;
  switch: boolean;

  constructor() { 
    this.inputCurrency = 'USDT',
    this.outputCurrency = 'BTC',
    this.inputLogo = '../../assets/tether-usdt-logo.png',
    this.outputLogo = '../../assets/bitcoin-logo.png',
    this.inputValue = 0;
    this.outputValue = 0;
    this.switch = false;
  }

  currencyConvert(event: any) {
    if(!this.switch) {
      this.inputValue = event.target.value;
      this.outputValue = this.inputValue / 60000;
    } else {
      this.inputValue = event.target.value;
      this.outputValue = this.inputValue * 60000;
    }    
  }

  switchCurrency(event: any) {
    event.preventDefault();
    this.switch = !this.switch;
  }
}
