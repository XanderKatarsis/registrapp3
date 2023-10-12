import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: 'index.page.html',
  styleUrls: ['index.page.scss'],
})
export class IndexPage {
  isLoggedIn = false;
  showLoginForm = false;
  showRegisterForm = false;

  constructor() {}

  mostrarFormularioLogin() {
    this.showLoginForm = true;
    this.showRegisterForm = false;
  }

  mostrarFormularioRegistro() {
    this.showLoginForm = false;
    this.showRegisterForm = true;
  }

  iniciarSesion() {
    // Lógica para iniciar sesión aquí
    this.isLoggedIn = true;
    this.showLoginForm = false;
    this.showRegisterForm = false;
  }

  registrar() {
    // Lógica para registro aquí
    this.isLoggedIn = true;
    this.showLoginForm = false;
    this.showRegisterForm = false;
  }

  ngOnInit() {
  }

}
