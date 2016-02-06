import {Component} from 'angular2/core';
import {TabsComponent} from '../tabs/tabs.component';

@Component({
    selector:'tab',
    inputs: ['title', 'active'],
    template:`
        <div [hidden]="!active">
            <ng-content></ng-content>
        </div>
    `
})

export class TabComponent{
    
    private title: string;
    public active: boolean;
    
    constructor(tabs: TabsComponent) {
        tabs.addTab(this);
    }
}