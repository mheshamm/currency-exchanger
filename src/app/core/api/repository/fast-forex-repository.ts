import { Injectable } from '@angular/core';

import { Repository } from './main-repository';
import { Observable } from 'rxjs';
import { Currencies } from '../../model/currencies';
import { FastForexApi } from '../fast-forex-api';
import { ConvertedCurrency } from '../../model/converted-currency';

@Injectable({
  providedIn: 'root',
})
export class FastForexRepository extends Repository {
  constructor(private fastForexApi: FastForexApi) {
    super();
  }
  getAllCurrencies(): Observable<Currencies> {
    return this.fastForexApi.getAllCurrencies();
  }
  convertFromCurrencyToAnother(
    from: string,
    to: string
  ): Observable<ConvertedCurrency> {
    return this.fastForexApi.convertFromCurrencyToAnother(from, to);
  }
}
