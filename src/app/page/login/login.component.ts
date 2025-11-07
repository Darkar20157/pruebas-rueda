import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  loading = false;
  message = '';

  constructor(private http: HttpClient, private router: Router, private loginService: LoginService) { }

  onSubmit() {
    const credentials = { email: this.email, password: this.password, candidate_code: 'CAND_0019' };

    this.loginService.login(credentials).subscribe({
      next: (res) => {
        if (res.token) {
          this.loginService.saveToken(res.token);
          this.router.navigate(['/rueda/contact']);
        } else {
          this.message = res.message || 'Error de autenticación';
        }
      },
      error: (err) => {
        console.error(err);
        this.message = 'Error al conectar con el servidor';
      }
    });
  }
}
