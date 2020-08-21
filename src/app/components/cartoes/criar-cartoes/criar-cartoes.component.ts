import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';


import { CartaoService } from './../cartao.service';
import { Cartao } from '../../cartao.model'

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../usuarios/usuario.service';




@Component({
  selector: 'app-criar-cartoes',
  templateUrl: './criar-cartoes.component.html',
  styleUrls: ['./criar-cartoes.component.css']
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
      id: 38
    }
  }

  constructor(
    private cartaoService: CartaoService,
    private router: Router,
    private usuarioServece: UsuarioService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(map => map);
    console.log(this.route.snapshot.queryParams);
  }


  adicionar(): void {
    console.log(this.cartao)
    this.cartaoService.adicionar(this.cartao)
      .subscribe(() => {
        this.cartaoService.showMessage('Usuario criado com Sucesso!')
        this.router.navigate(['/cartoes'])

      });
  }

  clear(): void {
    this.cartao.numeroCartao = 0,
      this.cartao.nome = '',
      this.cartao.status = false,
      this.cartao.tipocartao = null
  }

  cancelar(): void {
    this.router.navigate(['/cartoes'])
  }

  caregarUsuarios(id?:number) {
    this.cartaoService.buscar().subscribe(products => {
      this.usuarios = products
    });
  }
}

