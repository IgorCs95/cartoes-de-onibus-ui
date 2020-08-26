import { Component, OnInit } from '@angular/core';
import { CartaoService } from '../cartao.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cartao } from '../cartao.model';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-crud-cartoes',
  templateUrl: './crud-cartoes.component.html',
  styleUrls: ['./crud-cartoes.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class CrudCartoesComponent implements OnInit{

  title: "Cadastrar cartões do Usuario:";
  
  cartao: Cartao = {
    numeroCartao: NaN,
    nome: '',
    status: false,
    tipocartao:null,
    user:{
      id:0
    }
  }
  user_id:number;

  cartoes: Cartao[];
  selectedProducts: Cartao[];

  constructor(
    private cartaoService: CartaoService, 
    private messageService: MessageService, 
    private router: Router, 
    private confirmationService: ConfirmationService, 
    private route: ActivatedRoute
    
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((querey: any)=>{
      this.cartao.user.id = querey['user_id'];
      this.user_id = querey['user_id'];
      console.log(this.user_id)
      this.caregarCartoes(this.user_id);
    });
    
  }

  showMessage(msg: string, isError: boolean = false,): void {  
    if (isError) {
      this.messageService.add({ 
        severity: 'error' , 
        summary: 'Erro!', 
        detail: msg,
        life: 3000 
      });
    } else {
        this.messageService.add({ 
          severity: 'success' , 
          summary: 'Sucesso!', 
          detail: msg,
          life: 3000 
        });
    }
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir os Cartoes selecionados?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.selectedProducts.forEach(usuario => {
          this.cartaoService.remover(usuario.numeroCartao).subscribe(() => {
            this.cartoes = this.cartoes.filter(val => val.numeroCartao !== usuario.numeroCartao);
          });
        });
        this.showMessage("Cartoes removidos com Sucesso!");
      }
    });
  }

  deleteProduct(cartao: Cartao) {
    this.confirmationService.confirm({
      message: 'Tem certeza que gostaria de Deletar o Usuario ' + cartao.nome + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.cartaoService.remover(cartao.numeroCartao).subscribe(() => {
          this.cartoes = this.cartoes.filter(val => val.numeroCartao !== cartao.numeroCartao);
          this.showMessage("Cartão removidos com Sucesso!");
        });
      }
    });  
  }

  caregarCartoes(id:number):void{
    this.cartaoService.buscarIdUser(id).subscribe(products => {
      this.cartoes = products;
    });
  }
  
  adicionarCartao(id: number) {
    this.router.navigate(['/cartoes/create'],
      { queryParams: { 'user_id': id } });
  }

}
