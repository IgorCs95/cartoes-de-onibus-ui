import { Component,OnInit } from '@angular/core';
import { UsuarioService } from './../usuario.service';
import { Usuario } from '../usuario.model'
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.css'],
  providers: [MessageService]
})
export class CriarUsuarioComponent implements OnInit{
  title = "Cadastrar Usuario"

  formulario: FormGroup;
  isEditando:boolean = false;
  
  constructor(
    private usuarioService: UsuarioService, 
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private formBuilder: FormBuilder
    
    ) { }

  ngOnInit() {
    const idUser = this.route.snapshot.params['id'];
    console.log(idUser)
    if(idUser){
      this.usuarioService.buscarId(idUser).subscribe((Obje) =>{
        this.formulario.patchValue(Obje);
        this.isEditando = true;
      });
    }
    this.configurarFormulario();
  }
  
  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [,Validators.required],
      email: [,Validators.email],
      senha: [,Validators.required],
    });
  }

  salvar():void {
    if(this.isEditando){
      this.usuarioService.atualizar(this.formulario.value)
      .subscribe(() =>{
        this.showMessage('Usuario Atualizado com Sucesso!')
        this.router.navigate(['/usuarios'])
      });
    }
    else{
      this.usuarioService.adicionar(this.formulario.value)
      .subscribe(() =>{
        this.showMessage('Usuario criado com Sucesso!')
        this.router.navigate(['/usuarios'])
      });
    }
  }

  clear(): void{
    this.formulario.reset();
  }

  cancelar(): void {
    this.router.navigate(['/usuarios'])
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
