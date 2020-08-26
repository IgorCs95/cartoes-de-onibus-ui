"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CrudUsuariosComponent = void 0;
var core_1 = require("@angular/core");
var api_1 = require("primeng/api");
var CrudUsuariosComponent = /** @class */ (function () {
    function CrudUsuariosComponent(usuarioService, messageService, router, confirmationService) {
        this.usuarioService = usuarioService;
        this.messageService = messageService;
        this.router = router;
        this.confirmationService = confirmationService;
        this.usuario = {
            nome: '',
            email: '',
            senha: ''
        };
    }
    CrudUsuariosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usuarioService.buscar().subscribe(function (products) {
            _this.usuarios = products;
        });
    };
    CrudUsuariosComponent.prototype.deleteSelectedProducts = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Tem certeza que deseja excluir os produtos Usuarios selecionados?',
            header: 'Confirmar',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.selectedProducts.forEach(function (usuario) {
                    _this.usuarioService.remover(usuario.id).subscribe(function () {
                        _this.usuarios = _this.usuarios.filter(function (val) { return val.id !== usuario.id; });
                    });
                });
                _this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
            }
        });
    };
    CrudUsuariosComponent.prototype.deleteProduct = function (usuario) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Tem certeza que gostaria de Deletar o Usuario ' + usuario.nome + '?',
            header: 'Confirmar',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.usuarioService.remover(usuario.id).subscribe(function () {
                    _this.usuarios = _this.usuarios.filter(function (val) { return val.id !== usuario.id; });
                });
                _this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
            }
        });
    };
    CrudUsuariosComponent.prototype.buscarCartoes = function (usuario) {
        this.router.navigate(['/cartoes'], { queryParams: { 'user_id': usuario.id } });
    };
    CrudUsuariosComponent = __decorate([
        core_1.Component({
            selector: 'app-crud-usuarios',
            templateUrl: './crud-usuarios.component.html',
            styleUrls: ['./crud-usuarios.component.css'],
            providers: [api_1.MessageService, api_1.ConfirmationService]
        })
    ], CrudUsuariosComponent);
    return CrudUsuariosComponent;
}());
exports.CrudUsuariosComponent = CrudUsuariosComponent;
