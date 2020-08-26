import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarCartoesComponent } from './components/cartoes/criar-cartoes/criar-cartoes.component';
import { CriarUsuarioComponent } from './components/usuarios/criar-usuario/criar-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CrudUsuariosComponent } from './components/usuarios/crud-usuarios/crud-usuarios.component';
import { HeaderComponent } from './components/template/header/header.component';
import { CrudCartoesComponent } from './components/cartoes/crud-cartoes/crud-cartoes.component';

import { ToolbarModule } from 'primeng/toolbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService } from 'primeng/api';

import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';



import { MatSnackBarModule } from "@angular/material/snack-bar";

import { UsuarioService } from './components/usuarios/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    CriarCartoesComponent,
    CriarUsuarioComponent,
    CrudUsuariosComponent,
    HeaderComponent,
    CrudCartoesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    SelectButtonModule,
    InputNumberModule,
    ToggleButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    DropdownModule,
    ProgressBarModule,
    InputTextModule,
    ConfirmDialogModule,
    MessagesModule,
    
  ],
  providers: [
    UsuarioService,
    ConfirmationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
