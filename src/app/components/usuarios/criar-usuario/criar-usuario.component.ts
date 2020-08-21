import { Component, EventEmitter, Output } from '@angular/core';
import { UsuarioService } from './../usuario.service';
import { Usuario } from '../../usuario.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.css']
})
export class CriarUsuarioComponent {
  title = "Cadastrar Usuario"

  usuario: Usuario = {
    nome: '',
    email: '',
    senha: ''
  }
  
  constructor(private usuarioService: UsuarioService, private router: Router) { }

  adicionar():void {
    this.usuarioService.adicionar(this.usuario)
    .subscribe(() =>{
      this.usuarioService.showMessage('Usuario criado com Sucesso!')
      this.router.navigate(['/usuarios'])

    });
  }

  clear(): void{
    this.usuario.nome='';
    this.usuario.email='';
    this.usuario.senha='';
  }

  cancelar(): void {
    this.router.navigate(['/usuarios'])
  }

}
