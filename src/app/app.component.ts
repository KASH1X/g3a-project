import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MainpageComponent } from './mainpage.component';
import { LoginComponent } from './login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, NgComponentOutlet, MainpageComponent, LoginComponent],
  template: '<ng-container *ngComponentOutlet="currentPage"></ng-container>',
  //templateUrl: './app.component.html',
  //styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'g3a-project';
  currentPage: any = LoginComponent;

  switchTemplate(component: any): void {
    this.currentPage = component;
  }

  
}
