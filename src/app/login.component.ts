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
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'g3a-project';

  constructor(private appComponent: AppComponent) {
    //przydziela dane kont z login.component do app.component aby te się nie usunęły po zmianie strony
    //jeśli strona została otwarta po raz albo zostanie dodane konto to przydzieli z login.component do app.component
    //a jeśli wrucisz na strone loginu to przydzieli dane z app.component do login.component bo domyślnie będą tam tylko 2 konta
    if(appComponent.log.login.length<=this.log.login.length){
        appComponent.log.login = this.log.login
        appComponent.log.pwd = this.log.pwd
    }else if(appComponent.log.login.length>this.log.login.length){
        this.log.login = appComponent.log.login
        this.log.pwd = appComponent.log.pwd
    }
  }
  
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
  
  //tworzy nowe konto aka wstawia wpisany login i hasło do tabeli log.login i log.pwd oraz odpowiednio aktualizuje tabele z app.component 
    createacc():void {

            if(this.log.login.includes(this.templogin)){
                alert("użytkownik o takim loginie już istnieje")
            }else{
                this.log.login.push(this.templogin)
                this.log.pwd.push(this.temppwd)

                this.appComponent.log.login = this.log.login
                this.appComponent.log.pwd = this.log.pwd
            }
    }

    switchToMain(): void {
        this.appComponent.switchTemplate(MainpageComponent)
      }

}
