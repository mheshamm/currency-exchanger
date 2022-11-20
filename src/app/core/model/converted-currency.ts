import { Expose, Transform } from 'class-transformer';

export class ConvertedCurrency {
  @Expose() base: string;
  @Expose()
  @Transform(({ obj }) =>
    obj && obj['result'] ? Object.keys(obj['result'])[0] : obj['result']
  )
  convertedCurrency: string;
  @Expose()
  @Transform(({ obj }) =>
    obj && obj['result'] ? Object.values(obj['result'])[0] : obj['result']
  )
  convertedCurrencyValue: number;
  @Expose()
  @Transform(({ value }) => (value ? new Date(value) : value))
  updated: Date;
}
