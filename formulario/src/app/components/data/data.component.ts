import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  form:FormGroup;

  usuario: any = {
    nombrecompleto:{
      nombre:'Esteban',
      apellido:'Bustos'
    },
    email:'ngprodev@gmail.com',
    skills:['Ver Series']
  }

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
                                    ]),
      'skills': new FormArray([
                  new FormControl('', Validators.required)
      ])
    });
    this.form.setValue(this.usuario);
  }

  newSkill() {
    (<FormArray>this.form.get('skills')).push(
      new FormControl('',Validators.required)
    );
  }

  quitarSkill() {
    (<FormArray>this.form.get('skills')).removeAt((<FormArray>this.form.get('skills')).length-1);
  }

  guardar()  {
    console.log(this.form.value);
  }

}
