import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private matSnack: MatSnackBar) { }

  displayErrorMessage(message: string) {
    this.matSnack.open(message, 'Okay');
  }
}
