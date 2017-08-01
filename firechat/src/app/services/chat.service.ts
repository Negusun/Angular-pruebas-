import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Mensaje } from '../interfaces/mensaje.interface';

@Injectable()
export class ChatService {

  chats:FirebaseListObservable<any[]>;

  constructor(private db:AngularFireDatabase) {
  /*  this.chats=db.list('/chats');*/
  }

  cargarChats(){
    this.chats = this.db.list('/chats',{
      query:{
        limitToLast:20,
        orderByKey:true
      }
    })
    return this.chats;
  }

  sendMsg( n:string, t:string ){
    let msg: Mensaje = {
      nombre: n,
      mensaje: t
    }

    return this.chats.push(msg);
  }

  login(){}

  logout(){}

}
