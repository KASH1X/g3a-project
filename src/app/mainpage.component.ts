import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule,AppComponent, LoginComponent],
  templateUrl: './mainpage.component.html',
  //styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
  title = 'g3a-project';
  constructor(private appComponent: AppComponent) {}

  switchToLogin(): void {
    this.appComponent.switchTemplate(LoginComponent);
  }

}