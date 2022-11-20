import { Expose, Transform } from 'class-transformer';

import { Helper } from '../helper/helper';

export class Currencies {
  @Expose()
  @Transform(({ value }) =>
    value ? Helper.ConvertObjectToArrayOfKeys(value) : value
  )
  currencies: string[];
}
