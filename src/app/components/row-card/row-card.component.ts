import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-row-card',
  templateUrl: './row-card.component.html',
  styleUrls: ['./row-card.component.css'],
})
export class RowCardComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
