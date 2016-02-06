System.register(['angular2/core', './components/tab/tab.component', './components/tabs/tabs.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tab_component_1, tabs_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tab_component_1_1) {
                tab_component_1 = tab_component_1_1;
            },
            function (tabs_component_1_1) {
                tabs_component_1 = tabs_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [tab_component_1.TabComponent, tabs_component_1.TabsComponent],
                        template: "\n        <center><h1>Angular 2 components</h1></center>\n        \n        <div class=\"container\">\n            <h3>Tabs</h3> \n            <tabs>\n                <tab [title]=\"'Tab 1'\"><h3>Tab 1 Content</h3><p>This is content for tab 1.</p></tab>\n                <tab [title]=\"'Tab 2'\"><h3>Tab 2 Content</h3><p>This is content for tab 2.</p></tab>\n                <tab [title]=\"'Tab 3'\"><h3>Tab 3 Content</h3><p>This is content for tab 3.</p></tab>\n            </tabs>\n        </div>\n        ",
                        styles: [".container{\n                    display: block;\n                    position: relative;\n                    padding: 30px;\n                    width: 100%;\n                    height: 100%;\n                    box-sizing: border-box;\n                 }\n                 h1, h3{\n                    font-family: sans-serif;\n                    color:#353535;\n                 } \n        "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map