"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CriarUsuarioComponent = void 0;
var core_1 = require("@angular/core");
var CriarUsuarioComponent = /** @class */ (function () {
    function CriarUsuarioComponent(usuarioService, router) {
        this.usuarioService = usuarioService;
        this.router = router;
        this.title = "Cadastrar Usuario";
        this.usuario = {
            nome: '',
            email: '',
            senha: ''
        };
    }
    CriarUsuarioComponent.prototype.adicionar = function () {
        var _this = this;
        this.usuarioService.adicionar(this.usuario)
            .subscribe(function () {
            _this.usuarioService.showMessage('Usuario criado com Sucesso!');
            _this.router.navigate(['/usuarios']);
        });
    };
    CriarUsuarioComponent.prototype.clear = function () {
        this.usuario.nome = '';
        this.usuario.email = '';
        this.usuario.senha = '';
    };
    CriarUsuarioComponent.prototype.cancelar = function () {
        this.router.navigate(['/usuarios']);
    };
    CriarUsuarioComponent = __decorate([
        core_1.Component({
            selector: 'app-criar-usuario',
            templateUrl: './criar-usuario.component.html',
            styleUrls: ['./criar-usuario.component.css']
        })
    ], CriarUsuarioComponent);
    return CriarUsuarioComponent;
}());
exports.CriarUsuarioComponent = CriarUsuarioComponent;
