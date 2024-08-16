import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdatePacienteDto } from '../../../interfaces/UpdatePacienteDto';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent {
  pacienteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditarPacienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UpdatePacienteDto
  ) {
    this.pacienteForm = this.fb.group({
      nombre: [data.nombre, Validators.required],
      apellidoPaterno: [data.apellidoPaterno, Validators.required],
      apellidoMaterno: [data.apellidoMaterno, Validators.required],
      email: [data.email, [Validators.required, Validators.email]],
      telefono: [data.telefono, Validators.required],
      fechaNacimiento: [data.fechaNacimiento, Validators.required],
      // Agrega más controles según sea necesario
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.pacienteForm.valid) {
      this.dialogRef.close(this.pacienteForm.value);
    }
  }
}
