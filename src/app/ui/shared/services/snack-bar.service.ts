import { Injectable } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  openSnackBar$: Subject<any> = new Subject<any>();
  constructor() { }



}
