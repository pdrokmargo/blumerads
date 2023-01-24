import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicio-al-cliente',
  templateUrl: './servicio-al-cliente.component.html',
  styleUrls: ['./servicio-al-cliente.component.scss']
})
export class ServicioAlClienteComponent implements OnInit {

  objForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.objForm = this.fb.group({
      titulosolicitud: [null, Validators.required],
      descripcion: [null, Validators.required]
    });
  }

  send(): void {
    if (this.objForm.valid) {
      console.log('DATA FORM: ', this.objForm.getRawValue());
    }
  }
}
