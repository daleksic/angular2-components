import {Component} from 'angular2/core';
import {TabComponent} from './components/tab/tab.component';
import {TabsComponent} from './components/tabs/tabs.component';

@Component({
    
    selector:'app',
    directives:[TabComponent, TabsComponent],
    template: `
        <center><h1>Angular 2 components</h1></center>
        
        <div class="container">
            <h3>Tabs</h3> 
            <tabs>
                <tab [title]="'Tab 1'"><h3>Tab 1 Content</h3><p>This is content for tab 1.</p></tab>
                <tab [title]="'Tab 2'"><h3>Tab 2 Content</h3><p>This is content for tab 2.</p></tab>
                <tab [title]="'Tab 3'"><h3>Tab 3 Content</h3><p>This is content for tab 3.</p></tab>
            </tabs>
        </div>
        `,
        styles:[`.container{
                    display: block;
                    position: relative;
                    padding: 30px;
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                 }
                 h1, h3{
                    font-family: sans-serif;
                    color:#353535;
                 } 
        `]
})

export class AppComponent{}