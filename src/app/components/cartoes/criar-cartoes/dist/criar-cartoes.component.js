"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CriarCartoesComponent = void 0;
var core_1 = require("@angular/core");
var CriarCartoesComponent = /** @class */ (function () {
    function CriarCartoesComponent(cartaoService, router, route) {
        this.cartaoService = cartaoService;
        this.router = router;
        this.route = route;
        this.tipos = [
            { label: 'Comum', value: 'COMUM' },
            { label: 'Estudante', value: 'ESTUDANTE' },
            { label: 'Trabalhador', value: 'TRABALHADOR' },
        ];
        this.title = "Cadastrar Cartao";
        this.usuarios = [];
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
    CriarCartoesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (querey) {
            _this.cartao.user.id = querey['user_id'];
        });
        console.log(this.route.snapshot.queryParams);
    };
    CriarCartoesComponent.prototype.adicionar = function () {
        var _this = this;
        console.log(this.cartao);
        this.cartaoService.adicionar(this.cartao)
            .subscribe(function () {
            _this.cartaoService.showMessage('Usuario criado com Sucesso!');
            _this.router.navigate(['/cartoes/create'], { queryParams: { 'user_id': _this.cartao.user.id } });
        });
    };
    CriarCartoesComponent.prototype.clear = function () {
        this.cartao.numeroCartao = 0,
            this.cartao.nome = '',
            this.cartao.status = false,
            this.cartao.tipocartao = null;
    };
    CriarCartoesComponent.prototype.cancelar = function () {
        this.router.navigate(['/cartoes']);
    };
    CriarCartoesComponent.prototype.caregarUsuarios = function (id) {
        var _this = this;
        this.cartaoService.buscar().subscribe(function (products) {
            _this.usuarios = products;
        });
    };
    CriarCartoesComponent = __decorate([
        core_1.Component({
            selector: 'app-criar-cartoes',
            templateUrl: './criar-cartoes.component.html',
            styleUrls: ['./criar-cartoes.component.css']
        })
    ], CriarCartoesComponent);
    return CriarCartoesComponent;
}());
exports.CriarCartoesComponent = CriarCartoesComponent;
