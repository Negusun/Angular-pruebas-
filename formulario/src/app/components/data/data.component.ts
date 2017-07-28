import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  form:FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [
                                        Validators.required,
                                        Validators.minLength(3),
                                        Validators.pattern('[A-Za-z]*'),
                                        Validators.maxLength(15)
                                      ]),
        'apellido': new FormControl('', [
                                        Validators.required,
                                        Validators.minLength(3),
                                        Validators.pattern('[A-Za-z]*'),
                                        Validators.maxLength(15)
                                      ])
      }),
      'email': new FormControl('', [
                                      Validators.required,
                                      Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.].[a-z]{2,5}')
                                    ])
    });
  }

  guardar()
  {
    console.log(this.form.value);
  }

}
