import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmPasswordValidator } from 'src/app/modules/auth';

@Component({
  selector: 'app-perfil-detail',
  templateUrl: './perfil-detail.component.html',
  styleUrls: ['./perfil-detail.component.scss']
})
export class PerfilDetailComponent implements OnInit{

  perfilForm: FormGroup;
  hasError: boolean;
  valObj: any;
  fb: any;

  get celularCtrl(): AbstractControl {
    return this.perfilForm.controls['celular'];
  }

  get emailCtrl(): AbstractControl {
    return this.perfilForm.controls['email'];
  }

  get fullnameCtrl(): AbstractControl {
    return this.perfilForm.controls['fullname'];
  }

  get usuarioCtrl(): AbstractControl {
    return this.perfilForm.controls['usuario'];
  }

  get passwordCtrl(): AbstractControl {
    return this.perfilForm.controls['password'];
  }

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



initForm(): void {
  this.perfilForm = this.fb.group(
    {
      fullname: [
        null,
        this.valObj.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ]),
      ],
      usuario: [
        null,
        this.valObj.compose([Validators.required])
      ],
      email: [
        null,
        this.valObj.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320)
        ]),
      ],
      celular: [
        null,
        this.valObj.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(12)
        ])
      ],
      password: [
        null,
        this.valObj.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ]),
      ],
      cPassword: [
        null,
        this.valObj.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ]),
      ],
      cargo: [
        null,
        this.valObj.compose([Validators.required])
      ],
      categoria: [
        '1',
        this.valObj.compose([Validators.required])
      ],
      agree: [false, this.valObj.compose([Validators.required])]
    },
    {
      validator: ConfirmPasswordValidator.MatchPassword
    }
  );
}
}
