import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FastForexApi } from './core/api/fast-forex-api';
import { SnackBarService } from './ui/shared/services/snack-bar.service';
import { Helper } from './core/helper/helper';
import { FastForexRepository } from './core/api/repository/fast-forex-repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Currency-Exchanger';
  constructor(
    private snackbarService: SnackBarService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.checkSnackBarIsOpened();
  }
  private checkSnackBarIsOpened() {
    this.snackbarService.openSnackBar$.subscribe((res : string) => {
      if (res) {
        this.openSnackBar(res);
      }
    });
  }
  private openSnackBar(msg: string) {
    this.snackBar.open(msg, null, {
      duration: 3000,
      panelClass: 'snackBar',
      verticalPosition:'bottom',
      horizontalPosition:'center'
    });
  }
}
