import { Injectable } from '@angular/core';
import { AngularFireAuthProvider, AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor( public af: AngularFireAuth ) {

  }

  loginWithGoogle() {

  }

}
