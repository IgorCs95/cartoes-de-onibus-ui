import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, EMPTY } from 'rxjs';

import { MatSnackBar } from "@angular/material/snack-bar";
import { map, catchError } from "rxjs/operators";
import { Cartao } from './cartao.model';

@Injectable({
  providedIn: 'root'
})
export class CartaoService {

  baseUrl = 'http://localhost:8080/cartao'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["error"] : ["success"],
    });
  }
  
  showMessage(msg: string, isError: boolean = false,): void {  
    if (isError) {
      this.messageService.add({ 
        severity: 'error' , 
        summary: 'Erro!', 
        detail: msg 
      });
    } else {
        this.messageService.add({ 
          severity: 'success' , 
          summary: 'Sucesso!', 
          detail: msg 
        });
    }
  }
  
  adicionar(cartao: Cartao): Observable<Cartao> {
    return this.http.post<Cartao>(this.baseUrl, cartao).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  buscarIdUser(id: number): Observable<Cartao[]> {
    const url = `${this.baseUrl}?user_id=${id}`;
    return this.http.get<Cartao[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  buscarId(id: number): Observable<Cartao> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cartao>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }


  buscar(): Observable<Cartao[]> {
    return this.http.get<Cartao[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
      );
    }

  atualizar(cartao: Cartao): Observable<Cartao> {
    const url = `${this.baseUrl}/${cartao.numeroCartao}`;
    return this.http.put<Cartao>(url, cartao).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  remover(id: number): Observable<Cartao> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Cartao>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }



}
