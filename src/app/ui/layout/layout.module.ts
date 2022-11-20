import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainPageComponent
  ],
  imports: [CommonModule, SharedModule],
  exports: [MainPageComponent],
})
export class LayoutModule {}
