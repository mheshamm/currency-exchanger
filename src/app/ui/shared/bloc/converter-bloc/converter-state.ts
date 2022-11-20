import { BlocState } from '../main-bloc/bloc-state';

export abstract class ConverterState extends BlocState {
  constructor() {
    super();
  }
}

export class ConverterConvertedCurrencyState extends ConverterState {
  constructor(
    public convertedAmount: number,
    public convertedCurrency: string,
    public amount: number,
    public baseCurrency: string,
    public updatedAt: Date
  ) {
    super();
  }
}
