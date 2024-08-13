import { Component } from '@angular/core';

@Component({
  selector: 'app-component03',
  standalone: true,
  imports: [],
  templateUrl: './component03.component.html',
  styleUrl: './component03.component.css'
})
export class Component03Component {

  imagem:string ="../assets/noite.jpg"

  AlterarImagem(){
    if (this.imagem === "../assets/noite.jpg") {
      this.imagem = "../assets/dia.jpg"
    }else{
      this.imagem = "../assets/noite.jpg"
    }
  }
}
