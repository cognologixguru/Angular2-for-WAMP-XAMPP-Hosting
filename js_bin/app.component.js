"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>Tritan Technologies </h1><h3><li>TypeScript is now compiled to JS and stored in <b>/js_bin</b></li><br><li>So for UI coding(TypeScript) the <b>/app</b> folder will only matter</li><br><li>However for any JS config changes(change of default directory locations or mappings) look into <b>systemjs.config.js</b></li><br><li>And for TS compiler adjustments change <b>tsconfig.json</b></li><br><br></h3><h2>-Diganta Datta</h2>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*Created by Diganta -Tritan Technologies*/
/*So for UI coding the /app folder will only matter</br> However for any JS config changes look into systemjs.config.js</br>And for TS compiler adjustments change tsconfig.json'*/
//# sourceMappingURL=app.component.js.map