"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsuarioService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var UsuarioService = /** @class */ (function () {
    function UsuarioService(snackBar, http) {
        this.snackBar = snackBar;
        this.http = http;
        this.baseUrl = 'http://localhost:8080/user';
        this.baseUrlCartao = 'http://localhost:8080/cartao';
    }
    UsuarioService.prototype.showMessage = function (msg, isError) {
        if (isError === void 0) { isError = false; }
        this.snackBar.open(msg, "X", {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: isError ? ["msg-error"] : ["msg-success"]
        });
    };
    UsuarioService.prototype.adicionar = function (usuario) {
        var _this = this;
        return this.http.post(this.baseUrl, usuario).pipe(operators_1.map(function (obj) { return obj; }), operators_1.catchError(function (e) { return _this.errorHandler(e); }));
    };
    UsuarioService.prototype.buscar = function () {
        var _this = this;
        return this.http.get(this.baseUrl).pipe(operators_1.map(function (obj) { return obj; }), operators_1.catchError(function (e) { return _this.errorHandler(e); }));
    };
    UsuarioService.prototype.buscarCartoes = function (id) {
        var _this = this;
        var url = this.baseUrlCartao + "?user_id=" + id;
        return this.http.get(url).pipe(operators_1.map(function (obj) { return obj; }), operators_1.catchError(function (e) { return _this.errorHandler(e); }));
    };
    UsuarioService.prototype.buscarId = function (id) {
        var _this = this;
        var url = this.baseUrl + "/" + id;
        return this.http.get(url).pipe(operators_1.map(function (obj) { return obj; }), operators_1.catchError(function (e) { return _this.errorHandler(e); }));
    };
    UsuarioService.prototype.atualizar = function (usuario) {
        var _this = this;
        var url = this.baseUrl + "/" + usuario.id;
        return this.http.put(url, usuario).pipe(operators_1.map(function (obj) { return obj; }), operators_1.catchError(function (e) { return _this.errorHandler(e); }));
    };
    UsuarioService.prototype.remover = function (id) {
        var _this = this;
        var url = this.baseUrl + "/" + id;
        return this.http["delete"](url).pipe(operators_1.map(function (obj) { return obj; }), operators_1.catchError(function (e) { return _this.errorHandler(e); }));
    };
    UsuarioService.prototype.errorHandler = function (e) {
        this.showMessage("Ocorreu um erro!", true);
        return rxjs_1.EMPTY;
    };
    UsuarioService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UsuarioService);
    return UsuarioService;
}());
exports.UsuarioService = UsuarioService;
