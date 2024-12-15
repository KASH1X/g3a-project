import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MainpageComponent } from './mainpage.component';
import { LoginComponent } from './login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, NgComponentOutlet, MainpageComponent, LoginComponent],
  //ngComponentOutlet pozwala przechodzić pomiędzy stronami
  template: `
        <!--
        <li *ngFor="let zm8 of log.login" >
        {{zm8}}
        </li>
        <li *ngFor="let zm9 of log.pwd" >
        {{zm9}}
        </li>
        -->
        
        <body *ngComponentOutlet="currentPage"></body>`,
  //templateUrl: './app.component.html',
  //styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'g3a-project';
  //currentPage odnosi się do login.component
  currentPage: any = MainpageComponent;
var1:string="var"

log:{login:string[], pwd:string[]}={
  login:[],
  pwd:[]
}
//sprawia że zmienna z ngComponentOutlet się zmienia na zmienną currentPage
  switchTemplate(component: any): void {
    this.currentPage = component;
  }
/*kiedy ngComponentOutlet=currentpage (w tym przypadku Logincomponent)
to znacznik w którym ngComponentOutlet jest odniesie się do swojego skryptu (w tym przypadku login.component.ts)
w którym właściwość templateUrl znajdująca się w @Component ma ścieżke strony którą chcemy wyświetlić (w tym przypadku login.component.html)
  */
}
