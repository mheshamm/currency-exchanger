import { BlocEvent } from '../main-bloc/bloc-event';
export abstract class ConverterEvent extends BlocEvent {
  constructor() {
    super();
  }
}

export class ConverterConvertCurrencyEvent extends ConverterEvent {
  constructor(public from: string, public to: string, public amount: number) {
    super();
  }
}
