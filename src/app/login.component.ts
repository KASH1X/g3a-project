import { CommonModule,NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, AppComponent, NgComponentOutlet],
  templateUrl: './login.component.html',
  //styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'g3a-project';

  constructor(private appComponent: AppComponent) {}

  
    //zmienne z inputow
    templogin:string=""
    temppwd:string=""
  
    logatt:boolean=false
  
    i:number = 0 
    
    //login[i] odpowiada pwd[i]
  log:{login:string[], pwd:string[]}={
    login:["admin","user"],
    pwd:["admin123","123"]
  }

  //sprawdza czy login i hasło z inputa są w obiekcie log
    loginatt():void {
      //sprawdza wszystkie miejsca tabeli
      for(this.i=0;this.i<this.log.login.length;this.i++){
  
        if(this.templogin == this.log.login[this.i] && this.temppwd == this.log.pwd[this.i]){
          this.logatt=true
          break
        }else{
          this.logatt=false
        }
      }
        if(this.logatt == true){
          //alert("logowanie udane")
          this.switchToMain()
        }else{
          alert("niepoprawny login lub hasło")
        }
    }
  
  //tworzy nowe konto aka wstawia wpisany login i hasło do tabeli log.login i log.pwd
    createacc():void {
      this.log.login.push(this.templogin)
      this.log.pwd.push(this.temppwd)
    }

    switchToMain(): void {
        this.appComponent.switchTemplate(MainpageComponent);
      }

}
