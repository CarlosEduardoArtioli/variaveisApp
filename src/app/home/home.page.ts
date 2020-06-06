import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public mensagem;

  public nome: string; // Armazerna textos
  public idade: number; // Armazerna números (inteiros ou decimais)
  public excluido: boolean; // Armazena true/false

  public situacao: any; // Armazena qualquer tipo de informação

  public anoNascimento: number;

  constructor() {
    //alert("Mensagem: " + this.mensagem);

    this.mensagem = "Olá a todos!"

    console.log("Mensagem: " + this.mensagem);

    //this.mensagem = 2020;
  }

  public saudacao(){
    this.mensagem = "Olá " + this.nome + ", você informou a idade: " + this.idade + " anos.";

    if(this.idade >= 18){
      this.situacao = "Você é maior de idade!";
    }
    else{
      this.situacao = "Você é menor de idade!";
    }
  }

  public anoDeNascimento(){
    const anoAtual = 2020; // const -> variável que não muda seu valor durante a execução do código

    let anoNascimento = anoAtual - this.idade; // let -> cria variáveis que podem ser alteradas durante a execução do código

    this.anoNascimento = anoNascimento;
  }

}
