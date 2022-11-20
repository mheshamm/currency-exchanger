import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { routes } from './routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [CommonModule, SharedModule , RouterModule.forChild(routes)],
  exports: [],
})
export class LandingModule {}
