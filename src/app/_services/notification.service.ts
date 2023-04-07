import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private _sanckBar: MatSnackBar
  ) { }

  notify(message: string) {
    this._sanckBar.open(message, 'Ok', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    })
  }

  success(message: string) {
    this._sanckBar.open(message, 'Ok', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['green-snackbar']
    })
  }
}
