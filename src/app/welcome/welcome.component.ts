import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  isLoggedIn:boolean =false;
  inpName="";
  username="Hamid";

  login(){
    if(this.inpName === this.username){
      this.isLoggedIn=true;
      this.inpName="";
    }
    else{
      alert('Nom d\'utilisateur incorrect');
    }
  }
}
