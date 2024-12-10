import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'g3a-project';
    //zmienne z inputow
    templogin:string=""
    temppwd:string=""
  
    logatt:boolean=false
  
    i:number =0 
    
    //login[i] odpowiada pwd[i]
  log:{login:string[], pwd:string[]}={
    login:[],
    pwd:[]
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
          alert("logowanie udane")
        }else{
          alert("niepoprawny login lub hasło")
        }
    }
  
  //tworzy nowe konto aka wstawia wpisany login i hasło do tabeli log.login i log.pwd
    createacc():void {
      this.log.login.push(this.templogin)
      this.log.pwd.push(this.temppwd)
    }

}
