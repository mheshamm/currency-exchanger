import { Component, OnInit } from '@angular/core';
import { ConverterBloc } from '../../bloc/converter-bloc/converter-bloc';
import { InitEvent } from '../../bloc/main-bloc/bloc-event';
import { BaseComponent } from '../base-component';
import { takeUntil } from 'rxjs/operators';
import { BlocState, ReadyState } from '../../bloc/main-bloc/bloc-state';
import { Currencies } from '../../../../core/model/currencies';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ConverterConvertCurrencyEvent } from '../../bloc/converter-bloc/converter-event';
import { ConverterConvertedCurrencyState } from '../../bloc/converter-bloc/converter-state';
import { Constants } from '../../../../core/constants/constants';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
  providers: [ConverterBloc],
})
export class ConverterComponent extends BaseComponent implements OnInit {
  currencies: Currencies;
  form: FormGroup;
  converted: string;
  loading : boolean = false;
  updatedDate : Date ;

  // getters
  get from(): FormControl {
    return this.form.get('from') as FormControl;
  }
  get to(): FormControl {
    return this.form.get('to') as FormControl;
  }
  get amount(): FormControl {
    return this.form.get('amount') as FormControl;
  }

  // constants
  Constants = Constants

  constructor(private bloc: ConverterBloc, private formBuilder: FormBuilder) {
    super();
    this.bloc.onState
      .pipe(takeUntil(this.destroy$))
      .subscribe((state) => this.onHandleState(state));
  }

  ngOnInit(): void {
    this.initializeForm();
    this.bloc.setEvent.next(new InitEvent());
  }

  public onConvert() {
    if (this.form.valid) {
      this.form.markAllAsTouched();
      this.loading = true;
      this.bloc.setEvent.next(
        new ConverterConvertCurrencyEvent(
          this.from.value,
          this.to.value,
          this.amount.value
        )
      );
    }
  }
  public onChangeCurrencies(from: string, to: string) {
    this.from.setValue(to);
    this.to.setValue(from);
    this.loading = true;
    if (this.form.valid) {
      this.form.markAllAsTouched();
      this.bloc.setEvent.next(
        new ConverterConvertCurrencyEvent(
          this.from.value,
          this.to.value,
          this.amount.value
        )
      );
    }
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      from: [null, [Validators.required]],
      to: [null, [Validators.required]],
      amount: [null, [Validators.required]],
    });
  }

  private onHandleState(state: BlocState) {
    if (!state) {
      return;
    } else if (state instanceof ReadyState) {
      this.currencies = state.data;
    } else if (state instanceof ConverterConvertedCurrencyState) {
      this.loading = false;
      this.converted = `${state.amount} ${state.baseCurrency} = ${state.convertedAmount} ${state.convertedCurrency}`;
      this.updatedDate = state.updatedAt
    }
  }
}
