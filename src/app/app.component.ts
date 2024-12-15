import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MainpageComponent } from './mainpage.component';
import { LoginComponent } from './login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, NgComponentOutlet, MainpageComponent, LoginComponent],
  template: `
        <!--
        <li *ngFor="let zm8 of log.login" >
        {{zm8}}
        </li>
        <li *ngFor="let zm9 of log.pwd" >
        {{zm9}}
        </li>
        -->
        <ng-container *ngComponentOutlet="currentPage"></ng-container>`,
  //templateUrl: './app.component.html',
  //styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'g3a-project';
  currentPage: any = LoginComponent;
var1:string="var"

log:{login:string[], pwd:string[]}={
  login:[],
  pwd:[]
}

  switchTemplate(component: any): void {
    this.currentPage = component;
  }

  
}
