import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje:string;
  nombre:string;
  el:any;

  constructor(public _chatService:ChatService) {
    _chatService.cargarChats()
    .subscribe(()=>{
      console.log('Mensajes Cargados...')
      setTimeout(()=>this.el.scrollTop = this.el.scrollHeight, 50)
    })
  }

  ngOnInit() {
    this.el = document.getElementById("app-mensajes");
  }

  enviar(){
    if(this.mensaje.length!=0){
      this._chatService.sendMsg(this.nombre,this.mensaje)
          .then(()=>console.log('Hecho!'))
          .catch((error)=>console.error(error))

      this.mensaje="";
    }
  }

}
