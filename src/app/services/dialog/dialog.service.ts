import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RowCardComponent } from 'src/app/components/row-card/row-card.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openRowCard(data: any): void {
    this.dialog.open(RowCardComponent, {
      data: data,
      width: '55rem',
      height: '26rem'
    });
  }
}
