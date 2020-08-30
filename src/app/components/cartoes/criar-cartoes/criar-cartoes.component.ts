import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem, MessageService } from 'primeng/api';


import { CartaoService } from './../cartao.service';
import { Cartao } from '../cartao.model'

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

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

  formulario: FormGroup;

  user_id: number;

  isEditando:boolean = false;

  constructor(
    private cartaoService: CartaoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    const codigoCartao = this.route.snapshot.params['id'];
    if(codigoCartao){
      this.cartaoService.buscarId(codigoCartao).subscribe((Obje) =>{
        this.user_id = Obje.user.id;
        this.formulario.patchValue(Obje);
        this.isEditando = true;
      });
    }else{
      this.route.queryParams.subscribe((query: any) => {
        this.user_id = query['user_id'];
      });
    }
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      numeroCartao: [, Validators.required],
      nome: [, Validators.required],
      tipocartao: [, Validators.required],
      status: [],
      user: this.formBuilder.group({
        id: [this.user_id,],
      }),
    });
  }

  carregarCartao(cartao: Cartao) {
    this.formulario.patchValue(cartao);
  }


  salvar(): void {
    console.log(this.formulario.value)
    if(this.isEditando){
      this.cartaoService.atualizar(this.formulario.value)
      .subscribe(() => {
        this.showMessage('Cartao criado com Sucesso!')
        this.router.navigate(['/cartoes/'],
          { queryParams: { 'user_id': this.user_id } });
      });
    }else{
      this.cartaoService.adicionar(this.formulario.value)
        .subscribe(() => {
          this.showMessage('Cartao criado com Sucesso!')
          this.router.navigate(['/cartoes/'],
            { queryParams: { 'user_id': this.user_id } });
        });
    }
  }

  clear(): void {
    this.formulario.reset();
    this.configurarFormulario();
  }

  cancelar(): void {
    this.router.navigate(['/cartoes'],
      { queryParams: { 'user_id': this.user_id } });
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

