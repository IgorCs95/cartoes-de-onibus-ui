"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartaoService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var CartaoService = /** @class */ (function () {
    function CartaoService(snackBar, http) {
        this.snackBar = snackBar;
        this.http = http;
        this.baseUrl = 'http://localhost:8080/cartao';
    }
    CartaoService.prototype.showMessage = function (msg, isError) {
        if (isError === void 0) { isError = false; }
        this.snackBar.open(msg, "X", {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: isError ? ["msg-error"] : ["msg-success"]
        });
    };
    CartaoService.prototype.adicionar = function (cartao) {
        var _this = this;
        return this.http.post(this.baseUrl, cartao).pipe(operators_1.map(function (obj) { return obj; }), operators_1.catchError(function (e) { return _this.errorHandler(e); }));
    };
    CartaoService.prototype.buscarIdUser = function (id) {
        var _this = this;
        var url = this.baseUrl + "?user_id=" + id;
        return this.http.get(url).pipe(operators_1.map(function (obj) { return obj; }), operators_1.catchError(function (e) { return _this.errorHandler(e); }));
    };
    CartaoService.prototype.buscar = function () {
        var _this = this;
        return this.http.get(this.baseUrl).pipe(operators_1.map(function (obj) { return obj; }), operators_1.catchError(function (e) { return _this.errorHandler(e); }));
    };
    CartaoService.prototype.atualizar = function (cartao) {
        var _this = this;
        var url = this.baseUrl + "/" + cartao.numeroCartao;
        return this.http.put(url, cartao).pipe(operators_1.map(function (obj) { return obj; }), operators_1.catchError(function (e) { return _this.errorHandler(e); }));
    };
    CartaoService.prototype.remover = function (id) {
        var _this = this;
        var url = this.baseUrl + "/" + id;
        return this.http["delete"](url).pipe(operators_1.map(function (obj) { return obj; }), operators_1.catchError(function (e) { return _this.errorHandler(e); }));
    };
    CartaoService.prototype.errorHandler = function (e) {
        this.showMessage("Ocorreu um erro!", true);
        return rxjs_1.EMPTY;
    };
    CartaoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CartaoService);
    return CartaoService;
}());
exports.CartaoService = CartaoService;
