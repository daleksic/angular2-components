import {Component} from 'angular2/core';
import {TabComponent} from '../tab/tab.component';

@Component({
    selector:'tabs',
    template:`
        <div class="container-tabs">
            <ul>
                <li *ngFor="#tab of tabs" (click)="selectTab(tab)" [ngStyle]="{'width': tabWidth}" >
                    <a [class.tab-active]="tab.active" >{{ tab.title }}</a>
                </li>
            </ul>
            <div class="container-tab">
                <ng-content ></ng-content>
            </div>
         <div>
    `,
    styleUrls:['./app/components/tabs/tabs.css']
})

export class TabsComponent{
    
    private tabs: TabComponent[];
    private tabWidth: string = '100%';
    
    constructor() {
        this.tabs = [];
    }
    
    addTab(tab:TabComponent) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);     
    }
    
    selectTab(tab:TabComponent) {
        this.tabs.forEach((tab) => {
            tab.active = false;
        });
        tab.active = true;
    }
    
    ngAfterContentInit() {
        this.tabWidth = 100 / this.tabs.length + "%";
    }
}