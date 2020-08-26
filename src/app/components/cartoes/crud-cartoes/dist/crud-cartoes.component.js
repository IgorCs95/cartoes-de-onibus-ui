"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CrudCartoesComponent = void 0;
var core_1 = require("@angular/core");
var api_1 = require("primeng/api");
var CrudCartoesComponent = /** @class */ (function () {
    function CrudCartoesComponent(cartaoService, messageService, router, confirmationService, route) {
        this.cartaoService = cartaoService;
        this.messageService = messageService;
        this.router = router;
        this.confirmationService = confirmationService;
        this.route = route;
        this.cartao = {
            numeroCartao: NaN,
            nome: '',
            status: false,
            tipocartao: null,
            user: {
                id: NaN
            }
        };
    }
    CrudCartoesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.caregarCartoes();
        this.route.queryParams.subscribe(function (querey) {
            _this.cartao.user.id = querey['user_id'];
        });
    };
    CrudCartoesComponent.prototype.deleteSelectedProducts = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Tem certeza que deseja excluir os produtos Usuarios selecionados?',
            header: 'Confirmar',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.selectedProducts.forEach(function (usuario) {
                    _this.cartaoService.remover(usuario.numeroCartao).subscribe(function () {
                        _this.cartoes = _this.cartoes.filter(function (val) { return val.numeroCartao !== usuario.numeroCartao; });
                    });
                });
                _this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
            }
        });
    };
    CrudCartoesComponent.prototype.deleteProduct = function (cartao) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Tem certeza que gostaria de Deletar o Usuario ' + cartao.nome + '?',
            header: 'Confirmar',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.cartaoService.remover(cartao.numeroCartao).subscribe(function () {
                    _this.cartoes = _this.cartoes.filter(function (val) { return val.numeroCartao !== cartao.numeroCartao; });
                });
                _this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
            }
        });
    };
    CrudCartoesComponent.prototype.caregarCartoes = function () {
        var _this = this;
        this.cartaoService.buscar().subscribe(function (products) {
            _this.cartoes = products;
        });
    };
    CrudCartoesComponent.prototype.adicionarCartao = function (id) {
        this.router.navigate(['/cartoes/create'], { queryParams: { 'user_id': id } });
    };
    CrudCartoesComponent = __decorate([
        core_1.Component({
            selector: 'app-crud-cartoes',
            templateUrl: './crud-cartoes.component.html',
            styleUrls: ['./crud-cartoes.component.css'],
            providers: [api_1.MessageService, api_1.ConfirmationService]
        })
    ], CrudCartoesComponent);
    return CrudCartoesComponent;
}());
exports.CrudCartoesComponent = CrudCartoesComponent;
