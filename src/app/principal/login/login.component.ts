import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  authService = inject(ApiService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);
  hide = true;
  form!: FormGroup;
  fb = inject(FormBuilder);

  login() {
    this.authService.login(this.form.value).subscribe({
      next: (response) => {
        this.matSnackBar.open(response.message, 'Close', {
          duration: 5000,
          horizontalPosition: 'center',
        });
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.matSnackBar.open(error.error.message, 'Close', {
          duration: 5000,
          horizontalPosition: 'center',
        });
      },
    });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
}
