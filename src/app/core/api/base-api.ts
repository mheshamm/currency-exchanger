import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { SnackBarService } from '../../ui/shared/services/snack-bar.service';
import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class BaseAPI {
  constructor(
    private http: HttpClient,
    private snackbarService: SnackBarService
  ) {}

  public get(url: string, options?: any): Observable<any> {
    if (options) {
      options['observe'] = 'response';
    } else {
      options = {
        observe: 'response',
        headers: this.getHeaders(),
        params: this.getParams(),
      };
    }
    return this.http.get(this.encodeURL(url), options).pipe(
      map((response: any) => {
        return response.body;
      }),

      catchError((error) => {
        return this.handleError(error);
      })
    );
  }

  public encodeURL(url: string): string {
    return url.replace(' ', '%20');
  }
  public getHeaders(): HttpHeaders {
    return new HttpHeaders();
  }

  public getParams() {
    return new HttpParams().append(
      Constants.API_KEY_STRING,
      Constants.API_KEY_VALUE
    );
  }

  private handleError(response: any) {
    this.snackbarService.openSnackBar$.next(response.error.error);

    return throwError(response);
  }
}
