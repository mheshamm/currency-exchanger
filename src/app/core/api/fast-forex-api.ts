import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '../constants/constants';
import { Mapper } from '../mapper/base-mapper';
import { ConvertedCurrency } from '../model/converted-currency';
import { Currencies } from '../model/currencies';
import { BaseAPI } from './base-api';

@Injectable({
  providedIn: 'root',
})
export class FastForexApi {
  constructor(private baseAPI: BaseAPI, private mapper: Mapper) {}
  getAllCurrencies(): Observable<Currencies> {
    return this.baseAPI
      .get(Constants.API_GET_ALL_CURRENCIES)
      .pipe(map((res) => this.mapper.fromJson(Currencies, res)));
  }

  convertFromCurrencyToAnother(
    from: string,
    to: string
  ): Observable<ConvertedCurrency> {
    const queries = { from, to };
    let params = this.baseAPI.getParams();
    for (const query in queries) {
      if (queries[query]) {
        params = params.append(query, queries[query]);
      }
    }
    return this.baseAPI
      .get(Constants.API_CONVERT_CURRENCY_TO_ANOTHER, {
        params: params,
      })
      .pipe(map((res) => this.mapper.fromJson(ConvertedCurrency, res)));
  }
}
