import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cadastro-projetos',
  templateUrl: './cadastro-projetos.component.html',
  styleUrls: ['./cadastro-projetos.component.css']
})
export class CadastroProjetosComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  saveProject(form) {

    console.log(form)
  }

}