"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var criar_cartoes_component_1 = require("./components/cartoes/criar-cartoes/criar-cartoes.component");
var criar_usuario_component_1 = require("./components/usuarios/criar-usuario/criar-usuario.component");
var animations_1 = require("@angular/platform-browser/animations");
var crud_usuarios_component_1 = require("./components/usuarios/crud-usuarios/crud-usuarios.component");
var header_component_1 = require("./components/template/header/header.component");
var crud_cartoes_component_1 = require("./components/cartoes/crud-cartoes/crud-cartoes.component");
var toolbar_1 = require("primeng/toolbar");
var selectbutton_1 = require("primeng/selectbutton");
var inputnumber_1 = require("primeng/inputnumber");
var togglebutton_1 = require("primeng/togglebutton");
var table_1 = require("primeng/table");
var toast_1 = require("primeng/toast");
var calendar_1 = require("primeng/calendar");
var slider_1 = require("primeng/slider");
var multiselect_1 = require("primeng/multiselect");
var contextmenu_1 = require("primeng/contextmenu");
var dialog_1 = require("primeng/dialog");
var button_1 = require("primeng/button");
var dropdown_1 = require("primeng/dropdown");
var progressbar_1 = require("primeng/progressbar");
var inputtext_1 = require("primeng/inputtext");
var api_1 = require("primeng/api");
var messages_1 = require("primeng/messages");
var confirmdialog_1 = require("primeng/confirmdialog");
var snack_bar_1 = require("@angular/material/snack-bar");
var usuario_service_1 = require("./components/usuarios/usuario.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                criar_cartoes_component_1.CriarCartoesComponent,
                criar_usuario_component_1.CriarUsuarioComponent,
                crud_usuarios_component_1.CrudUsuariosComponent,
                header_component_1.HeaderComponent,
                crud_cartoes_component_1.CrudCartoesComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                table_1.TableModule,
                toolbar_1.ToolbarModule,
                button_1.ButtonModule,
                selectbutton_1.SelectButtonModule,
                inputnumber_1.InputNumberModule,
                togglebutton_1.ToggleButtonModule,
                http_1.HttpClientModule,
                snack_bar_1.MatSnackBarModule,
                toast_1.ToastModule,
                calendar_1.CalendarModule,
                slider_1.SliderModule,
                multiselect_1.MultiSelectModule,
                contextmenu_1.ContextMenuModule,
                dialog_1.DialogModule,
                dropdown_1.DropdownModule,
                progressbar_1.ProgressBarModule,
                inputtext_1.InputTextModule,
                confirmdialog_1.ConfirmDialogModule,
                messages_1.MessagesModule,
            ],
            providers: [
                usuario_service_1.UsuarioService,
                api_1.ConfirmationService,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
