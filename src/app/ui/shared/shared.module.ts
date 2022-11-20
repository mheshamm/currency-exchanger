import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { ConverterComponent } from './components/converter/converter.component';

const MATERIAL = [
  MatSnackBarModule,
  MatFormFieldModule,
  MatIconModule,
];
const ANTD_MODULES = [NzDropDownModule, NzSelectModule, NzInputModule];
const SHARED_COMPONENTS = [ConverterComponent];
const SHARED_MODULES = [ReactiveFormsModule, RouterModule];
@NgModule({
  declarations: [...SHARED_COMPONENTS],
  providers: [CurrencyPipe],
  imports: [...SHARED_MODULES, ...MATERIAL, ...ANTD_MODULES , CommonModule],
  exports: [
    ...MATERIAL,
    ...SHARED_COMPONENTS,
    ...SHARED_MODULES,
    ...ANTD_MODULES,
    CommonModule

  ],
})
export class SharedModule {}
