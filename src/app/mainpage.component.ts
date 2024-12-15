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
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
  title = 'g3a-project';
  constructor(private appComponent: AppComponent) {}
  
  sec: HTMLElement | null = null;

  // ngAfterViewInit najpierw czeka aż wszystkie elementy się załadują a potem je woła
  // to pomaga kiedy elementy na początku są null 
  ngAfterViewInit(): void {
    this.sec = document.getElementById("gameSection")
  }

  characters:string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
  tempcode:string=""
  j:number=0
  
  i:number =0

  key:{code:string[], price:string[] }={
    code:[],
    price:[]
  }
  

  switchToLogin(): void {
    this.appComponent.switchTemplate(LoginComponent);
  }

  drawkey():void{
    if(this.j < 14){
    this.tempcode=""
    //generuje losowy kod pobierając znaki z zmiennej characters
    for(this.i = 0;this.i<9;this.i++){
      this.tempcode += this.characters[Math.floor(Math.random()*62)]
    }
  //cena jest stringiem bo inaczej zaokrąglanie toFixed() nie działa
    this.key.code.push(this.tempcode)
    this.key.price.push((Math.random()*200).toFixed(2))
    this.appendGameKey()
  }else{
    alert("You can't have more than 14 Game Keys")
  }
}

/*if (this.sec) sprawdza czy sec istnieje bo inaczej appendChild nie działa
appendGameKey tworzy elementy z wygenerowanym kodem i ceną
kod jest ukryty a po naciśnięciu guzika "kupieniu" pokazuje kod gry
*/
appendGameKey():void{
  if (this.sec) {
    const gameKey:HTMLElement = document.createElement("section")
    gameKey.style.margin = "10pt"
    gameKey.style.padding = "20pt"
    gameKey.style.width = "125pt"
    gameKey.style.height = "175pt"
    gameKey.style.border = "2pt solid green"
    gameKey.style.float = "left"
    gameKey.style.textAlign = "center"

    const priceTag:HTMLElement = document.createElement("h2");
      priceTag.textContent = this.key.price[this.j];
      priceTag.style.textAlign = "center";
// temp index sprawia że wartość w showkey() pozostaje nie zmieniona w danym guziku
// tak każdy button ma unikatową wartość w funkcji co pomaga w odrużnieniu elementów z unikatowym id który odpowiada temu buttonowi (bo są na tej samej karcie)
//mam nadzieje że to ma sens
    const tempindex:number = this.j
    const buyButton:HTMLButtonElement = document.createElement("button");
    buyButton.textContent = "Buy Game Key";
    buyButton.addEventListener("click", () => this.showKey(tempindex));
    
    const gameCode:HTMLElement = document.createElement("h1")
    gameCode.innerHTML = "<center><b>"+this.tempcode+"</b></center>"
    gameCode.style.visibility = "hidden"
    gameCode.id = "gamenr"+tempindex

    gameKey.appendChild(priceTag)
    gameKey.appendChild(buyButton)
    gameKey.appendChild(gameCode)
    this.sec.appendChild(gameKey)
    this.j++
  }
}

// pokazuje klucz odpowiadającej karty czy nie wiem jak to nazwać
showKey(codeNum:number):void{
  const Code:HTMLElement | null = document.getElementById("gamenr" + codeNum);
// sprawdza czy Code istnieje bo inaczej nie działa
  if (Code) {
    Code.style.visibility = "visible";
  }
}

}