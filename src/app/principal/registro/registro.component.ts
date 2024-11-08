
import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { RoleService } from '../../role.service';
import { Role } from '../../interfaces/role';
import { ValidationError } from '../../interfaces/validation-error';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormFieldCustomControlExample } from '../tel-input/tel-input.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [MatInputModule, MatSelectModule, MatIconModule, RouterLink, CommonModule, ReactiveFormsModule,FormFieldCustomControlExample, MatDatepickerModule],
  providers: [
    provideNativeDateAdapter()
  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  roleService = inject(RoleService);
  authService = inject(ApiService);
  matSnackbar = inject(MatSnackBar);
  roles$!: Observable<Role[]>;
  fb = inject(FormBuilder);
  registerForm!: FormGroup;
  hide = true;
  router = inject(Router);
  confirmPasswordHide: boolean = true;
  passwordHide: boolean = true;
  errors!: ValidationError[];

  currentSection = 1;


  nextSection() {
    this.currentSection = this.currentSection+1;
  }

  previousSection() {
    this.currentSection = this.currentSection-1;
  }


  register() {
    if (this.registerForm.valid) {
    this.authService.register(this.registerForm.value).subscribe({
      next: (response) => {
        console.log(response);

        this.matSnackbar.open(response.message, 'Close', {
          duration: 5000,
          horizontalPosition: 'center',
        });
        this.router.navigate(['/login']);
      },
      error: (err: HttpErrorResponse) => {
        if (err!.status === 400) {
          this.errors = err!.error;
          this.matSnackbar.open('Validations error', 'Close', {
            duration: 5000,
            horizontalPosition: 'center',
          });
        }
      },
      complete: () => console.log('Register success'),
    });
  }else{
    console.log('Formulario no válido');
  }
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        nombre: ['', Validators.required],
        apellidoMaterno: ['', Validators.required],
        apellidoPaterno: [''],
        sexo: ['', Validators.required],
        fechaNacimiento: ['', Validators.required],
        estadoCivil: ['', Validators.required],
        titulo: ['', Validators.required],
        ocupacion: ['', Validators.required],
        roles: [['profesional']],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
        telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
        address: ['', []]
      },
      {
        validator: this.passwordMatchValidator,
      }
    );

    // Subscribe to value changes if needed
    this.registerForm.valueChanges.subscribe(value => {
      console.log('Form value changed:', value);
      console.log(this.registerForm.controls['telefono']);
    });

    this.roles$ = this.roleService.getRoles();
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ mismatch: true });
    } else {
      if (confirmPassword)
      confirmPassword.setErrors(null); // Limpia los errores si coinciden
    }

    return null; // Este retorno es necesario para que Angular no considere este validador como fallido a nivel de formulario
  }

}
