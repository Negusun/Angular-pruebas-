import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {Observable} from 'rxjs/Rx';

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
    nomusuario:'',
    password1:'',
    password2:'',
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
      'nomusuario': new FormControl('', Validators.required, this.userexist),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl('', Validators.required,),
      'email': new FormControl('', [
                                      Validators.required,
                                      Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.].[a-z]{2,5}')
                                    ]),
      'skills': new FormArray([])
    });
    this.form.controls['password2'].setValidators(
      [
        Validators.required,
        this.passinvalid.bind(this.form)
      ]
    );

    this.form.valueChanges
      .subscribe(
        data=>{
          console.log(data);
        }
      )
  }



  passinvalid( ctr:FormControl ):any {
    let form: any = this;
    if(ctr.value!== form.get('password1').value) {
      return { passinvalid : true }
    }
    return true;
  }

  userexist( ctrl: FormControl ): Promise<any>|Observable<any>{
    let promise = new Promise(
      (resolve, reject)=>{
        setTimeout(()=>{
          if( ctrl.value === "negu" )
            resolve( {exist:true} )
          else
            resolve( null )
        }, 3000)
      });
      return promise;
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
    console.log(this.form);
  }

}
