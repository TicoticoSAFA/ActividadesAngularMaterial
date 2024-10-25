import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {ImageDialogComponent} from '../image-dialog/image-dialog.component';

interface Image {
  src: string;
  description: string;
}

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  images: Image[] = [
    { src: 'assets/images/image1.jpg', description: 'Image 1' },
    { src: 'assets/images/image2.jpg', description: 'Image 2' }
  ];
  filterDescription: string = '';

  get filteredImages() {
    return this.images.filter(image =>
      this.filterDescription ? image.description.toLowerCase().includes(this.filterDescription.toLowerCase()) : true
    );
  }

  constructor(public dialog: MatDialog) {}

  openDialog(image: Image): void {
    this.dialog.open(ImageDialogComponent, {
      data: image
    });
  }

  addImage() {
    const newImageSrc = prompt('Enter the image URL:');
    const newImageDescription = prompt('Enter the image description:');
    if (newImageSrc && newImageDescription) {
      this.images.push({ src: newImageSrc, description: newImageDescription });
    }
  }
}
