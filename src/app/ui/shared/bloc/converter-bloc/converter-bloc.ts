import { Injectable } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { FastForexRepository } from '../../../../core/api/repository/fast-forex-repository';
import { Bloc } from '../main-bloc/bloc';
import { InitEvent } from '../main-bloc/bloc-event';
import { ReadyState } from '../main-bloc/bloc-state';
import { ConverterConvertCurrencyEvent, ConverterEvent } from './converter-event';
import { ConverterConvertedCurrencyState, ConverterState } from './converter-state';

@Injectable()
export class ConverterBloc extends Bloc<ConverterEvent, ConverterState> {
  constructor(private fastForexRepository: FastForexRepository) {
    super();
  }

  onIncomingEvents(event: ConverterEvent) {
    if (event instanceof InitEvent) {
      this.fastForexRepository
        .getAllCurrencies()
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            this.onState$.next(new ReadyState(res));
          },
        });
    } else if (event instanceof ConverterConvertCurrencyEvent) {
      this.fastForexRepository
        .convertFromCurrencyToAnother(event.from, event.to)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            this.onState$.next(
              new ConverterConvertedCurrencyState(
                +(res.convertedCurrencyValue * event.amount).toFixed(2),
                res.convertedCurrency,
                event.amount,
                res.base,
                res.updated
              )
            );
          },
        });
    }
  }
}
