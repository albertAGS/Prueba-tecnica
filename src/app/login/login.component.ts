import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public form: FormGroup = this._fb.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  public users: User[] = []

  constructor(
    private _fb: FormBuilder,
    private login: LoginService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.login.readTextFile('assets/users.json').then((json) => this.users = JSON.parse(json));
  }

  public onSubmit() {
    localStorage.setItem('idUser', this.users.filter(user => user.name === this.form.value.name && user.password === this.form.value.password)[0].userId.toString() ); 
    
    if (localStorage.getItem('idUser')) {
      this._router.navigate(['/list']);
    }
  }
}
