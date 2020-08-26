import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem, MessageService } from 'primeng/api';


import { CartaoService } from './../cartao.service';
import { Cartao } from '../cartao.model'

import { FormGroup, } from '@angular/forms';


@Component({
  selector: 'app-criar-cartoes',
  templateUrl: './criar-cartoes.component.html',
  styleUrls: ['./criar-cartoes.component.css'],
  providers: [MessageService]
})
export class CriarCartoesComponent implements OnInit {

  tipos = [
    { label: 'Comum', value: 'COMUM' },
    { label: 'Estudante', value: 'ESTUDANTE' },
    { label: 'Trabalhador', value: 'TRABALHADOR' },
  ];

  title = "Cadastrar Cartao";

  usuarios = [];
  formulario: FormGroup;

  types: SelectItem[];

  cartao: Cartao = {
    numeroCartao: NaN,
    nome: '',
    status: false,
    tipocartao: null,
    user: {
      id: 0
    }
  }

  constructor(
    private cartaoService: CartaoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((querey: any) => {
      this.cartao.user.id = querey['user_id'];
    });
  }


  adicionar(): void {
    console.log(this.cartao)
    this.cartaoService.adicionar(this.cartao)
      .subscribe(() => {
        this.showMessage('Cartao criado com Sucesso!')
        this.router.navigate(['/cartoes/'],
          { queryParams: { 'user_id': this.cartao.user.id } });
      });
  }

  clear(): void {
    this.cartao.numeroCartao = 0,
      this.cartao.nome = '',
      this.cartao.status = false,
      this.cartao.tipocartao = null
  }
  buscarCartoes(id: number) {
  }
  
  cancelar(): void {
    this.router.navigate(['/cartoes'],
      { queryParams: { 'user_id': this.cartao.user.id }});
  }

  caregarUsuarios(id?: number) {
    this.cartaoService.buscar().subscribe(products => {
      this.usuarios = products
    });
  }

  showMessage(msg: string, isError: boolean = false,): void {
    if (isError) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro!',
        detail: msg
      });
    } else {
      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso!',
        detail: msg
      });
    }
  }
}

