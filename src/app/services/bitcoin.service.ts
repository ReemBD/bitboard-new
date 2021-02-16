import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor() { }

  async getRate(coins) {
    const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    return res.data
  }

  async getMarketPrice(){

  }

  async getConfirmedTransactions() {
    
  }
}
