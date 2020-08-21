import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/components/usuarios/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/components/usuario.model';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-crud-usuarios',
  templateUrl: './crud-usuarios.component.html',
  styleUrls: ['./crud-usuarios.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class CrudUsuariosComponent implements OnInit {

  title: 'Gerenciar Usuarios';


  usuario: Usuario = {
    nome: '',
    email: '',
    senha: ''
  }
  usuarios: Usuario[];
  selectedProducts: Usuario[];

  constructor(private usuarioService: UsuarioService, private messageService: MessageService, private router: Router, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.usuarioService.buscar().subscribe(products => {
      this.usuarios = products
    })
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir os produtos Usuarios selecionados?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.selectedProducts.forEach(usuario => {
          this.usuarioService.remover(usuario.id).subscribe(() => {
            this.usuarios = this.usuarios.filter(val => val.id !== usuario.id);
          });
        });
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      }
    });
  }
  deleteProduct(usuario: Usuario) {
    this.confirmationService.confirm({
      message: 'Tem certeza que gostaria de Deletar o Usuario ' + usuario.nome + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.usuarioService.remover(usuario.id).subscribe(() => {
          this.usuarios = this.usuarios.filter(val => val.id !== usuario.id);
        });
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      }
    });
  }

  buscarCartoes(usuario:Usuario){
    this.usuarioService.buscarCartoes(usuario.id).subscribe(() => {
      this.router.navigate(["/cartoes/"]);
    });
  }









}