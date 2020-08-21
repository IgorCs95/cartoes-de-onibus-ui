import { Component, OnInit } from '@angular/core';
import { CartaoService } from 'src/app/components/cartoes/cartao.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cartao } from 'src/app/components/cartao.model';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-crud-cartoes',
  templateUrl: './crud-cartoes.component.html',
  styleUrls: ['./crud-cartoes.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class CrudCartoesComponent{

  title: 'Cadastrar cartões do Usuario';

  cartao: Cartao = {
    numeroCartao: NaN,
    nome: '',
    status: false,
    tipocartao:null,
    user:{
      id:38
    }
  }

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
    const id = +this.route.snapshot.paramMap.get("user_id=");
    console.log(id);
    this.cartaoService.buscar().subscribe(product => {
      this.cartoes = product;
    });
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir os produtos Usuarios selecionados?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.selectedProducts.forEach(usuario => {
          this.cartaoService.remover(usuario.numeroCartao).subscribe(() => {
            this.cartoes = this.cartoes.filter(val => val.numeroCartao !== usuario.numeroCartao);
          });
        });
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
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
        });
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      }
    });

    // caregarCartoes() {
    //   this.cartaoService.buscar().subscribe(products => {
    //     this.usuarios = products
    //   });
    // }

  }

}
