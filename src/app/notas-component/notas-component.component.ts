import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatOption} from '@angular/material/core';
import {MatButton} from '@angular/material/button';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatSelect} from '@angular/material/select';

interface Student {
  name: string;
  grade: number;
  status: string;
}

@Component({
  selector: 'app-notas-component',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelect,
    MatOption,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatButton,
    MatInput,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatInput,
    MatOption,
    MatButton,
    MatTable,
    MatHeaderCell,
    MatHeaderRow,
    MatCell,
    MatColumnDef,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatCellDef,
    MatHeaderCellDef
  ],
  templateUrl: './notas-component.component.html',
  styleUrl: './notas-component.component.css'
})
export class NotasComponentComponent {
  students: Student[] = [
    { name: 'John Doe', grade: 6, status: this.calculateStatus(6) },
    { name: 'Jane Smith', grade: 4, status: this.calculateStatus(4) }
  ];
  displayedColumns: string[] = ['name', 'grade', 'status'];
  filterName: string = '';
  filterStatus: string = '';

  get filteredStudents() {
    return this.students.filter(student =>
      (this.filterName ? student.name.toLowerCase().includes(this.filterName.toLowerCase()) : true) &&
      (this.filterStatus ? student.status === this.filterStatus : true)
    );
  }

  addStudent() {
    let newStudentName = prompt('¿cuál es el nombre del nuevo estudiante?');
    if (!newStudentName) {
      return;
    }
    let newStudentGrade = parseFloat(<string>prompt('¿cuál es la nota del nuevo estudiante?'));
    const newStudent = { name: newStudentName, grade: newStudentGrade, status: this.calculateStatus(newStudentGrade) };
    this.students.push(newStudent);
  }

  calculateStatus(grade: number): string {
    return grade >= 5 ? 'Aprobado' : 'Suspenso';
  }
}
