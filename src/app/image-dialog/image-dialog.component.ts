import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-image-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButton],
  template: `
    <h1 mat-dialog-title>{{ data.description }}</h1>
    <div mat-dialog-content>
      <img [src]="data.src" [alt]="data.description" style="width: 100%;">
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </div>
  `
})
export class ImageDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { src: string; description: string }) {}
}
