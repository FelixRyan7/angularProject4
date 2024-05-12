import { Component, NgModule, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { PlayersComponentComponent } from "./players-component/players-component.component";
import { FormsModule, NgModel } from '@angular/forms';
import { MediaComponentComponent } from './media-component/media-component.component';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { Messaging, getToken, onMessage } from '@angular/fire/messaging';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, PlayersComponentComponent,FormsModule,MediaComponentComponent, CreatePlayerComponent],
    
   
})
export class AppComponent {
  title = 'equipo-basket';
  modalOpen = false;
  
  openModal() {
  
     
      this.modalOpen = true; // Abre el modal
      const modal = document.querySelector('.modal');
      if (modal){
        modal.classList.add('d-block');
      }
    };
  

  
}
